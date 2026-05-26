import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Heart, Shield, CreditCard, Check, Users, Globe, BookOpen, Zap } from 'lucide-react';

function Section({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : {}}>
      {children}
    </div>
  );
}

/* Bar that animates width once in view */
function Bar({ pct, color }) {
  const ref = useRef(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
      <div className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: go ? `${pct}%` : '0%', background: color }} />
    </div>
  );
}

const AMOUNTS = [100, 500, 1000, 2500, 5000, 10000];

const IMPACT_MAP = {
  100:   { text: 'একজন অসচ্ছল শিক্ষার্থীর জন্য খাতা-কলম কিনে দেওয়া যাবে',        emoji: '✏️' },
  500:   { text: 'একটি পরিবারের জন্য জরুরি ওষুধ ও স্বাস্থ্যসেবা নিশ্চিত করা যাবে', emoji: '💊' },
  1000:  { text: 'একজন শিক্ষার্থীর সম্পূর্ণ শিক্ষা উপকরণ কেনা যাবে',              emoji: '📚' },
  2500:  { text: '৫ জনের রক্তের গ্রুপ নির্ণয় ক্যাম্প পরিচালনা করা যাবে',          emoji: '🩸' },
  5000:  { text: '১০টি গাছের চারা রোপণ ও পরিচর্যার ব্যবস্থা করা যাবে',            emoji: '🌳' },
  10000: { text: 'একটি পূর্ণাঙ্গ বিনামূল্যে স্বাস্থ্য সেবা ক্যাম্প পরিচালনা করা যাবে', emoji: '🏥' },
};

const PROGRAMS = [
  { id: 'blood',     label: 'রক্তদান কার্যক্রম',    icon: Heart,    color: '#EF4444' },
  { id: 'tree',      label: 'বৃক্ষরোপণ অভিযান',    icon: Globe,    color: '#10B981' },
  { id: 'education', label: 'শিক্ষা উপকরণ',         icon: BookOpen, color: '#1A3C6E' },
  { id: 'general',   label: 'যেখানে দরকার সেখানে', icon: Zap,      color: '#F59E0B' },
];

const FAQ = [
  { q: 'স্বপ্নচূড়া কি নিবন্ধিত সংগঠন?', a: 'হ্যাঁ! স্বপ্নচূড়া একটি নিবন্ধিত অরাজনৈতিক, অলাভজনক সামাজিক সেচ্ছাসেবী সংগঠন। ২০১৪ সাল থেকে রাজশাহী বিভাগে কার্যক্রম পরিচালনা করে আসছে।' },
  { q: 'অর্থ কীভাবে ব্যবহার করা হয়?', a: 'সকল অনুদান সরাসরি কার্যক্রমে ব্যবহৃত হয় — রক্তদান, বৃক্ষরোপণ, স্বাস্থ্যসেবা ও শিক্ষা উপকরণ বিতরণে। সংগঠনটি সম্পূর্ণ স্বচ্ছ ও জবাবদিহিমূলক।' },
  { q: 'কীভাবে স্বেচ্ছাসেবী হওয়া যাবে?', a: 'আপনি সরাসরি আমাদের সাথে যোগাযোগ করতে পারেন। রক্তদাতা হিসেবে নাম নিবন্ধন, গাছ লাগানোর কার্যক্রমে অংশগ্রহণ বা স্বাস্থ্য ক্যাম্পে সহযোগিতা করতে পারেন।' },
  { q: 'নিয়মিত মাসিক অনুদান দেওয়া যাবে কি?', a: 'হ্যাঁ! মাসিক অনুদানকারীরা আমাদের সবচেয়ে গুরুত্বপূর্ণ সহযোগী। উপরের "মাসিক" ট্যাবে ক্লিক করে নিয়মিত অনুদান দিতে পারেন।' },
];

