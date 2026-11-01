import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Extract video ID from a YouTube URL (youtu.be / watch?v= / embed/)
const YOUTUBE_VIDEO_ID = "XKNgycbj1qo"; 

interface TopBarProps {
  onShowToast: (msg: string) => void;
}

// Minimal typings for the YouTube IFrame API
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export const TopBar: React.FC<TopBarProps> = ({ onShowToast }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Load the YouTube IFrame API and create the player once
  useEffect(() => {
    const createPlayer = () => {
      if (!containerRef.current || playerRef.current) return;
      
      // Get the current origin (e.g., http://192.168.0.188:3000 or https://yourdomain.com)
      // This fixes the postMessage warning!
      const currentOrigin = window.location.origin;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID, // required for loop
          playsinline: 1,
          modestbranding: 1,
          origin: currentOrigin, // <--- Fixes the yellow postMessage warning
        },
        events: {
          onReady: (event: any) => {
            event.target.setVolume(60);
          },
          onStateChange: (event: any) => {
            // 1 = playing, 2 = paused, 0 = ended
            setPlaying(event.data === 1);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const existingScript = document.getElementById("youtube-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        // Added ?host= to help the API initialize cleanly and reduce internal logging
        tag.src = `https://www.youtube.com/iframe_api?host=${window.location.host}`;
        document.head.appendChild(tag);
      }
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prevCallback?.();
        createPlayer();
      };
    }

    return () => {
      // Do not destroy on unmount in a single-page invite (keep music persistent).
    };
  }, []);

  const handleAudioToggle = () => {
    const player = playerRef.current;
    if (!player) {
      onShowToast("កំពុងផ្ទុកភ្លេង សូមរង់ចាំ...");
      return;
    }

    const state = player.getPlayerState?.();
    if (state === 1) {
      player.pauseVideo();
      setPlaying(false);
      onShowToast("បានបិទភ្លេង");
    } else {
      player.playVideo();
      setPlaying(true);
      onShowToast("កំពុងចាក់ភ្លេងមង្គលការ...");
    }
  };

  return (
    <header className="topbar sticky" id="top">
      <a
        className="brand"
        href="#top"
        aria-label="លិខិតអញ្ជើញមង្គលការ ដូង ដេត និង ឃៀង លីណា"
      >
        <span className="gold-shimmer-text">ដូង ដេត ❤️ ឃៀង លីណា</span>
      </a>

      <div className="flex items-center gap-3">
        <div className="mini">ថ្ងៃពិសេសរបស់យើង</div>

        <button
          type="button"
          onClick={handleAudioToggle}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border border-[#d6bd8c] bg-[#fffdf7] text-[#76501f] hover:bg-[#f7eedc] transition-colors shadow-xs"
          title={playing ? "បិទភ្លេង (Mute)" : "ចាក់ភ្លេងមង្គលការ (Play music)"}
          aria-label={playing ? "បិទភ្លេង" : "ចាក់ភ្លេងមង្គលការ"}
        >
          {playing ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#ac7b24] animate-pulse" />
              <span className="text-[10px] font-medium hidden sm:inline">
                ភ្លេងមង្គល
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#887960]" />
              <span className="text-[10px] font-medium hidden sm:inline">
                បើកភ្លេង
              </span>
            </>
          )}
        </button>

        {/* Hidden YouTube player container */}
        <div
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <div ref={containerRef} />
        </div>
      </div>
    </header>
  );
};