
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showContinue, setShowContinue] = useState(false);
  const [textAnimations, setTextAnimations] = useState({
    happy: false,
    birthday: false,
    mithran: false,
    underline: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Stagger text animations
    const timers = [
      setTimeout(() => setTextAnimations(prev => ({ ...prev, happy: true })), 500),
      setTimeout(() => setTextAnimations(prev => ({ ...prev, birthday: true })), 1500),
      setTimeout(() => setTextAnimations(prev => ({ ...prev, mithran: true })), 2500),
      setTimeout(() => setTextAnimations(prev => ({ ...prev, underline: true })), 3500),
      setTimeout(() => setShowContinue(true), 6000)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleContinue = () => {
    navigate('/gallery');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-stone-50 via-neutral-100 to-slate-100">
      {/* Enhanced Background Pattern with Movement */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.02)_0%,transparent_50%)] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.01)_75%)] bg-[length:60px_60px] animate-[slide_20s_linear_infinite]" />
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative z-10 flex h-full items-center justify-center px-8">
        <div className="text-center max-w-4xl">
          {/* Enhanced Birthday Text with Staggered Animations */}
          <div className="mb-12">
            <h1 className={`text-7xl md:text-9xl font-light text-gray-800 mb-4 transition-all duration-1000 ${
              textAnimations.happy 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-10 scale-95'
            }`}>
              HAPPY
            </h1>
            <h2 className={`text-5xl md:text-7xl font-thin text-gray-600 mb-6 transition-all duration-1000 delay-300 ${
              textAnimations.birthday 
                ? 'opacity-100 transform translate-y-0 rotate-0' 
                : 'opacity-0 transform translate-y-10 rotate-1'
            }`}>
              BIRTHDAY
            </h2>
            <div className="relative">
              <h3 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent transition-all duration-1000 delay-500 ${
                textAnimations.mithran 
                  ? 'opacity-100 transform translate-y-0 scale-100' 
                  : 'opacity-0 transform translate-y-10 scale-110'
              }`}>
                MITHRAN
              </h3>
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent transition-all duration-1000 delay-1000 ${
                textAnimations.underline 
                  ? 'opacity-100 scale-x-100' 
                  : 'opacity-0 scale-x-0'
              }`} />
            </div>
          </div>

          {/* Enhanced Continue Button */}
          {showContinue && (
            <div className="animate-[bounce_1s_ease-out] hover:animate-none">
              <button
                onClick={handleContinue}
                className="group relative px-8 py-4 text-lg font-medium text-gray-700 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-[glow_2s_ease-in-out_infinite_alternate]"
              >
                <span className="relative z-10">Continue</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gray-300 rounded-full animate-[float_8s_ease-in-out_infinite] opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full animate-[float_6s_ease-in-out_infinite_2s] opacity-40" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-gray-200 rounded-full animate-[float_10s_ease-in-out_infinite_4s] opacity-50" />
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-gray-350 rounded-full animate-[float_7s_ease-in-out_infinite_1s] opacity-30" />
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-gray-300 rounded-full animate-[bounce_3s_ease-in-out_infinite] opacity-40" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-gray-200 rounded-full animate-[pulse_4s_ease-in-out_infinite] opacity-50" />
      </div>
    </div>
  );
};

export default HomePage;