export default function Donate() {
  const [frequency, setFrequency] = useState('one-time');
  const [amount,    setAmount]    = useState(2500);
  const [custom,    setCustom]    = useState('');
  const [program,   setProgram]   = useState('general');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq,   setOpenFaq]   = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const finalAmount = custom ? parseInt(custom, 10) : amount;
  const impact = IMPACT_MAP[finalAmount] || { text: 'আমাদের কার্যক্রমে সহযোগিতা করুন — রক্তদান, বৃক্ষরোপণ বা স্বাস্থ্যসেবায়', emoji: '🌟' };

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, #0A183D 0%, #1A3C6E 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-4">💛</div>
          <h1 className="font-display font-black text-white"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            একসাথে এগোই স্বপ্নের পথে
          </h1>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            আপনার অবদানে রক্তদান, বৃক্ষরোপণ, স্বাস্থ্যসেবা ও শিক্ষা সহায়তার
            কার্যক্রম আরও বেগবান হবে। স্বপ্নচূড়ার সাথে থাকুন।
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            { icon: Shield,     text: '256-bit SSL Encryption',    color: '#10B981' },
            { icon: Check,      text: '100% Transparent',          color: '#3B82F6' },
            { icon: Users,      text: '8,000+ Donors Trust Us',    color: '#7C3AED' },
            { icon: Globe,      text: 'International Transfers OK', color: '#D97706' },
          ].map(({ icon: Icon, text, color }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-gray-600">
              <Icon size={18} style={{ color }} />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Donation Form ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">

          {/* Form (3/5) */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
                <div className="text-7xl mb-6">🎉</div>
                <h2 className="font-display font-black text-3xl" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
                  Thank You, {form.name || 'Friend'}!
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  Your donation of <strong style={{ color: '#1A3C6E' }}>৳{finalAmount.toLocaleString()}</strong> has been received.
                  A confirmation has been sent to <strong>{form.email || 'your email'}</strong>.
                </p>
                <p className="text-gray-500 mt-3">You have just helped change a life. Every taka counts. 💛</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '' }); }}
                  style={{ marginTop: '24px', background: '#F4C430', color: '#0A183D', borderRadius: '50px', padding: '12px 32px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                  Donate Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  {/* Frequency tabs */}
                  <div className="flex border-b border-gray-100">
                    {['one-time', 'monthly'].map(f => (
                      <button key={f} type="button" onClick={() => setFrequency(f)}
                        style={{ flex: 1, padding: '16px', fontWeight: 600, fontSize: '15px',
                          border: 'none', cursor: 'pointer', transition: 'all .2s',
                          background: frequency === f ? '#1A3C6E' : 'white',
                          color:      frequency === f ? 'white'   : '#64748b' }}>
                        {f === 'one-time' ? 'One-Time' : '🔄 Monthly'}
                      </button>
                    ))}
                  </div>

                  <div className="p-8">
                    {/* Amount grid */}
                    <h3 className="font-display font-bold text-base mb-4" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
                      Select Amount (BDT ৳)
                    </h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {AMOUNTS.map(a => (
                        <button key={a} type="button" onClick={() => { setAmount(a); setCustom(''); }}
                          style={{ padding: '14px 8px', borderRadius: '14px', fontWeight: 700, fontSize: '15px',
                            cursor: 'pointer', transition: 'all .2s',
                            border: amount === a && !custom ? '2px solid #1A3C6E' : '2px solid #e2e8f0',
                            background: amount === a && !custom ? '#1A3C6E' : '#F8FAFC',
                            color:      amount === a && !custom ? 'white'   : '#334155' }}>
                          ৳{a.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    {/* Custom amount */}
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">৳</span>
                      <input type="number" value={custom}
                        onChange={e => { setCustom(e.target.value); setAmount(0); }}
                        placeholder="Enter custom amount"
                        style={{ width: '100%', padding: '14px 14px 14px 32px', borderRadius: '14px',
                          border: custom ? '2px solid #1A3C6E' : '2px solid #e2e8f0',
                          fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                    </div>

                    {/* Impact message */}
                    {finalAmount > 0 && (
                      <div className="mt-4 p-4 rounded-2xl flex items-center gap-3"
                        style={{ background: '#F0FFF4', border: '1px solid #10B98130' }}>
                        <span className="text-2xl">{impact.emoji}</span>
                        <p className="text-sm text-green-800 font-medium">{impact.text}</p>
                      </div>
                    )}

                    {/* Program selection */}
                    <div className="mt-6">
                      <h3 className="font-display font-bold text-base mb-3" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
                        Direct to Program
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {PROGRAMS.map(prog => {
                          const Icon = prog.icon;
                          return (
                            <button key={prog.id} type="button" onClick={() => setProgram(prog.id)}
                              style={{ padding: '12px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '8px',
                                cursor: 'pointer', transition: 'all .2s', textAlign: 'left',
                                border: program === prog.id ? `2px solid ${prog.color}` : '2px solid #e2e8f0',
                                background: program === prog.id ? `${prog.color}10` : '#F8FAFC' }}>
                              <Icon size={16} style={{ color: prog.color, flexShrink: 0 }} />
                              <span style={{ fontSize: '13px', fontWeight: 600, color: program === prog.id ? prog.color : '#64748B' }}>
                                {prog.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Personal details */}
                    <div className="mt-6 space-y-4">
                      <h3 className="font-display font-bold text-base" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
                        Your Details
                      </h3>
                      {[
                        { key: 'name',  placeholder: 'Full Name *',      type: 'text',  required: true  },
                        { key: 'email', placeholder: 'Email Address *',  type: 'email', required: true  },
                        { key: 'phone', placeholder: 'Phone (optional)', type: 'tel',   required: false },
                      ].map(field => (
                        <input key={field.key} type={field.type} required={field.required}
                          value={form[field.key]}
                          onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                          placeholder={field.placeholder}
                          style={{ width: '100%', padding: '14px 16px', borderRadius: '14px',
                            border: '2px solid #e2e8f0', fontSize: '15px', outline: 'none',
                            boxSizing: 'border-box', transition: 'border .2s' }}
                          onFocus={e => { e.target.style.borderColor = '#1A3C6E'; }}
                          onBlur={e => { e.target.style.borderColor = '#e2e8f0'; }} />
                      ))}
                    </div>

                    {/* Submit */}
                    <button type="submit"
                      disabled={!finalAmount || finalAmount < 100}
                      style={{ width: '100%', marginTop: '24px', padding: '18px',
                        borderRadius: '16px', border: 'none', cursor: finalAmount >= 100 ? 'pointer' : 'not-allowed',
                        background: finalAmount >= 100 ? 'linear-gradient(135deg, #F4C430, #D4A017)' : '#e2e8f0',
                        color: finalAmount >= 100 ? '#0A183D' : '#94a3b8',
                        fontWeight: 700, fontSize: '17px', transition: 'all .3s',
                        transform: 'scale(1)' }}
                      onMouseEnter={e => { if (finalAmount >= 100) e.currentTarget.style.transform = 'scale(1.02)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
                      {finalAmount >= 100
                        ? `Donate ৳${finalAmount.toLocaleString()} ${frequency === 'monthly' ? '/month' : 'Now'} 💛`
                        : 'Select an amount (min ৳100)'}
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                      🔒 Secure payment — Your info is never shared or sold.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar (2/5) */}
          <div className="lg:col-span-2 space-y-6">

            <Section delay={0.1}>
              <div className="bg-white rounded-3xl p-7 shadow-md">
                <h3 className="font-display font-bold text-lg mb-5" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
                  Your Impact
                </h3>
                {[
                  { emoji: '🎒', text: '৳500 = school supplies for 1 child / year' },
                  { emoji: '📚', text: '৳1,000 = books + uniform for 1 student'    },
                  { emoji: '💉', text: '৳2,500 = blood group testing camp for 5'   },
                  { emoji: '🌳', text: '৳5,000 = 10 trees planted & cared for'     },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-3 mb-3 last:mb-0">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-sm text-gray-600 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section delay={0.2}>
              <div className="rounded-3xl p-7 text-white"
                style={{ background: 'linear-gradient(135deg, #1A3C6E, #0A183D)' }}>
                <h3 className="font-display font-bold text-lg mb-5" style={{ color: '#F4C430', fontFamily: 'Poppins, sans-serif' }}>
                  Fund Utilization
                </h3>
                {[
                  { label: 'Direct Programs', pct: 92, color: '#F4C430' },
                  { label: 'Administration',  pct: 5,  color: '#60A5FA' },
                  { label: 'Fundraising',     pct: 3,  color: '#34D399' },
                ].map(item => (
                  <div key={item.label} className="mb-4">
                    <div className="flex justify-between text-xs mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <span>{item.label}</span>
                      <span className="font-bold" style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <Bar pct={item.pct} color={item.color} />
                  </div>
                ))}
              </div>
            </Section>

            <Section delay={0.3}>
              <div className="bg-white rounded-3xl p-6 shadow-md flex flex-wrap gap-4 justify-center">
                {['🏛️ NGO Bureau', '✅ ISO 9001', '🌐 FICA Reg.', '📋 Annual Audit'].map(b => (
                  <div key={b} className="text-xs font-semibold text-gray-600 text-center">{b}</div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Section className="text-center mb-12">
            <h2 className="font-display font-black text-3xl" style={{ color: '#0A183D', fontFamily: 'Poppins, sans-serif' }}>
              Frequently Asked Questions
            </h2>
          </Section>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Section key={i} delay={i * 0.07}>
                <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid #e2e8f0' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left"
                    style={{ background: openFaq === i ? '#EBF4FF' : 'white', transition: 'background .2s', border: 'none', cursor: 'pointer' }}>
                    <span className="font-semibold" style={{ color: '#0A183D' }}>{item.q}</span>
                    <span style={{ color: '#1A3C6E', fontSize: '20px', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div style={{ overflow: 'hidden', maxHeight: openFaq === i ? '200px' : '0',
                    opacity: openFaq === i ? 1 : 0, transition: 'max-height .3s ease, opacity .3s ease' }}>
                    <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
