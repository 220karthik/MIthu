import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../images/home.jpg';

const HomePage = () => {
  const [showContinue, setShowContinue] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    navigate('/gallery');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🔧 --- Local keyframes for the “open‑close” effect --- */}
      <style>{`
        @keyframes openClose {
          0%   { letter-spacing: -0.3em; opacity: 0; }
          50%  { letter-spacing: 0.1em;  opacity: 1; }
          100% { letter-spacing: -0.3em; opacity: 0; }
        }
      `}</style>

      {/* 🌄 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* 🎉 Foreground Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center select-none">
          {/* "Happy Birthday" → single line */}
          <h1 className="mb-4 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl animate-[fade-in_1s_ease-out_0.5s_both]">
            Happy Birthday
          </h1>

          {/* "MITHRAN" with open‑close animation */}
          <h2
            className="mb-12 text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg"
            style={{
              animation: 'openClose 4s ease-in-out infinite',
              background: 'linear-gradient(90deg,#ff6b6b,#fbc531,#9c88ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            MITHRAN
          </h2>

          {/* Continue Button */}
          {showContinue && (
            <button
              onClick={handleContinue}
              className="animate-[fade-in_1s_ease-out] bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              Click to Continue ✨
            </button>
          )}
        </div>
      </div>

      {/* ✨ Floating Birthday Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-[bounce_3s_infinite] opacity-80">🎂</div>
        <div className="absolute top-32 right-16 text-3xl animate-[bounce_3s_infinite_1s] opacity-80">🎈</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-[bounce_3s_infinite_2s] opacity-80">🎁</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-[bounce_3s_infinite_0.5s] opacity-80">🌟</div>
      </div>
    </div>
  );
};

export default HomePage;
