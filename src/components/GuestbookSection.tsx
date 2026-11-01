import React, { useState, useEffect } from "react";
import { Send, Heart, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { GuestWish } from "../types/wedding.ts";

interface GuestbookSectionProps {
  onShowToast: (msg: string) => void;
}

const INITIAL_WISHES: GuestWish[] = [
  {
    id: "w-1",
    name: "ថាធារ៉ា & គ្រួសារ",
    relationship: "ញាតិមិត្តខាងកូនកំលោះ",
    message:
      "សូមប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល វិបុលសុខ កើតមានដល់ក្មួយទាំងពីរ ស្រឡាញ់គ្នារហូតដល់ចាស់កោងខ្នង!",
    date: "២ ថ្ងៃមុន",
  },
  {
    id: "w-2",
    name: "សំណាង & ស្រីម៉ី",
    relationship: "បងប្អូនខាងកូនកម្លោះ",
    message:
      "Congratulations to Det & Lina! Wishing you a lifetime of endless laughter, health and joy.",
    date: "ម្សិលមិញ",
  },
  {
    id: "w-3",
    name: "កែវ & សុភាព",
    relationship: "បងប្អូនខាងកូនកម្លោះ",
    message:
      "រីករាយថ្ងៃអាពាហ៍ពិពាហ៍! សូមឱ្យជីវិតគូរបស់ក្មួយទាំងពីរពោរពេញដោយសុភមង្គល និងភាពជោគជ័យគ្រប់ភារកិច្ច។",
    date: "ថ្ងៃនេះ",
  },
];

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({
  onShowToast,
}) => {
  const STORAGE_KEY = "wedding_guest_wishes_v2";

  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    try {
      // Clear legacy storage from previous couple
      localStorage.removeItem("wedding_guest_wishes");
      
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: GuestWish[] = JSON.parse(saved);
        if (parsed.some((w) => w.message.includes("Ratana") || w.name.includes("ស៊ុយ វណ្ណា"))) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_WISHES));
          return INITIAL_WISHES;
        }
        return parsed;
      }
      return INITIAL_WISHES;
    } catch {
      return INITIAL_WISHES;
    }
  });

  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("មិត្តភក្តិ");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      onShowToast("សូមបញ្ចូលឈ្មោះ និងពាក្យជូនពរ");
      return;
    }

    setSubmitting(true);

    try {
      // --- YOUR ACTUAL EMAILJS IDS ---
      const SERVICE_ID = 'service_xd2xzv7'; 
      const TEMPLATE_ID = 'template_a2b2x48';
      const PUBLIC_KEY = 'F5Ahra7r3y7x_T1di';
      // --------------------------------------------------

      const templateParams = {
        name: name.trim(),
        relationship: relationship,
        message: message.trim(),
        time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Phnom_Penh' }),
      };

      // Send email via EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // If successful, add to local list
      const newWish: GuestWish = {
        id: `w-${Date.now()}`,
        name: name.trim(),
        relationship,
        message: message.trim(),
        date: "ទើបតែផ្ញើ",
      };

      setWishes((prev) => [newWish, ...prev]);
      setName("");
      setMessage("");
      
      onShowToast("សូមអរគុណចំពោះពាក្យជូនពរដ៏មានអត្ថន័យ! ♥");
      
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 2000);

    } catch (error) {
      console.error('Email sending failed:', error);
      onShowToast("មានបញ្ហាក្នុងការផ្ញើ សូមព្យាយាមម្តងទៀត។");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 md:py-24 bg-[#fffaf1] border-t border-[#e8dcc4] relative overflow-hidden"
      id="wishes"
      style={{ fontFamily: "'Kantumruy Pro', 'Khmer OS Battambang', sans-serif" }}
    >
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
          
          @keyframes floatHeart {
            0% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.6; }
          }
          @keyframes burstSparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
          }
          @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-float-heart { animation: floatHeart 4s ease-in-out infinite; }
          .animate-burst { animation: burstSparkle 1.5s ease-out forwards; }
          .animate-pop-in { animation: popIn 0.4s ease-out forwards; }
          
          .btn-gold-glow {
            box-shadow: 0 0 10px rgba(172, 123, 36, 0.2);
            transition: all 0.3s ease;
          }
          .btn-gold-glow:hover {
            box-shadow: 0 0 20px rgba(172, 123, 36, 0.5);
            transform: translateY(-1px);
          }
        `}
      </style>

      {/* Background Floating Hearts & Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-[15%] left-[5%] w-8 h-8 text-[#f3dda0] opacity-40 animate-float-heart" />
        <Heart className="absolute bottom-[20%] right-[5%] w-12 h-12 text-[#f3dda0] opacity-30 animate-float-heart" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute top-[30%] right-[10%] w-6 h-6 text-[#d4af37] opacity-50 animate-float-heart" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-[40%] left-[15%] w-5 h-5 text-[#d4af37] opacity-40 animate-float-heart" style={{ animationDelay: '3s' }} />
      </div>

      <div className="wrap max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <p className="section-label uppercase tracking-widest text-[#ac7b24] font-semibold text-xs mb-2">Guestbook &amp; Blessings</p>
          <h2 className="section-h text-center text-3xl text-[#4d331d] font-bold mb-4">សៀវភៅកត់ត្រាពរជ័យ</h2>
          <p className="text-sm text-[#786d60] max-w-md mx-auto leading-relaxed">
            សូមផ្ញើសារជូនពរ និងក្តីស្រឡាញ់របស់អ្នកជូនដល់កូនកំលោះ និងកូនក្រមុំ
          </p>
        </div>

        {/* Wish Form */}
        <div className="bg-[#fffdf7] border border-[#d6bd8c] p-6 sm:p-8 shadow-md mb-12 relative rounded-sm overflow-hidden">
          
          {showBurst && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
               <div className="relative">
                  <Sparkles className="w-24 h-24 text-[#d4af37] animate-burst" />
                  <Heart className="w-16 h-16 text-[#a84a53] absolute top-4 left-4 animate-burst" style={{ animationDelay: '0.1s' }} />
                  <Sparkles className="w-12 h-12 text-[#d4af37] absolute top-0 right-0 animate-burst" style={{ animationDelay: '0.2s' }} />
               </div>
            </div>
          )}

          <div className="absolute -top-3 left-6 px-3 bg-[#76501f] text-white text-[11px] font-semibold tracking-wider uppercase rounded-xs flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#f3dda0]" /> <br />
            ផ្ញើសារជូនពរ
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#665d4c] mb-1.5">
                  ឈ្មោះរបស់អ្នក *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ឧទាហរណ៍៖ សុខ វិសាល"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d9cca8] text-sm text-[#4b3825] focus:outline-hidden focus:border-[#76501f] focus:ring-1 focus:ring-[#76501f]/20 transition-all rounded-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#665d4c] mb-1.5">
                  ទំនាក់ទំនង / ចំណងមេត្រី
                </label>
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#d9cca8] text-sm text-[#4b3825] focus:outline-hidden focus:border-[#76501f] transition-colors rounded-xs"
                >
                  <option value="មិត្តភក្តិ">មិត្តភក្តិ (Friend)</option>
                  <option value="ញាតិមិត្ត">ញាតិមិត្ត (Family/Relative)</option>
                  <option value="មិត្តរួមការងារ">
                    មិត្តរួមការងារ (Colleague)
                  </option>
                  <option value="ភ្ញៀវកិត្តិយស">
                    ភ្ញៀវកិត្តិយស (Honored Guest)
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#665d4c] mb-1.5">
                ពាក្យជូនពរអាពាហ៍ពិពាហ៍ *
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="សូមជូនពរឱ្យគូស្វាមីភរិយាថ្មី..."
                rows={3}
                className="w-full px-3.5 py-2.5 bg-white border border-[#d9cca8] text-sm text-[#4b3825] focus:outline-hidden focus:border-[#76501f] focus:ring-1 focus:ring-[#76501f]/20 transition-all rounded-xs resize-y"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-gold-glow text-xs px-6 py-2.5 flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitting ? "កំពុងផ្ញើ..." : "ផ្ញើពាក្យជូនពរ"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Wishes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="p-5 bg-white border border-[#e5d8be] shadow-xs relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-pop-in"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-base text-[#4d331d] mb-0.5">{w.name}</h4>
                  <span className="text-[11px] text-[#ac7b24] font-medium">
                    {w.relationship}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#93856d]">
                  <Heart className="w-3 h-3 text-[#a84a53] fill-[#a84a53] animate-pulse" />
                  <span>{w.date}</span>
                </div>
              </div>
              
              <p className="text-sm text-[#524d42] leading-relaxed italic bg-[#fcf9f2] p-4 rounded-xs border-l-2 border-[#caa052]">
                "{w.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};