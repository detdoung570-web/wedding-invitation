import React from "react";

export const Memories: React.FC = () => {
  return (
    <section className="w-full bg-[#E8DCC4] text-[#8C6A3E] font-sans relative overflow-hidden">
      
      {/* Custom Animations injected right here */}
      <style>
        {`
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
          }
          @keyframes floatGold {
            0% { transform: translateY(0px) scale(1); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
            100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          }
          @keyframes goldShimmerText {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
          .animate-sparkle-delay { animation: sparkle 4s ease-in-out infinite 1.5s; }
          .animate-sparkle-fast { animation: sparkle 2s ease-in-out infinite 0.7s; }
          .animate-float-gold { animation: floatGold 6s ease-in-out infinite; }
          
          .gold-greeting-text {
            background: linear-gradient(90deg, #C7AF7A 0%, #FFF5D1 50%, #C7AF7A 100%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: goldShimmerText 4s linear infinite;
          }
        `}
      </style>

      {/* ================= HERO / COVER SECTION ================= */}
      <div className="flex flex-col md:flex-row w-full min-h-150 relative z-10">
        {/* Left Photo */}
        <div className="w-full md:w-1/2 relative bg-black">
          <img
            src="/assets/cong1.jpg" // <--- REPLACE WITH YOUR ACTUAL IMAGE PATH
            alt="Dong Det and Khieng Lina"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Details */}
        <div className="w-full md:w-1/2 bg-[#8C744E] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden">
          
          {/* Continuous Golden Sparkle Effect Loop in Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[20%] text-[#FFF5D1] animate-sparkle">✦</div>
            <div className="absolute top-[30%] right-[15%] text-[#FFF5D1] animate-sparkle-delay text-xl">✦</div>
            <div className="absolute bottom-[25%] left-[30%] text-[#FFF5D1] animate-sparkle-fast text-sm">✦</div>
            <div className="absolute top-[10%] right-[40%] text-[#FFF5D1] animate-sparkle">✧</div>
            <div className="absolute bottom-[10%] right-[20%] text-[#FFF5D1] animate-sparkle-delay text-lg">✧</div>
            <div className="absolute top-[50%] left-[10%] text-[#FFF5D1] animate-sparkle-fast">✦</div>
            
            {/* Floating Golden Orbs */}
            <div className="absolute bottom-10 left-10 w-3 h-3 bg-[#C7AF7A] rounded-full animate-float-gold blur-[1px]"></div>
            <div className="absolute top-20 right-10 w-2 h-2 bg-[#FFF5D1] rounded-full animate-float-gold blur-[1px]" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#C7AF7A] rounded-full animate-float-gold blur-[2px]" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md">
            
            {/* Beautiful Golden Greeting */}
            <h1 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-widest mb-6 gold-greeting-text drop-shadow-sm">
              Congratulations
            </h1>

            {/* Date Section */}
            <div className="flex items-center justify-between w-full text-white tracking-widest uppercase mb-8">
              <span className="text-lg md:text-xl font-light">February</span>
              <div className="border-l border-r border-white/50 px-6 py-2">
                <span className="block text-sm md:text-base font-light mb-1">Friday</span>
                <span className="block text-3xl md:text-4xl font-serif">05th</span>
              </div>
              <span className="text-lg md:text-xl font-light">2026</span>
            </div>

            {/* Decorative Rings Illustration (Your Image) */}
            <div className="mb-10 flex justify-center">
              <img
                src="/assets/khach.png"
                alt="Decorative rings"
                className="w-30 h-auto object-contain opacity-90"
              />
            </div>

            {/* Location Details */}
            <div className="text-white font-serif italic text-lg md:text-xl leading-relaxed mb-12 space-y-1 khmer-names">
              <p>ម៉ោង០៥ល្ងាច នៅភូមិព្រៃស្បាត</p>
              <p>ឃុំត្រពាំងធំខាងជើង</p>
              <p>ស្រុកត្រាំកក់</p>
              <p>ខេត្តតាកែវ</p>
            </div>

            {/* Decorative Toast Illustration */}
            <div className="text-white/80">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 50 L35 20 L45 20 L50 50 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M20 15 Q 30 5 40 15 T 60 15" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="40" cy="10" r="2" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MEMORIES / QUOTE SECTION ================= */}
      <div className="relative w-full py-16 px-6 md:px-16 overflow-hidden">
        
        {/* Background Decorative Leaves (Adding subtle looping sparkles here too) */}
        <div className="absolute top-10 left-10 text-[#C7AF7A] animate-sparkle text-2xl">✦</div>
        <div className="absolute bottom-20 left-1/3 text-[#C7AF7A] animate-sparkle-delay text-xl">✧</div>
        <div className="absolute top-1/3 right-10 text-[#C7AF7A] animate-sparkle-fast text-3xl">✦</div>

        <div className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q 50 150 100 100 T 200 0" stroke="#C7AF7A" strokeWidth="2" fill="none"/>
            <path d="M20 160 Q 60 140 80 100" stroke="#C7AF7A" strokeWidth="1" fill="none"/>
            <path d="M60 120 Q 90 100 120 60" stroke="#C7AF7A" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
          
          {/* Left Column: Quote & Bottom Image */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Quote */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light uppercase tracking-wide text-[#7A6A4D] leading-snug">
              Your presence would mean <br className="hidden md:block" />
              the world to us as we begin <br className="hidden md:block" />
              this new chapter together
            </h2>

            {/* Bottom Left Image (Boat) */}
            <div className="relative w-full aspect-video bg-gray-200 rounded-sm overflow-hidden shadow-sm">
              <img
                src="/assets/conot4.jpg" // <--- REPLACE WITH YOUR ACTUAL IMAGE PATH
                alt="Traditional boat memory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Main Portrait Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-3/4 bg-gray-200 rounded-sm overflow-hidden shadow-lg border-4 border-[#F5EFE1]">
              <img
                src="/assets/conot3.jpg" // <--- REPLACE WITH YOUR ACTUAL IMAGE PATH
                alt="Couple in traditional attire"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
