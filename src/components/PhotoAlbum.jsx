import React, { useState, useEffect, useCallback } from 'react';

const photos = [
  { id: 1, src: '/assets/photos/_DSC2394.jpg' },
  { id: 2, src: '/assets/photos/_DSC2413.webp' },
  { id: 3, src: '/assets/photos/_DSC2459.webp' },
  { id: 4, src: '/assets/photos/_DSC2430.webp' },
  { id: 5, src: '/assets/photos/_DSC2456.webp' },
  { id: 6, src: '/assets/photos/_DSC2540.webp' },
  { id: 7, src: '/assets/photos/_DSC2575.webp' },
  { id: 8, src: '/assets/photos/_DSC2646.webp' },
  { id: 9, src: '/assets/photos/_DSC2769.webp' },
  { id: 10, src: '/assets/photos/IMG_0178.webp' },
  { id: 11, src: '/assets/photos/add1.webp' },
  { id: 12, src: '/assets/photos/add2.webp' },
  { id: 13, src: '/assets/photos/add3.webp' },
  { id: 14, src: '/assets/photos/add4.webp' },
  { id: 15, src: '/assets/photos/add5.webp' },
  { id: 16, src: '/assets/photos/add6.webp' },
  { id: 17, src: '/assets/photos/add7.webp' },
  { id: 189, src: '/assets/photos/add9.jpg' },
];

export default function PhotoAlbum() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Close lightbox
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  // Next/Prev navigation
  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    // Prevent background scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIndex(index)}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt || `Wedding Photo ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white drop-shadow-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-[110]"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-2 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors z-[110]"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image */}
          <img
            src={photos[selectedIndex].src}
            alt={`Preview ${selectedIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          />

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-2 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors z-[110]"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm md:text-base font-medium bg-black/50 px-4 py-1 rounded-full">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}