import { useState, useEffect, useRef } from 'react';

/* ── Smart reply engine ── */
const BOT_NAME  = 'Swapna';
const BOT_EMOJI = '🤖';

const REPLIES = [
  {
    keys: ['blood', 'রক্ত', 'donate blood', 'রক্তদান'],
    answer: '🩸 Swapnochura has collected **1,200+ bags of blood** since 2014 — completely free. We also run free blood group testing camps (1,600+ students served in 6 institutions). To donate or request blood, contact us directly.',
  },
  {
    keys: ['tree', 'plant', 'গাছ', 'বৃক্ষ', 'forest', 'green', 'seed', 'বীজ'],
    answer: '🌳 Our tree plantation drive has planted **4,287+ trees** (141 species!) across Rajshahi Division. We also run seed-spreading (1,737+ seeds) and palm-seed campaigns to protect against lightning strikes.',
  },
  {
    keys: ['health', 'doctor', 'treatment', 'চিকিৎসা', 'স্বাস্থ্য', 'medicine', 'ওষুধ', 'camp'],
    answer: '💊 We have provided **free healthcare to 2,112+ people** through regular health camps. Our volunteer doctors serve underprivileged communities across Rajshahi Division — completely free of charge.',
  },
  {
    keys: ['education', 'school', 'book', 'শিক্ষা', 'বই', 'student', 'শিক্ষার্থী'],
    answer: '📚 We distribute free educational materials (books, notebooks, pens) to **meritorious but underprivileged students**. Every child deserves a chance to learn!',
  },
  {
    keys: ['award', 'পদক', 'পুরস্কার', 'recognition', 'achievement'],
    answer: '🏆 Swapnochura has won **4 national awards**:\n• 2020 & 2022 — Best Org, Rajshahi Division (Umbrella Foundation)\n• 2023 — National 3rd place (Environment Award)\n• 2023 — Green Climate Leadership Award (4th place)',
  },
  {
    keys: ['founder', 'প্রতিষ্ঠাতা', 'who started', 'tonny', 'shuvo'],
    answer: '👤 Swapnochura was founded in 2014 by:\n• **Mehejabin Sahedi Tonny** — Co-Founder\n• **Dr. Shuvo Kumar Majumdar** — Co-Founder\n\nTheir vision: a society where everyone has access to health, education, and a green environment.',
  },
  {
    keys: ['donate', 'অনুদান', 'help', 'সহযোগিতা', 'money', 'fund', 'contribute'],
    answer: '💛 You can support Swapnochura by donating on our **Donate page**! Your contribution goes directly to blood donation, tree plantation, healthcare & education programs. Even ৳100 makes a difference!',
  },
  {
    keys: ['volunteer', 'join', 'যোগ', 'স্বেচ্ছাসেবী', 'member'],
    answer: '🙌 Want to volunteer? You can:\n• Register as a **blood donor**\n• Join our **tree plantation drives**\n• Help at **health camps**\n• Support **education programs**\n\nContact us at info@swapnochura.org to get involved!',
  },
  {
    keys: ['contact', 'address', 'location', 'ঠিকানা', 'যোগাযোগ', 'phone', 'email'],
    answer: '📍 Find us at:\n• **Location:** Rajshahi Division, Bangladesh\n• **Email:** info@swapnochura.org\n• **Phone:** +880 1700 000000\n\nWe\'re always happy to hear from you!',
  },
  {
    keys: ['slogan', 'স্লোগান', 'motto', 'quote'],
    answer: '⭐ Our slogans:\n• **Main:** "এগোও স্বপ্নের পথে" (Walk towards your dream)\n• **Trees:** "সবুজায়ন হোক প্রতিটি কোণায়"\n• **Blood:** "আপনার এক ব্যাগ রক্তই বাঁচাতে পারে একটি জীবন"',
  },
  {
    keys: ['what', 'who', 'swapnochura', 'স্বপ্নচূড়া', 'about', 'organization', 'ngo'],
    answer: '🌟 **Swapnochura (স্বপ্নচূড়া)** is a non-political, non-profit voluntary organisation founded in **2014** in Rajshahi Division, Bangladesh.\n\nWe run 10 active programs:\n🩸 Blood donation · 🌳 Tree plantation · 💊 Free healthcare · 📚 Education support · 👕 Clothing donation · 🆘 Disaster relief · and more!',
  },
  {
    keys: ['hello', 'hi', 'hey', 'হ্যালো', 'নমস্কার', 'সালাম', 'assalamu', 'good'],
    answer: '👋 Hello! I\'m **Swapna**, your guide to Swapnochura Foundation.\n\nI can help you with:\n• 🩸 Blood donation\n• 🌳 Tree plantation\n• 💊 Health services\n• 📚 Education programs\n• 💛 How to donate\n• 🏆 Our awards\n\nWhat would you like to know?',
  },
  {
    keys: ['thank', 'ধন্যবাদ', 'thanks', 'appreciated'],
    answer: '😊 You\'re welcome! Together we walk towards the dream — **"এগোও স্বপ্নের পথে"** 💛\n\nIs there anything else I can help you with?',
  },
];

const FALLBACK = '🤔 I\'m not sure about that, but I\'d love to help! Try asking about:\n\n• **Blood donation** 🩸\n• **Tree plantation** 🌳\n• **Health services** 💊\n• **How to donate** 💛\n• **Our founders** 👤\n• **Awards** 🏆\n\nOr email us at info@swapnochura.org';

