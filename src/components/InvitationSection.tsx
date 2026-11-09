import React from 'react';
import { PhotoItem } from '../types/wedding.ts';

interface InvitationSectionProps {
  onOpenPhoto: (item: PhotoItem) => void;
  onShowToast: (msg: string) => void;
}

// Using a standard Phnom Penh location for the map visual
const MAP_EMBED_URL = 'https://maps.google.com/maps?q=Phnom%20Penh&t=&z=13&ie=UTF8&iwloc=&output=embed';
const MAP_URL = 'https://maps.app.goo.gl/xqypucSHygNJn5xm9';

export const InvitationSection: React.FC<InvitationSectionProps> = ({
  onOpenPhoto,
  onShowToast,
}) => {
  const handleCalendarDownload = () => {
    const content = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Invitation//KH//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'UID:ratana-rotha-wedding-20270206@ais.build',
      'DTSTAMP:20261027T000000Z',
      'DTSTART;VALUE=DATE:20270206',
      'DTEND;VALUE=DATE:20270207',
      'SUMMARY:ពិធីមង្គលការ ដូង ដេត និង ឃៀង លីណា',
      'DESCRIPTION:Wedding invitation. Map: ' + MAP_URL,
      'URL:' + MAP_URL,
      'END:VEVENT',
      'END:VCALENDAR',
      '',
    ].join('\r\n');

    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ratana-Rotha-Wedding-2027.ics';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    onShowToast('បានរៀបចំឯកសារប្រតិទិនសម្រាប់រក្សាទុក');
  };

  return (
    <>
      <div className="paper-edge" aria-hidden="true"></div>

      <section className="scrap" id="invitation" aria-labelledby="inviteHeading">
        <div className="wrap scrap-inner">
          {/* Left Washi Tape Card */}
          <div className="tape">
            <div className="section-label">A heartfelt invitation</div>
            <h2 className="section-h" id="inviteHeading">
              លិខិតអញ្ជើញមង្គលការ
            </h2>

            <img
              className="sticker"
              src="/assets/flower.png"
              alt=""
              aria-hidden="true"
            />

            <p className="invite-text">
              យើងខ្ញុំមានកិត្តិយសយ៉ាងក្រៃលែង សូមគោរពអញ្ជើញ លោក លោកស្រី
              អ្នកនាងកញ្ញា និងបងប្អូនញាតិមិត្តជាទីគោរពទាំងអស់
              មេត្តាអញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស
              និងជាសាក្សីក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំទាំងពីរ។
            </p>

            {/* Restructured Names Section to match the image */}
            <div className="invite-text invite-highlight flex-row-names">
              <div className="name-block">
                <span className="role-label">កូនកំលោះ</span>
                <span className="gold-shimmer-text font-bold name-text">ដូង ដេត</span>
              </div>
              
              <div className="heart-divider" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>

              <div className="name-block">
                <span className="role-label">កូនក្រមុំ</span>
                <span className="gold-shimmer-text font-bold name-text">ឃៀង លីណា</span>
              </div>
            </div>

            <div className="event-date">
              <div className="number">05</div>
              <div className="meta">
                <strong>February 2027</strong>
                <br />
                ថ្ងៃសុក្រ ទី០៥ ខែកុម្ភៈ ឆ្នាំ២០២៧
                <br />
                ដោយសេចក្តីសោមនស្សរីករាយ
              </div>
            </div>

            <h3 className="location-title">ទីតាំងប្រារព្ធពិធីមង្គលការ</h3>

            <div className="map-grid">
              <div className="qr-panel">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="បើកទីតាំង Google Maps"
                >
                  <img
                    src="/assets/venue-qr.png"
                    alt="QR សម្រាប់តំណ Google Maps"
                    width={320}
                    height={320}
                    loading="lazy"
                  />
                </a>
                <p>ស្កេន QR ដើម្បីមើលទីតាំង</p>
              </div>

              {/* Replaced decorative map with a real iframe map for visual accuracy */}
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="map-panel map-link-wrapper"
                aria-label="ចុចដើម្បីមើលទីតាំងនៅលើ Google Maps"
              >
                <iframe
                  title="Google Maps Location"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: 'none' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                {/* Custom decorative map pin matching CSS aesthetic */}
                <div className="custom-map-pin" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>

                <div className="map-caption">
                  ចុចដើម្បីបើកក្នុង Google Maps
                </div>
              </a>
            </div>

            <div className="buttons">
              <a
                className="btn"
                id="mapLink"
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                បើក Google Maps <span aria-hidden="true">↗</span>
              </a>
              <button
                className="btn secondary"
                id="calendarButton"
                type="button"
                onClick={handleCalendarDownload}
              >
                បន្ថែមទៅប្រតិទិន
              </button>
            </div>
          </div>

          {/* Right Polaroid Photo Stack */}
          <div className="polaroids" aria-label="Wedding photo collage">
            <button
              className="polaroid one"
              type="button"
              onClick={() =>
                onOpenPhoto({
                  id: 'p-1',
                  src: '/assets/int1.jpg',
                  alt: 'កន្លែងដាក់រូបថតទី១',
                  caption: 'Sweet moments',
                  subcaption: 'Our favorite moments',
                })
              }
              aria-label="បើករូបថតទី១"
            >
              <img
                src="/assets/int1.jpg"
                alt="កន្លែងដាក់រូបថតទី១"
                loading="lazy"
              />
              <figcaption>Sweet moments</figcaption>
              <span className="polaroid-subtext">The Union of Two</span>
            </button>

            <button
              className="polaroid two"
              type="button"
              onClick={() =>
                onOpenPhoto({
                  id: 'p-2',
                  src: '/assets/int2.jpg',
                  alt: 'កន្លែងដាក់រូបថតទី២',
                  caption: 'Forever us',
                  subcaption: 'Side by side',
                })
              }
              aria-label="បើករូបថតទី២"
            >
              <img
                src="/assets/int2.jpg"
                alt="កន្លែងដាក់រូបថតទី២"
                loading="lazy"
              />
              <figcaption>Forever us</figcaption>
              <span className="polaroid-subtext">Endless Devotion</span>
            </button>

            <button
              className="polaroid three"
              type="button"
              onClick={() =>
                onOpenPhoto({
                  id: 'p-3',
                  src: '/assets/int3.jpg',
                  alt: 'កន្លែងដាក់រូបថតទី៣',
                  caption: 'With love',
                  subcaption: 'Together, always',
                })
              }
              aria-label="បើករូបថតទី៣"
            >
              <img
                src="/assets/int3.jpg"
                alt="កន្លែងដាក់រូបថតទី៣"
                loading="lazy"
              />
              <figcaption>With love</figcaption>
              <span className="polaroid-subtext">A Journey of Love</span>
            </button>

            <img
              className="flower-floating"
              src="/assets/Rumdul.png"
              alt=""
              aria-hidden="true"
            />
            <span className="handwritten" aria-hidden="true">
              Always &amp; forever ♡
            </span>
          </div>
        </div>
      </section>

      <div className="paper-edge reverse" aria-hidden="true"></div>
    </>
  );
};
