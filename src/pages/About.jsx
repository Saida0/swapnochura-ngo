import { useReveal } from '../hooks/useReveal';
import { Target, Eye, Award, Heart, Globe, TrendingUp, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

function Section({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : {}}>
      {children}
    </div>
  );
}

/* ── ACTIVITIES ── */
const activities = [
  { num: '০১', text: 'স্বপ্নচূড়া বৃক্ষ রোপন অভিযান',                     icon: '🌳', color: '#10B981' },
  { num: '০২', text: 'বিনামূল্যে রক্তের গ্রুপ নির্ণয়',                     icon: '🩸', color: '#EF4444' },
  { num: '০৩', text: 'বিনামূল্যে রক্তদান',                                  icon: '❤️', color: '#EF4444' },
  { num: '০৪', text: 'বিনামূল্যে স্বাস্থ্য সেবাদান',                        icon: '💊', color: '#3B82F6' },
  { num: '০৫', text: 'অসচ্ছল মেধাবী শিক্ষার্থীদের শিক্ষা উপকরণ প্রদান',    icon: '📚', color: '#1A3C6E' },
  { num: '০৬', text: 'প্রাকৃতিক দুর্যোগ পরবর্তী সহায়তা প্রদান',            icon: '🆘', color: '#F59E0B' },
  { num: '০৭', text: 'বস্ত্রদান',                                            icon: '👕', color: '#7C3AED' },
  { num: '০৮', text: 'সাধারণ মানুষদের মাঝে সচেতনতা বৃদ্ধিকরণ',             icon: '📢', color: '#059669' },
  { num: '০৯', text: 'স্বপ্নচূড়া বীজ ছড়ানো অভিযান',                       icon: '🌱', color: '#10B981' },
  { num: '১০', text: 'স্বপ্নচূড়া তাল বীজ বপন অভিযান',                      icon: '🌴', color: '#10B981' },
];

/* ── TIMELINE ── */
const milestones = [
  { year: '২০১৪', event: 'স্বপ্নচূড়া প্রতিষ্ঠিত। প্রথমে বিনামূল্যে রক্তদান ও রক্তের গ্রুপ নির্ণয়ের মধ্যে সীমাবদ্ধ ছিল।' },
  { year: '২০২০', event: 'পুরোদমে কার্যক্রম শুরু। ৩২ প্রজাতির ১০২৭টি গাছ রোপণ। আমব্রেলা সংগঠন কর্তৃক রাজশাহী বিভাগের সেরা সংগঠন পুরস্কার।' },
  { year: '২০২১', event: '১৯ প্রজাতির ৯৭টি গাছ রোপণ। স্বাস্থ্যসেবা কার্যক্রম বিস্তার।' },
  { year: '২০২২', event: '১৪১ প্রজাতির ১৪৩৯টি গাছ রোপণ (এযাবৎ সর্বোচ্চ)। আমব্রেলা ইয়ুথ ফাউন্ডেশন কর্তৃক পুনরায় রাজশাহী বিভাগের সেরা সংগঠন।' },
  { year: '২০২৩', event: '৪৬ প্রজাতির ১৪৩১টি গাছ রোপণ। ৮৪২টি বীজ ছড়ানো। ৫৯৪টি তাল বীজ বপন। দেশ সেরা ক্যাটাগরিতে ৩য় স্থান। গ্রীন ক্লাইমেট লিডারশীপ অ্যাওয়ার্ড।' },
  { year: '২০২৪', event: '৩৯ প্রজাতির ২২৫টি গাছ রোপণ। ৮৯৫টি বীজ ছড়ানো। ১২০০+ ব্যাগ রক্ত সংগ্রহ মাইলফলক।' },
  { year: '২০২৫', event: '১৯ প্রজাতির ৬৮টি গাছ রোপণ। ২১১২+ মানুষকে বিনামূল্যে চিকিৎসা সেবা। অব্যাহত কার্যক্রম চলমান।' },
];

