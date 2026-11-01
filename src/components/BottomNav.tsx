import React from 'react';

const MAP_URL = 'https://maps.app.goo.gl/xqypucSHygNJn5xm9';

export const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav" aria-label="Wedding website navigation">
      <a href="#top">
        ⌂ <span>ដើម</span>
      </a>
      <a href="#program">
        ✧ <span>កម្មវិធី</span>
      </a>
      <a href="#gallery">
        ♡ <span>រូបថត</span>
      </a>
      <a
        className="nav-gold"
        href={MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        ⌖ <span>ទីតាំង</span>
      </a>
    </nav>
  );
};
