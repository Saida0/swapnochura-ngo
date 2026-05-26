import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import Logo from './Logo';

// Custom social SVG icons (brand icons removed from lucide-react)
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
};

const footerLinks = {
  'পেজসমূহ': [
    { label: 'হোম',          path: '/'        },
    { label: 'আমাদের সম্পর্কে', path: '/about'   },
    { label: 'কার্যক্রম',    path: '/projects'},
    { label: 'সহযোগিতা',     path: '/donate'  },
  ],
  'কার্যক্রম': [
    { label: 'রক্তদান',          path: '/projects' },
    { label: 'বৃক্ষরোপণ',        path: '/projects' },
    { label: 'স্বাস্থ্যসেবা',    path: '/projects' },
    { label: 'শিক্ষা সহায়তা',   path: '/projects' },
  ],
  'যোগ দিন': [
    { label: 'স্বেচ্ছাসেবী হন',  path: '/donate' },
    { label: 'রক্ত দিন',          path: '/donate' },
    { label: 'অনুদান দিন',        path: '/donate' },
    { label: 'অংশীদার হন',        path: '/about'  },
  ],
};

const socials = [
  { icon: SocialIcons.Facebook,  href: '#', label: 'Facebook'  },
  { icon: SocialIcons.Twitter,   href: '#', label: 'Twitter'   },
  { icon: SocialIcons.Instagram, href: '#', label: 'Instagram' },
  { icon: SocialIcons.Youtube,   href: '#', label: 'YouTube'   },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A183D' }} className="text-white">
      {/* Top CTA band */}
      <div style={{ background: '#F4C430' }} className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-2xl text-primary-900">
              এগোও স্বপ্নের পথে — একসাথে!
            </h3>
            <p className="text-primary-700 mt-1">রক্ত দিন, গাছ লাগান, সহযোগিতা করুন — স্বপ্নচূড়ার সাথে থাকুন।</p>
          </div>
          <Link
            to="/donate"
            style={{
              background: '#0A183D', color: '#F4C430', borderRadius: '50px',
              padding: '14px 36px', fontWeight: 700, textDecoration: 'none',
              whiteSpace: 'nowrap', transition: 'all .3s',
            }}
          >
            সহযোগিতা করুন →
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Logo size={42} light={true} />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              অরাজনৈতিক · অলাভজনক · সামাজিক জনকল্যাণমূলক সেচ্ছাসেবী সংগঠন।
              ২০১৪ সাল থেকে রক্তদান, বৃক্ষরোপণ, স্বাস্থ্যসেবা ও শিক্ষা সহায়তায়
              মানুষের পাশে।
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2.5">
              {[
                { icon: MapPin,  text: 'রাজশাহী বিভাগ, বাংলাদেশ' },
                { icon: Mail,    text: 'info@swapnochura.org' },
                { icon: Phone,   text: '+880 1700 000000'   },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-400 text-sm">
                  <Icon size={15} className="text-gold-500 flex-shrink-0" style={{ color: '#F4C430' }} />
                  {text}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '10px', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .3s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F4C430'; e.currentTarget.style.color = '#0A183D'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'white'; }}
                  className="text-gray-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-white mb-4" style={{ color: '#F4C430' }}>
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-sm">
          <p>© ২০২৫ স্বপ্নচূড়া ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={13} className="text-red-400 fill-red-400" /> for a brighter world
          </p>
        </div>
      </div>
    </footer>
  );
}