/* ── FOUNDERS ── */
const founders = [
  { name: 'Mehejabin Sahedi Tonny', role: 'Founder — Swapnochura Foundation', img: '/images/founder-tonny.jpg', color: '#DB2777', bg: '#FDF2F8' },
  { name: 'Dr. Shuvo Kumar Majumdar', role: 'Founder — Swapnochura Foundation', img: '/images/founder-shuvo.jpg', color: '#1A3C6E', bg: '#EBF4FF' },
];

/* ── VALUES ── */
const values = [
  { icon: Heart,      label: 'মানবতা',       desc: 'প্রতিটি মানুষের কল্যাণে নিবেদিত।',   color: '#EF4444' },
  { icon: Eye,        label: 'স্বচ্ছতা',     desc: 'সম্পূর্ণ স্বচ্ছ ও জবাবদিহিমূলক।',    color: '#3B82F6' },
  { icon: TrendingUp, label: 'প্রভাব',        desc: 'পরিমাপযোগ্য পরিবর্তনে বিশ্বাসী।',   color: '#10B981' },
  { icon: Leaf,       label: 'পরিবেশ',       desc: 'সবুজ ও টেকসই ভবিষ্যতের জন্য।',       color: '#059669' },
  { icon: Globe,      label: 'অন্তর্ভুক্তি', desc: 'সকল শ্রেণী-পেশার মানুষের জন্য।',     color: '#7C3AED' },
  { icon: Award,      label: 'শ্রেষ্ঠত্ব',   desc: 'সেরা কাজের স্বীকৃতি ও সম্মান।',       color: '#F59E0B' },
];

/* ── AWARDS ── */
const awards = [
  { year: '২০২০', title: 'পরিবেশ পদক ২০২০', org: 'আমব্রেলা সংগঠন, সিলেট', detail: 'রাজশাহী বিভাগের সেরা সংগঠন' },
  { year: '২০২২', title: 'পরিবেশ পদক ২০২২', org: 'আমব্রেলা ইয়ুথ ফাউন্ডেশন, সিলেট', detail: 'রাজশাহী বিভাগের সেরা সংগঠন' },
  { year: '২০২৩', title: 'পরিবেশ পদক ২০২৩', org: 'আমব্রেলা ইয়ুথ ফাউন্ডেশন, সিলেট', detail: '৩য় স্থান — দেশ সেরা ক্যাটাগরি' },
  { year: '২০২৩', title: 'গ্রীন ক্লাইমেট লিডারশীপ অ্যাওয়ার্ড', org: 'ডিভাইন কেয়ার ফাউন্ডেশন, ঢাকা', detail: '৪র্থ স্থান অর্জন' },
];

