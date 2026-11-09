import React from 'react';
import { PhotoItem } from '../types/wedding.ts';

interface GallerySectionProps {
  onOpenPhoto: (item: PhotoItem) => void;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'g-1',
    src: '/assets/couple-1.jpg',
    alt: 'រូបថតសម្រាប់អនុស្សាវរីយ៍ទី១',
    caption: 'Sweet moments',
  },
  {
    id: 'g-2',
    src: '/assets/couple-3.jpg',
    alt: 'រូបថតសម្រាប់អនុស្សាវរីយ៍ទី២',
    caption: 'Forever us',
  },
  {
    id: 'g-3',
    src: '/assets/couple-5.jpg',
    alt: 'រូបថតសម្រាប់អនុស្សាវរីយ៍ទី៣',
    caption: 'Together always',
  },
  {
    id: 'g-4',
    src: '/assets/couple-4-1.jpg',
    alt: 'រូបថតសម្រាប់អនុស្សាវរីយ៍ទី៤',
    caption: 'Our love story',
  },
  {
    id: 'g-5',
    src: '/assets/couple-5-1.jpg',
    alt: 'រូបថតសម្រាប់អនុស្សាវរីយ៍ទី៥',
    caption: 'Best day ever',
  },
  {
    id: 'g-6',
    src: '/assets/couple-6.jpg',
    alt: 'រូបថតសម្រាប់អនុស្សាវរីយ៍ទី៦',
    caption: 'Always & forever',
  },
];

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenPhoto }) => {
  return (
    <section className="gallery wrap" id="gallery" aria-labelledby="galleryHeading">
      <div>
        <p className="section-label">Our precious memories</p>
        <h2 className="section-h" id="galleryHeading">
          អនុស្សាវរីយ៍របស់យើង
        </h2>
        <p className="gallery-intro">
          A little collection of moments leading to forever.
        </p>
      </div>

      <div className="gallery-grid">
        {GALLERY_PHOTOS.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            className="photo-button"
            onClick={() => onOpenPhoto(photo)}
            aria-label={`មើលរូបថតទី${index + 1}`}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
};
