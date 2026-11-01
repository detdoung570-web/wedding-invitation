import React from 'react';

export const ScheduleSection: React.FC = () => {
  return (
    <section className="schedule" id="program" aria-labelledby="programHeading">
      {/* Looping Ambient Gold Glow Orbs */}
      <div className="schedule-glow-orb one" aria-hidden="true" />
      <div className="schedule-glow-orb two" aria-hidden="true" />

      <div className="wrap relative z-10">
        <p className="section-label">Wedding celebration</p>
        <h2 className="section-h" id="programHeading">
          កម្មវិធីអាពាហ៍ពិពាហ៍
        </h2>
        <p className="schedule-intro">
          សូមអញ្ជើញចូលរួមអបអរសាទរថ្ងៃដ៏ពិសេស និងចែករំលែកស្នាមញញឹមជាមួយយើងខ្ញុំ។
        </p>

        <div className="program">
          <div className="program-card">
            <div className="program-icon" aria-hidden="true">
              ❀
            </div>
            <h3>ពិធីសិរីមង្គល</h3>
            <p>Wedding blessings</p>
          </div>

          <div className="program-card">
            <div className="program-icon" aria-hidden="true">
              ♧
            </div>
            <h3>ទទួលភ្ញៀវកិត្តិយស</h3>
            <p>Guest reception</p>
          </div>

          <div className="program-card">
            <div className="program-icon" aria-hidden="true">
              ♡
            </div>
            <h3>ជួបជុំអបអរសាទរ</h3>
            <p>Celebrate together</p>
          </div>
        </div>

        <p className="schedule-note">
          * ផ្នែកកម្មវិធីនេះជាគំរូ។ សូមកែប្រែលំដាប់កម្មវិធី និងបន្ថែមម៉ោងពិតប្រាកដមុនផ្សព្វផ្សាយ។
        </p>
      </div>
    </section>
  );
};