const envAwardWinners = [
  { name: 'মো. ওমর ফারুক', location: 'গোপালনগর, মুজিবনগর, মেহেরপুর' },
  { name: 'ডা. ফয়জুল আজিম নয়ন', location: 'ভদ্রা, বোয়ালিয়া, রাজশাহী' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, #0A183D 0%, #1A3C6E 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>
            আমাদের পরিচয়
          </p>
          <h1 className="font-display font-black text-white leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            স্বপ্নচূড়া ফাউন্ডেশন
          </h1>
          <p className="mt-3 text-xl font-semibold" style={{ color: '#F4C430' }}>
            "এগোও স্বপ্নের পথে"
          </p>
          <p className="mt-5 text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            অরাজনৈতিক · অলাভজনক · সামাজিক জনকল্যাণমূলক সেচ্ছাসেবী সংগঠন<br />
            প্রতিষ্ঠিত: ২০১৪ সাল | রাজশাহী বিভাগ, বাংলাদেশ
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            { icon: Target, label: 'আমাদের লক্ষ্য', color: '#1A3C6E', bg: '#EBF4FF',
              text: 'স্বপ্নচূড়া একটি অরাজনৈতিক, অলাভজনক, সামাজিক জনকল্যাণমূলক সেচ্ছাসেবী সংগঠন। রক্তদান, বৃক্ষরোপণ, স্বাস্থ্যসেবা, শিক্ষা সহায়তা এবং সামাজিক সচেতনতার মাধ্যমে মানুষের কল্যাণে কাজ করা।' },
            { icon: Eye, label: 'আমাদের দৃষ্টিভঙ্গি', color: '#D97706', bg: '#FFFBEB',
              text: 'এমন একটি সমাজ গড়া, যেখানে প্রতিটি মানুষ স্বাস্থ্যসেবা পাবে, শিক্ষার সুযোগ পাবে এবং একটি সবুজ, পরিচ্ছন্ন পরিবেশে বাঁচতে পারবে — এটাই স্বপ্নচূড়ার স্বপ্ন।' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <Section key={item.label}>
                <div className="p-10 rounded-3xl shadow-lg h-full"
                  style={{ border: `2px solid ${item.color}20`, background: item.bg }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${item.color}20` }}>
                    <Icon size={28} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4" style={{ color: item.color, fontFamily: 'Poppins, sans-serif' }}>
                    {item.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </Section>
            );
          })}
        </div>
      </section>

      {/* ── Activities ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>কার্যক্রম</p>
            <h2 className="font-display font-black" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              স্বপ্নচূড়ার কার্যাবলী
            </h2>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {activities.map((a, i) => (
              <Section key={a.num} delay={i * 0.05}>
                <div className="card bg-white rounded-2xl p-5 text-center h-full">
                  <div className="text-3xl mb-3">{a.icon}</div>
                  <div className="text-xs font-bold mb-2" style={{ color: a.color }}>{a.num}</div>
                  <p className="text-sm font-semibold text-gray-700 leading-snug">{a.text}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── Slogans ── */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0A183D, #1A3C6E)' }}>
        <div className="max-w-4xl mx-auto">
          <Section className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>স্লোগান</p>
            <h2 className="font-display font-black text-white" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
              স্বপ্নচূড়ার স্লোগানসমূহ
            </h2>
          </Section>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { label: 'সংগঠনের স্লোগান',         slogan: '"এগোও স্বপ্নের পথে"',                              icon: '⭐', color: '#F4C430' },
              { label: 'বৃক্ষ রোপনের স্লোগান',    slogan: '"সবুজায়ন হোক প্রতিটি কোণায়"',                    icon: '🌿', color: '#34D399' },
              { label: 'তাল বীজ বপনের স্লোগান',   slogan: '"এসো ভবিষ্যৎ প্রজন্মকে বজ্রপাত থেকে বাঁচায়"',   icon: '🌴', color: '#6EE7B7' },
              { label: 'রক্ত দানের স্লোগান',       slogan: '"আপনার এক ব্যাগ রক্তই বাঁচাতে পারে একটি জীবন"', icon: '🩸', color: '#FCA5A5' },
            ].map(item => (
              <Section key={item.label}>
                <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: item.color }}>{item.label}</div>
                      <p className="text-white font-bold text-lg leading-snug">{item.slogan}</p>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>যাত্রাপথ</p>
            <h2 className="font-display font-black" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              স্বপ্নচূড়ার অর্জনের ইতিহাস
            </h2>
          </Section>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #1A3C6E, #F4C430)' }} />
            <div className="space-y-8 pl-16">
              {milestones.map((m, i) => (
                <Section key={m.year} delay={i * 0.08}>
                  <div className="relative flex items-start gap-4">
                    <div className="absolute -left-[52px] w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                      style={{ background: i % 2 === 0 ? '#1A3C6E' : '#F4C430', color: i % 2 === 0 ? 'white' : '#0A183D' }}>
                      {i + 1}
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 flex-1 shadow-sm">
                      <span className="font-bold text-sm" style={{ color: '#F4C430' }}>{m.year}</span>
                      <p className="text-gray-700 mt-1 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>পদক ও স্বীকৃতি</p>
            <h2 className="font-display font-black" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              স্বপ্নচূড়ার পদকলাভ
            </h2>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {awards.map((a, i) => (
              <Section key={i} delay={i * 0.08}>
                <div className="card bg-white rounded-3xl p-7 text-center h-full">
                  <div className="text-4xl mb-3">🏆</div>
                  <div className="font-bold text-sm mb-1" style={{ color: '#F4C430' }}>{a.year}</div>
                  <h4 className="font-display font-bold text-sm mb-2" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>{a.title}</h4>
                  <p className="text-xs text-gray-500 mb-3">{a.org}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: '#FFFBEB', color: '#D97706' }}>{a.detail}</span>
                </div>
              </Section>
            ))}
          </div>

          <Section>
            <div className="bg-white rounded-3xl p-8 shadow-md" style={{ border: '2px solid #10B98120' }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🌿</span>
                <div>
                  <h3 className="font-display font-bold text-xl" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
                    স্বপ্নচূড়া পরিবেশ পদক ২০২৩ প্রদান
                  </h3>
                  <p className="text-sm text-gray-500">বৃক্ষ রোপনে বিশেষ অবদান রাখার স্বীকৃতিস্বরূপ</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {envAwardWinners.map((w, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: '#ECFDF5' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ background: '#D1FAE5' }}>🏅</div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: '#065F46' }}>{w.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{w.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>প্রতিষ্ঠাতাগণ</p>
            <h2 className="font-display font-black" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              স্বপ্নচূড়ার প্রতিষ্ঠাতা
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              যাঁদের স্বপ্ন ও পরিশ্রমে ২০১৪ সালে স্বপ্নচূড়ার যাত্রা শুরু হয়েছিল।
            </p>
          </Section>

          <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {founders.map((f, i) => (
              <Section key={f.name} delay={i * 0.12}>
                <div className="card rounded-3xl overflow-hidden text-center"
                  style={{ border: `2px solid ${f.color}25` }}>
                  <div className="relative" style={{ height: '320px', background: f.bg }}>
                    <img src={f.img} alt={f.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
                      background: 'linear-gradient(to top, rgba(10,24,61,0.7), transparent)' }} />
                    <div style={{ position: 'absolute', top: '14px', left: '14px',
                      background: f.color, color: 'white', borderRadius: '50px', padding: '5px 14px',
                      fontSize: '12px', fontWeight: 700 }}>
                      Founder
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-display font-black text-xl" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
                      {f.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold" style={{ color: f.color }}>{f.role}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>মূল্যবোধ</p>
            <h2 className="font-display font-black" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              আমাদের মূল মূল্যবোধ
            </h2>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Section key={v.label} delay={i * 0.08}>
                  <div className="card bg-gray-50 rounded-2xl p-7">
                    <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center" style={{ background: `${v.color}15` }}>
                      <Icon size={26} style={{ color: v.color }} />
                    </div>
                    <h4 className="font-display font-bold text-lg mb-2" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>{v.label}</h4>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </div>
                </Section>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ background: '#F4C430' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Section>
            <h2 className="font-display font-black text-3xl" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
              আমাদের সাথে যোগ দিন
            </h2>
            <p className="mt-4" style={{ color: '#1A3C6E' }}>
              স্বেচ্ছাসেবী হোন, রক্ত দিন, গাছ লাগান — স্বপ্নচূড়ার প্রতিটি কাজে আপনার অবদান রাখুন।
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/donate"
                style={{ background: '#0A183D', color: '#F4C430', borderRadius: '50px', padding: '14px 36px', fontWeight: 700, textDecoration: 'none' }}>
                সহযোগিতা করুন
              </Link>
              <Link to="/projects"
                style={{ border: '2px solid #0A183D', color: '#0A183D', borderRadius: '50px', padding: '14px 36px', fontWeight: 600, textDecoration: 'none' }}>
                কার্যক্রম দেখুন
              </Link>
            </div>
          </Section>
        </div>
      </section>

    </div>
  );
}
