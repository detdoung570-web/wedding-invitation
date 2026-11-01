import React, { useMemo } from 'react';

export const HeroSection: React.FC = () => {
  // Generate gold particles identical to original script logic
  const particles = useMemo(() => {
    const count = 18;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: `${(i * 37 + 11) % 97}%`,
      size: `${i % 4 === 0 ? 4 : 2}px`,
      duration: `${8 + (i % 7)}s`,
      delay: `${-i * 0.82}s`,
      drift: `${((i * 23) % 96) - 48}px`,
    }));
  }, []);

  return (
    <section className="hero wrap" aria-labelledby="heroTitle">
      {/* Looping Ambient Golden Light Beams */}
      <div className="hero-aura" aria-hidden="true">
        <div className="hero-light-beam-1" />
        <div className="hero-light-beam-2" />
        <div className="hero-light-beam-3" />
      </div>

      {/* Gold Dust Particles */}
      <div className="gold-dust" id="goldDust" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="gold-particle"
            style={
              {
                '--x': p.x,
                '--size': p.size,
                '--duration': p.duration,
                '--delay': p.delay,
                '--drift': p.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="hero-grid">
        {/* Photo Wrap with Pulsing Halo and Sweeping Light Sheen */}
        <div className="hero-photo-wrap">
          <div className="photo-halo-glow" aria-hidden="true" />
          <div className="photo-light-sheen" aria-hidden="true" />

          <span className="frame-corner tl" aria-hidden="true">
            ✧
          </span>
          <span className="frame-corner br" aria-hidden="true">
            ✧
          </span>
          <img
            className="hero-photo"
            src="/assets/couple-main.jpg"
            width={820}
            height={1050}
            alt="កន្លែងសម្រាប់រូបថតអនុស្សាវរីយ៍របស់ ដូង ដេត និង ឃៀង លីណា"
            loading="eager"
          />
          <div className="photo-ribbon" aria-hidden="true">
            <span>
              ដ <i>✦</i> ល
            </span>
            <small>EST. 05 FEB 2027</small>
          </div>
        </div>

        {/* Copy */}
        <div className="hero-copy">
          <div className="hero-float" aria-hidden="true"></div>
          <div className="gold-crest" aria-hidden="true">
            <span>✦</span> ដ &amp; ល <span>✦</span>
          </div>

          <h1 className="kh-hero" id="heroTitle">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h1>
          <p className="en-sub">The Wedding Celebration</p>

          <div className="fine-line" aria-hidden="true">
            ❧
          </div>

          <p
            className="names khmer-names"
            aria-label="ដូង ដេត ឃៀង លីណា"
          >
            <span className="groom">ដូង ដេត</span>
            <span className="amp">&amp;</span>
            <span className="bride">ឃៀង លីណា</span>
          </p>

          <p className="hero-date-label">Together, a beautiful beginning</p>
          <p className="hero-date">05 · 02 · 2027</p>
          <p className="hero-date-kh">ថ្ងៃសៅរ័ ទី០៥ ខែកុម្ភៈ ឆ្នាំ២០២៧</p>

          <div className="hero-ornament" aria-hidden="true">
            ✧ <span>❦</span> ✧
          </div>

          <img
            className="butterfly"
            src="/assets/butterfly.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      <a className="scroll-cue" href="#invitation">
        បើកមើលលិខិតអញ្ជើញ{' '}
        <span className="arrow" aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  );
};
