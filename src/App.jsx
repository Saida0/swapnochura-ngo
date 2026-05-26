import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import ChatBot  from './components/ChatBot';
import Home     from './pages/Home';
import About    from './pages/About';
import Projects from './pages/Projects';
import Donate   from './pages/Donate';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate"   element={<Donate />}   />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
              <div style={{ fontSize: '80px' }}>🔍</div>
              <h1 style={{ color: '#1A3C6E', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Page Not Found</h1>
              <a href="/" style={{ background: '#F4C430', color: '#0A183D', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none' }}>
                Go Home
              </a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
