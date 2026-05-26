// Swapnochura Official Logo — uses real logo image
const Logo = ({ size = 48, showText = true, light = false }) => {
  const goldColor = '#F4C430';
  const blueColor = '#1A3C6E';

  return (
    <div className="flex items-center gap-3">
      {/* Real logo image */}
      <img
        src="/images/logo.jpg"
        alt="স্বপ্নচূড়া লোগো"
        style={{
          width:        size,
          height:       size,
          objectFit:    'cover',
          borderRadius: '50%',
          flexShrink:   0,
          border:       `2px solid ${light ? 'rgba(255,255,255,0.3)' : goldColor}`,
          background:   'white',
        }}
      />

      {/* Name text */}
      {showText && (
        <div className="leading-tight">
          <div
            style={{
              fontFamily:  'Poppins, sans-serif',
              fontWeight:  800,
              fontSize:    '18px',
              color:       light ? '#FFFFFF' : blueColor,
              lineHeight:  1.1,
            }}
          >
            স্বপ্নচূড়া
          </div>
          <div
            style={{
              fontFamily:    'Inter, sans-serif',
              fontWeight:    600,
              fontSize:      '10px',
              color:         goldColor,
              letterSpacing: '0.05em',
              marginTop:     '1px',
            }}
          >
            এগোও স্বপ্নের পথে · ২০১৪
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