function getReply(text) {
  const lower = text.toLowerCase();
  for (const r of REPLIES) {
    if (r.keys.some(k => lower.includes(k.toLowerCase()))) return r.answer;
  }
  return FALLBACK;
}

/* ── Markdown-lite renderer ── */
function MsgText({ text }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((p, i) =>
        i % 2 === 1
          ? <strong key={i}>{p}</strong>
          : p.split('\n').map((line, j) => (
              <span key={j}>{line}{j < p.split('\n').length - 1 && <br />}</span>
            ))
      )}
    </span>
  );
}

const SUGGESTED = ['What is Swapnochura?', 'How to donate?', 'Blood donation', 'Tree plantation', 'Awards 🏆'];

export default function ChatBot() {
  const [open,    setOpen]    = useState(false);
  const [msgs,    setMsgs]    = useState([
    { from: 'bot', text: `👋 Hi! I'm **Swapna**, your Swapnochura assistant. How can I help you today?` }
  ]);
  const [input,   setInput]   = useState('');
  const [typing,  setTyping]  = useState(false);
  const [pulse,   setPulse]   = useState(true);
  const bottomRef = useRef(null);

  /* auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, typing]);

  /* stop pulsing after first open */
  useEffect(() => { if (open) setPulse(false); }, [open]);

  const send = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    setInput('');
    setMsgs(m => [...m, { from: 'user', text: trimmed }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { from: 'bot', text: getReply(trimmed) }]);
    }, 900 + Math.random() * 400);
  };

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Chat with Swapna"
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
          width: 58, height: 58, borderRadius: '50%', border: 'none',
          background: open ? '#0A183D' : '#F4C430',
          color: open ? '#F4C430' : '#0A183D',
          fontSize: 26, cursor: 'pointer',
          boxShadow: '0 6px 28px rgba(0,0,0,0.22)',
          transition: 'all .3s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {open ? '✕' : '💬'}
        {/* pulse ring */}
        {pulse && !open && (
          <span style={{
            position: 'absolute', inset: -4,
            borderRadius: '50%', border: '3px solid #F4C430',
            animation: 'pulse-ring 1.8s ease-out infinite',
            pointerEvents: 'none',
          }} />
        )}
      </button>

      {/* ── Chat window ── */}
      <div style={{
        position: 'fixed', bottom: 100, right: 28, zIndex: 9998,
        width: 'min(360px, calc(100vw - 40px))',
        background: '#fff',
        borderRadius: 20,
        boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
        maxHeight: open ? '520px' : '0px',
        opacity: open ? 1 : 0,
        transition: 'max-height .4s cubic-bezier(.4,0,.2,1), opacity .3s',
        pointerEvents: open ? 'auto' : 'none',
      }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg,#0A183D,#1A3C6E)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#F4C430', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
            🤖
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: 'Poppins,sans-serif' }}>{BOT_NAME}</div>
            <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
              Swapnochura Assistant
            </div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 8px', display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 320 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
              {m.from === 'bot' && (
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F4C430', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0, marginRight: 7, marginTop: 2 }}>
                  🤖
                </div>
              )}
              <div style={{
                maxWidth: '78%',
                padding: '10px 13px',
                borderRadius: m.from === 'user' ? '18px 18px 4px 18px' : '4px 18px 18px 18px',
                background: m.from === 'user' ? '#1A3C6E' : '#F4F7FF',
                color: m.from === 'user' ? '#fff' : '#1f2937',
                fontSize: 13.5,
                lineHeight: 1.6,
              }}>
                <MsgText text={m.text} />
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F4C430', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🤖</div>
              <div style={{ background: '#F4F7FF', borderRadius: '4px 18px 18px 18px', padding: '10px 14px', display: 'flex', gap: 5 }}>
                {[0, 1, 2].map(d => (
                  <span key={d} style={{ width: 7, height: 7, borderRadius: '50%', background: '#94A3B8', display: 'inline-block', animation: `typing-dot .9s ${d * 0.2}s ease-in-out infinite` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggested chips */}
        {msgs.length <= 2 && (
          <div style={{ padding: '4px 14px 8px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {SUGGESTED.map(s => (
              <button key={s} onClick={() => send(s)}
                style={{ padding: '5px 12px', borderRadius: 50, fontSize: 12, fontWeight: 600, cursor: 'pointer', border: '1.5px solid #1A3C6E', background: '#EBF4FF', color: '#1A3C6E', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1A3C6E'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#EBF4FF'; e.currentTarget.style.color = '#1A3C6E'; }}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{ padding: '10px 12px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Ask me anything…"
            style={{ flex: 1, padding: '10px 14px', borderRadius: 50, border: '1.5px solid #e2e8f0', fontSize: 13.5, outline: 'none', fontFamily: 'Inter,sans-serif' }}
            onFocus={e => { e.target.style.borderColor = '#1A3C6E'; }}
            onBlur={e => { e.target.style.borderColor = '#e2e8f0'; }}
          />
          <button onClick={() => send()}
            style={{ width: 38, height: 38, borderRadius: '50%', background: '#F4C430', border: 'none', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0A183D'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#F4C430'; }}>
            ➤
          </button>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: .8; }
          100% { transform: scale(1.7); opacity: 0;  }
        }
        @keyframes typing-dot {
          0%,80%,100% { transform: translateY(0);   opacity: .4; }
          40%          { transform: translateY(-6px); opacity: 1;  }
        }
      `}</style>
    </>
  );
}
