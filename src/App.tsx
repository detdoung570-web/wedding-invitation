/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { TopBar } from "./components/TopBar.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { InvitationSection } from "./components/InvitationSection.tsx";
import { BlessingSection } from "./components/BlessingSection.tsx";
import { ScheduleSection } from "./components/ScheduleSection.tsx";
import { GallerySection } from "./components/GallerySection.tsx";
import { CountdownSection } from "./components/CountdownSection.tsx";
import { GuestbookSection } from "./components/GuestbookSection.tsx";
import { FooterSection } from "./components/FooterSection.tsx";
import { BottomNav } from "./components/BottomNav.tsx";
import { PhotoLightbox } from "./components/PhotoLightbox.tsx";
import { PhotoItem } from "./types/wedding.ts";
import { Memories } from "./components/Memories.tsx";

export default function App() {
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll Progress Calculation
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress =
          totalHeight > 0
            ? Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100))
            : 0;
        setScrollWidth(currentProgress);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
    return () => clearTimeout(timer);
  };

  return (
    <div className="relative min-h-screen text-[#4b3825]">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        id="scrollProgress"
        style={{ width: `${scrollWidth}%` }}
        aria-hidden="true"
      />

      {/* Top Bar Header */}
      <TopBar onShowToast={showToast} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <BlessingSection onOpenPhoto={setActivePhoto} />
        <ScheduleSection />
        <GallerySection onOpenPhoto={setActivePhoto} />
        <InvitationSection
          onOpenPhoto={setActivePhoto}
          onShowToast={showToast}
        />
        <Memories />
        <CountdownSection />
        <GuestbookSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <FooterSection onShowToast={showToast} />

      {/* Floating Bottom Nav */}
      <BottomNav />

      {/* Full-Screen Lightbox */}
      <PhotoLightbox photo={activePhoto} onClose={() => setActivePhoto(null)} />

      {/* Notification Toast */}
      {toastMessage && (
        <div
          className="toast animate-in fade-in slide-in-from-top duration-200"
          role="status"
          aria-live="polite"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
