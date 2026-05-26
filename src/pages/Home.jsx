import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Trees, Heart, Users, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

/* ── Reveal wrapper for individual cards ── */
function R({ children, delay = 0, style = {}, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}>
      {children}
    </div>
  );
}

/* ── Counter ── */
function Counter({ end, suffix = '' }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = end / 60;
        const t = setInterval(() => { cur += step; if (cur >= end) { setN(end); clearInterval(t); } else setN(Math.floor(cur)); }, 25);
      }
    }, { threshold: 0.5 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* ── Data ── */
const stats = [
  { icon: Droplets, end: 1200, suffix: '+', label: 'ব্যাগ রক্ত সংগ্রহ',       color: '#EF4444' },
  { icon: Trees,    end: 4287, suffix: '+', label: 'গাছের চারা রোপণ',          color: '#10B981' },
  { icon: Heart,    end: 2112, suffix: '+', label: 'বিনামূল্যে চিকিৎসা',       color: '#3B82F6' },
  { icon: Users,    end: 1600, suffix: '+', label: 'রক্তের গ্রুপ নির্ণয়',       color: '#F4C430' },
];

const programs = [
  { emoji: '🩸', title: 'Blood Donation',       desc: '1,200+ bags collected. Free blood group testing camps in 6 institutions for 1,600+ students.',         color: '#EF4444' },
  { emoji: '🌳', title: 'Tree Plantation',       desc: '4,287+ trees planted over 6 years. Seed-spreading and palm-seed campaigns also running.',              color: '#10B981' },
  { emoji: '💊', title: 'Free Health Service',   desc: '2,112+ people treated for free. Regular health camps across Rajshahi Division.',                       color: '#3B82F6' },
  { emoji: '📚', title: 'Education Support',     desc: 'Free educational materials for meritorious but underprivileged students.',                              color: '#1A3C6E' },
];

const awards = [
  { year: '2020', title: 'Environment Award',           detail: 'Best org — Rajshahi Division' },
  { year: '2022', title: 'Environment Award',           detail: 'Best org — Rajshahi Division' },
  { year: '2023', title: 'Environment Award',           detail: 'National — 3rd place' },
  { year: '2023', title: 'Green Climate Leadership',    detail: 'National — 4th place' },
];

const testimonials = [
  { quote: 'Swapnochura saved my family. They arranged blood at the right time — like angels to us.',        name: 'Rashedul Islam',  role: 'Blood recipient family, Rajshahi' },
  { quote: 'The trees planted near my home give shade today. This work is a gift for future generations.',   name: 'Md. Omar Faruk',  role: 'Environment Award Winner 2023' },
  { quote: 'Free health camp helped me when I couldn\'t afford treatment. Truly grateful.',                  name: 'Salma Begum',     role: 'Health service recipient' },
];

export default function Home() {
  const [activeT, setActiveT] = useState(0);
  const s1 = useReveal(), s2 = useReveal(), s3 = useReveal(), s4 = useReveal(), s5 = useReveal();

  useEffect(() => {
    const t = setInterval(() => setActiveT(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg,#0A183D 0%,#1A3C6E 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        {/* decorative blob */}
        <div className="blob" style={{ position: 'absolute', top: '10%', right: '5%', width: 320, height: 320, background: 'rgba(244,196,48,.08)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
          <div style={{ maxWidth: 620 }}>
            {/* badge */}
            <span style={{ display: 'inline-block', background: 'rgba(244,196,48,.15)', color: '#F4C430', border: '1px solid rgba(244,196,48,.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
              🌿 অরাজনৈতিক · অলাভজনক · সামাজিক সেচ্ছাসেবী সংগঠন · প্রতিষ্ঠিত ২০১৪
            </span>

            <h1 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff', lineHeight: 1.15, margin: '0 0 8px' }}>
              <span className="shimmer-text">স্বপ্নচূড়া</span>
            </h1>
            <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#F4C430', margin: '0 0 20px' }}>
              "এগোও স্বপ্নের পথে"
            </p>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 500 }}>
              Swapnochura Foundation is a non-political, non-profit social welfare voluntary organisation.
              Since 2014 we have served communities through blood donation, tree plantation, free healthcare and education support.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/donate" className="btn-gold" style={{ fontSize: 16 }}>Donate Now 💛</Link>
              <Link to="/projects" className="btn-outline" style={{ fontSize: 16 }}>Our Work</Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 28 }}>
              {['🏆 4 National Awards', '🌿 Best Org — Rajshahi Division', '❤️ 100% Volunteer'].map(b => (
                <span key={b} style={{ color: 'rgba(255,255,255,.65)', fontSize: 13 }}>{b}</span>
              ))}
            </div>
          </div>

          {/* floating stats card */}
          <div className="float" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 24, padding: '32px 24px', maxWidth: 340 }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <img src="/images/logo.jpg" alt="Logo" style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', border: '3px solid #F4C430' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { v: '1,200+', l: 'Blood Bags',   c: '#EF4444' },
                { v: '4,287+', l: 'Trees',        c: '#10B981' },
                { v: '2,112+', l: 'Treated',      c: '#3B82F6' },
                { v: '2014',   l: 'Est.',          c: '#F4C430' },
              ].map(s => (
                <div key={s.l} style={{ background: 'rgba(255,255,255,.07)', borderRadius: 14, padding: '14px 10px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: '1.25rem', color: s.c }}>{s.v}</div>
                  <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wave */}
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 60, display: 'block' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div ref={s1} className="reveal" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
          {stats.map(({ icon: Icon, end, suffix, label, color }) => (
            <div key={label} className="card" style={{ padding: '28px 20px', textAlign: 'center', border: `2px solid ${color}18` }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <Icon size={24} style={{ color }} />
              </div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: '2.2rem', color }}><Counter end={end} suffix={suffix} /></div>
              <div style={{ color: '#6B7280', fontSize: 13, marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION BAND ── */}
      <section style={{ background: '#0A183D', padding: '56px 24px', textAlign: 'center' }}>
        <div ref={s2} className="reveal" style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ color: '#F4C430', fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Our Mission</p>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.6rem)', color: '#fff', margin: '0 0 16px' }}>
            "এগোও স্বপ্নের পথে"
          </h2>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            We believe every person has a dream. Swapnochura stands beside them through blood donation,
            tree plantation, healthcare and social awareness.
          </p>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section style={{ padding: '72px 24px', background: '#F9FAFB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div ref={s3} className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#F4C430', fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>What We Do</p>
            <h2 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#0A183D', margin: 0 }}>Our Programs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 22 }}>
            {programs.map((p, i) => (
              <R key={p.title} delay={i * 0.1}>
                <div className="card" style={{ padding: '28px 22px', height: '100%' }}>
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{p.emoji}</div>
                  <h3 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0A183D', margin: '0 0 10px' }}>{p.title}</h3>
                  <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                  <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 16, color: p.color, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div ref={s4} className="reveal" style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ color: '#F4C430', fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Recognition</p>
            <h2 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#0A183D', margin: 0 }}>Awards & Medals</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
            {awards.map((a, i) => (
              <R key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: '24px 20px', textAlign: 'center', borderTop: '4px solid #F4C430', height: '100%' }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>🏆</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#F4C430', marginBottom: 6 }}>{a.year}</div>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0A183D', marginBottom: 8 }}>{a.title}</div>
                  <span style={{ display: 'inline-block', background: '#FFFBEB', color: '#D97706', borderRadius: 50, padding: '4px 12px', fontSize: 12, fontWeight: 600 }}>{a.detail}</span>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '72px 24px', background: '#0A183D' }}>
        <div ref={s5} className="reveal" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#F4C430', fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Stories</p>
          <h2 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#fff', margin: '0 0 40px' }}>Voices of Change</h2>

          <div style={{ position: 'relative', minHeight: 220 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ position: 'absolute', inset: 0, opacity: activeT === i ? 1 : 0, transition: 'opacity .5s', pointerEvents: activeT === i ? 'auto' : 'none', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '32px 28px' }}>
                <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.7, margin: '0 0 24px' }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: '#F4C430', marginTop: 4 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 240 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveT(i)} style={{ width: activeT === i ? 26 : 9, height: 9, borderRadius: 9, background: activeT === i ? '#F4C430' : 'rgba(255,255,255,.25)', border: 'none', cursor: 'pointer', transition: 'all .3s', padding: 0 }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#F4C430', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#0A183D', margin: '0 0 14px' }}>
          আসুন, একসাথে এগিয়ে যাই
        </h2>
        <p style={{ color: '#0A183D', opacity: .75, fontSize: '1.05rem', margin: '0 0 32px' }}>
          Donate blood, plant trees, volunteer — or make a financial contribution.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link to="/donate" style={{ background: '#0A183D', color: '#F4C430', borderRadius: 50, padding: '15px 38px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            Donate Now 💛
          </Link>
          <Link to="/about" style={{ border: '2px solid #0A183D', color: '#0A183D', borderRadius: 50, padding: '15px 38px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
            About Us
          </Link>
        </div>
      </section>

    </div>
  );
}
