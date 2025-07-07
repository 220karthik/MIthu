
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          {/* Animated Birthday Text */}
          <h1 className="mb-8 text-6xl md:text-8xl font-bold text-white drop-shadow-2xl animate-fade-in">
            <span className="inline-block animate-[bounce_2s_infinite] text-yellow-300">H</span>
            <span className="inline-block animate-[bounce_2s_infinite_0.1s] text-pink-300">A</span>
            <span className="inline-block animate-[bounce_2s_infinite_0.2s] text-blue-300">P</span>
            <span className="inline-block animate-[bounce_2s_infinite_0.3s] text-green-300">P</span>
            <span className="inline-block animate-[bounce_2s_infinite_0.4s] text-purple-300">Y</span>
            <span className="mx-4 inline-block animate-[bounce_2s_infinite_0.5s] text-orange-300">🎉</span>
          </h1>
          
          <h2 className="mb-4 text-4xl md:text-6xl font-bold text-white drop-shadow-xl animate-[fade-in_1s_ease-out_1s_both]">
            BIRTHDAY
          </h2>
          
          <h3 className="mb-8 text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-[fade-in_1s_ease-out_2s_both]">
            MITHRAN
          </h3>

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

      {/* Floating Birthday Elements */}
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
