import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Droplets, Trees, BookOpen, Shirt, AlertTriangle, Megaphone, Leaf, ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
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

/* Animated progress bar — triggers once when in view */
function ProgressBar({ pct, color }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: active ? `${pct}%` : '0%', background: `linear-gradient(90deg, ${color}, ${color}99)` }} />
    </div>
  );
}

const categories = ['সকল', 'পরিবেশ', 'স্বাস্থ্য', 'শিক্ষা', 'সামাজিক কল্যাণ'];

const projects = [
  {
    id: 1, title: 'বৃক্ষ রোপন অভিযান', category: 'পরিবেশ', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০২০', beneficiaries: '৪২৮৭+ গাছ', raised: 90,
    desc: 'গত ৬ বছরে ৪২৮৭টি গাছের চারা রোপণ করা হয়েছে। ২০২২ সালে সর্বোচ্চ ১৪৩৯টি গাছ রোপণ। এই অভিযান এখনও চলমান।',
    icon: Trees, color: '#10B981', bg: '#ECFDF5', emoji: '🌳',
    stats: ['২০২০: ১০২৭টি (৩২ প্রজাতি)', '২০২১: ৯৭টি (১৯ প্রজাতি)', '২০২২: ১৪৩৯টি (১৪১ প্রজাতি)', '২০২৩: ১৪৩১টি (৪৬ প্রজাতি)', '২০২৪: ২২৫টি (৩৯ প্রজাতি)', '২০২৫: ৬৮টি (১৯ প্রজাতি)'],
  },
  {
    id: 2, title: 'বীজ ছড়ানো অভিযান', category: 'পরিবেশ', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০২৩', beneficiaries: '১৭৩৭+ বীজ', raised: 85,
    desc: 'বনায়ন বাড়াতে বীজ ছড়ানো অভিযান। ২০২৩ সালে ৮ প্রজাতির ৮৪২টি এবং ২০২৪ সালে ২ প্রজাতির ৮৯৫টি বীজ ছড়ানো হয়েছে।',
    icon: Leaf, color: '#059669', bg: '#ECFDF5', emoji: '🌱',
    stats: ['২০২৩: ৮ প্রজাতির ৮৪২টি বীজ', '২০২৪: ২ প্রজাতির ৮৯৫টি বীজ', 'মোট: ১৭৩৭+ বীজ ছড়ানো'],
  },
  {
    id: 3, title: 'তাল বীজ বপন অভিযান', category: 'পরিবেশ', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০২৩', beneficiaries: '৫৯৪ তাল বীজ', raised: 75,
    desc: '"এসো ভবিষ্যৎ প্রজন্মকে বজ্রপাত থেকে বাঁচায়" — এই স্লোগান নিয়ে ২০২৩ সালে ৫৯৪টি তাল বীজ বপন করা হয়েছে।',
    icon: Trees, color: '#065F46', bg: '#D1FAE5', emoji: '🌴',
    stats: ['২০২৩: ৫৯৪টি তাল বীজ বপন', 'স্লোগান: বজ্রপাত থেকে বাঁচাও'],
  },
  {
    id: 4, title: 'বিনামূল্যে রক্তদান', category: 'স্বাস্থ্য', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০১৪', beneficiaries: '১২০০+ ব্যাগ', raised: 88,
    desc: '"আপনার এক ব্যাগ রক্তই বাঁচাতে পারে একটি জীবন।" প্রতিষ্ঠার পর থেকে এখন পর্যন্ত ১২০০+ ব্যাগ রক্ত সংগ্রহ করে দেওয়া হয়েছে।',
    icon: Droplets, color: '#EF4444', bg: '#FEF2F2', emoji: '🩸',
    stats: ['১২০০+ ব্যাগ রক্ত সংগ্রহ', '২০১৪ সাল থেকে চলমান'],
  },
  {
    id: 5, title: 'বিনামূল্যে রক্তের গ্রুপ নির্ণয়', category: 'স্বাস্থ্য', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০১৪', beneficiaries: '১৬০০+ জন', raised: 80,
    desc: '৬টি প্রতিষ্ঠানে বিনামূল্যে রক্তের গ্রুপ নির্ণয় ক্যাম্প পরিচালনা করে ১৬০০ জন ছাত্র-ছাত্রীকে সেবা দেওয়া হয়েছে।',
    icon: Droplets, color: '#DC2626', bg: '#FFF1F2', emoji: '💉',
    stats: ['৬টি প্রতিষ্ঠানে ক্যাম্প', '১৬০০+ শিক্ষার্থীকে সেবা'],
  },
  {
    id: 6, title: 'বিনামূল্যে স্বাস্থ্য সেবাদান', category: 'স্বাস্থ্য', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০১৪', beneficiaries: '২১১২+ জন', raised: 92,
    desc: 'প্রতিষ্ঠার পর থেকে এখন পর্যন্ত ২১১২+ জন মানুষকে বিনামূল্যে চিকিৎসা সেবা প্রদান করা হয়েছে।',
    icon: Droplets, color: '#3B82F6', bg: '#EFF6FF', emoji: '💊',
    stats: ['২১১২+ জনকে বিনামূল্যে চিকিৎসা', 'নিয়মিত স্বাস্থ্য ক্যাম্প'],
  },
  {
    id: 7, title: 'শিক্ষা উপকরণ প্রদান', category: 'শিক্ষা', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০২০', beneficiaries: 'অসচ্ছল শিক্ষার্থী', raised: 78,
    desc: 'অসচ্ছল মেধাবী শিক্ষার্থীদের মাঝে বিনামূল্যে শিক্ষা উপকরণ যেমন বই, খাতা, কলম বিতরণ করা হয়।',
    icon: BookOpen, color: '#1A3C6E', bg: '#EBF4FF', emoji: '📚',
    stats: ['মেধাবী অসচ্ছল শিক্ষার্থীদের সহায়তা', 'বই, খাতা, কলম বিতরণ'],
  },
  {
    id: 8, title: 'বস্ত্রদান কার্যক্রম', category: 'সামাজিক কল্যাণ', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০২০', beneficiaries: '২০০+ জন', raised: 70,
    desc: 'করোনা মহামারী চলাকালীন এবং ঈদ ও পুজোতে প্রায় ২০০ জন মানুষকে ২৫,০০০ টাকার বেশি খাদ্য সামগ্রী ও বস্ত্রদান করা হয়েছে।',
    icon: Shirt, color: '#7C3AED', bg: '#F5F3FF', emoji: '👕',
    stats: ['২০০+ জনকে বস্ত্রদান', '২৫,০০০+ টাকার খাদ্য ও বস্ত্র'],
  },
  {
    id: 9, title: 'দুর্যোগ পরবর্তী সহায়তা', category: 'সামাজিক কল্যাণ', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০২০', beneficiaries: 'দুর্যোগ আক্রান্ত', raised: 72,
    desc: 'প্রাকৃতিক দুর্যোগ পরবর্তী সময়ে ক্ষতিগ্রস্ত মানুষদের খাদ্য, বস্ত্র ও আর্থিক সহায়তা প্রদান করা হয়।',
    icon: AlertTriangle, color: '#F59E0B', bg: '#FFFBEB', emoji: '🆘',
    stats: ['বন্যা, ঝড় পরবর্তী সহায়তা', 'খাদ্য ও আর্থিক সহায়তা'],
  },
  {
    id: 10, title: 'সচেতনতা বৃদ্ধি কার্যক্রম', category: 'সামাজিক কল্যাণ', status: 'সক্রিয়',
    location: 'রাজশাহী বিভাগ', started: '২০২০', beneficiaries: 'সাধারণ জনগণ', raised: 85,
    desc: 'স্বাস্থ্য, পরিবেশ এবং সামাজিক বিষয়ে সাধারণ মানুষের মাঝে সচেতনতা বৃদ্ধির জন্য ক্যাম্পেইন, লিফলেট ও মাঠ পর্যায়ের কার্যক্রম পরিচালনা।',
    icon: Megaphone, color: '#059669', bg: '#ECFDF5', emoji: '📢',
    stats: ['স্বাস্থ্য ও পরিবেশ সচেতনতা', 'মাঠ পর্যায়ে প্রচারাভিযান'],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('সকল');
  const filtered = filter === 'সকল' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, #0A183D 0%, #1A3C6E 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F4C430' }}>
            কার্যক্রম
          </p>
          <h1 className="font-display font-black text-white"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            স্বপ্নচূড়ার কার্যক্রমসমূহ
          </h1>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            ১০টি সক্রিয় কার্যক্রম · রক্তদান থেকে বৃক্ষরোপণ · হাজারো মানুষের জীবনে পরিবর্তন
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { v: '১২০০+', l: 'ব্যাগ রক্ত' },
              { v: '৪২৮৭+', l: 'গাছ রোপণ' },
              { v: '২১১২+', l: 'স্বাস্থ্যসেবা' },
              { v: '১৭৩৭+', l: 'বীজ ছড়ানো' },
            ].map(s => (
              <div key={s.l} className="text-center px-4">
                <div className="font-bold text-xl" style={{ color: '#F4C430' }}>{s.v}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                style={{ padding: '10px 22px', borderRadius: '50px', fontWeight: 600, fontSize: '14px',
                  transition: 'all .25s', cursor: 'pointer', border: 'none',
                  background: filter === cat ? '#1A3C6E' : '#F1F5F9',
                  color: filter === cat ? 'white' : '#475569',
                  boxShadow: filter === cat ? '0 4px 15px rgba(26,60,110,0.3)' : 'none' }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj, i) => (
              <Section key={proj.id} delay={i * 0.06}>
                <div className="card bg-white rounded-3xl overflow-hidden h-full flex flex-col"
                  style={{ border: `1px solid ${proj.color}20` }}>

                  {/* Header */}
                  <div className="p-6 flex items-center justify-between" style={{ background: proj.bg }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-white">
                      <span style={{ fontSize: '26px' }}>{proj.emoji}</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: '#10B98120', color: '#059669' }}>
                      ✅ {proj.status}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: proj.color }}>
                      {proj.category}
                    </span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-3"
                      style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>{proj.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{proj.desc}</p>

                    <div className="mt-4 space-y-1">
                      {proj.stats.map(s => (
                        <div key={s} className="flex items-center gap-2 text-xs text-gray-500">
                          <span style={{ color: proj.color }}>▸</span> {s}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin size={12} style={{ color: proj.color }} /> {proj.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={12} style={{ color: proj.color }} /> {proj.started} থেকে চলমান
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Users size={12} style={{ color: proj.color }} /> {proj.beneficiaries}
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">কার্যক্রম অগ্রগতি</span>
                        <span className="font-bold" style={{ color: proj.color }}>{proj.raised}%</span>
                      </div>
                      <ProgressBar pct={proj.raised} color={proj.color} />
                    </div>

                    <Link to="/donate" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: proj.color, textDecoration: 'none' }}>
                      সহযোগিতা করুন <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0A183D, #1A3C6E)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Section>
            <h2 className="font-display font-black text-white text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              এই কার্যক্রমে অংশ নিন
            </h2>
            <p className="mt-4 text-white/70">
              রক্ত দিন, গাছ লাগান, বা আর্থিক সহায়তা করুন — প্রতিটি অবদান জীবন বদলায়।
            </p>
            <Link to="/donate"
              style={{ display: 'inline-block', background: '#F4C430', color: '#0A183D', borderRadius: '50px', padding: '16px 40px', fontWeight: 700, textDecoration: 'none', marginTop: '32px' }}>
              সহযোগিতা করুন 💛
            </Link>
          </Section>
        </div>
      </section>

    </div>
  );
}
