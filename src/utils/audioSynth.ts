/**
 * Background Khmer traditional wedding music player
 * Uses HTML5 Audio to stream wedding.mp3 with seamless looping
 */

let weddingAudio: HTMLAudioElement | null = null;
let isPlaying = false;

function getAudio(): HTMLAudioElement {
  if (!weddingAudio) {
    weddingAudio = new Audio('https://youtu.be/XKNgycbj1qo?si=_wbpZQoNm_grnJdv');
    weddingAudio.loop = true;
    weddingAudio.preload = 'auto';
    weddingAudio.volume = 0.6; // Adjust from 0.0 to 1.0

    // Sync state if audio ends unexpectedly or is paused by the system
    weddingAudio.addEventListener('pause', () => {
      isPlaying = false;
    });
  }
  return weddingAudio;
}

export function toggleWeddingMusic(callback?: (playing: boolean) => void): boolean {
  const audio = getAudio();

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    if (callback) callback(false);
    return false;
  }

  // Attempt to play audio
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        if (callback) callback(true);
      })
      .catch((error) => {
        console.warn('Playback failed or blocked by browser autoplay policy:', error);
        isPlaying = false;
        if (callback) callback(false);
      });
  }

  // Optimistically set to true for immediate UI response
  isPlaying = true;
  if (callback) callback(true);
  return true;
}

export function isMusicPlaying(): boolean {
  return isPlaying;
}