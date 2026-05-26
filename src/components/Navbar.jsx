import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home',     path: '/'        },
  { label: 'About',    path: '/about'   },
  { label: 'Projects', path: '/projects'},
  { label: 'Donate',   path: '/donate'  },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : isHome
            ? 'bg-transparent py-5'
            : 'bg-primary-700/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo size={38} light={!scrolled} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium text-sm tracking-wide transition-colors duration-200 relative group ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              } ${location.pathname === link.path ? (scrolled ? 'text-primary-600' : 'text-white') : ''}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/donate"
            className="ml-2 btn-primary text-sm py-2.5 px-6 font-bold"
            style={{ background: '#F4C430', color: '#0A183D', borderRadius: '50px', padding: '10px 24px', textDecoration: 'none', fontWeight: 700, fontSize: '14px', transition: 'all .3s' }}
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-primary-600 hover:bg-primary-50' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-primary-700/98 backdrop-blur-md px-6 py-4 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                location.pathname === link.path
                  ? 'bg-white/10 text-white'
                  : 'text-white/80 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="mt-2 text-center py-3 px-6 rounded-full font-bold text-sm"
            style={{ background: '#F4C430', color: '#0A183D', textDecoration: 'none' }}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
