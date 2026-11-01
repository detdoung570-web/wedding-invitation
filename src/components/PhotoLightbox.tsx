import React, { useEffect } from 'react';
import { PhotoItem } from '../types/wedding.ts';

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="lightbox"
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="មើលរូបថត"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="close-btn"
        type="button"
        onClick={onClose}
        aria-label="បិទរូបថត"
      >
        ×
      </button>
      <div className="text-center max-w-4xl px-4">
        <img
          id="lightboxImage"
          src={photo.src}
          alt={photo.alt}
          className="mx-auto rounded-xs shadow-2xl"
        />
        {photo.caption && <p id="lightboxCaption">{photo.caption}</p>}
      </div>
    </div>
  );
};
