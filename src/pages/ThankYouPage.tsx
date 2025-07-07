
import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const ThankYouPage = () => {
  const [showText, setShowText] = useState(false);
  const [showElements, setShowElements] = useState({
    tamil: false,
    english: false,
    message: false,
    signature: false,
    hearts: false
  });

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowText(true), 500),
      setTimeout(() => setShowElements(prev => ({ ...prev, tamil: true })), 1000),
      setTimeout(() => setShowElements(prev => ({ ...prev, english: true })), 2500),
      setTimeout(() => setShowElements(prev => ({ ...prev, message: true })), 4000),
      setTimeout(() => setShowElements(prev => ({ ...prev, signature: true })), 5500),
      setTimeout(() => setShowElements(prev => ({ ...prev, hearts: true })), 6500)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-100 to-slate-100 relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.02)_0%,transparent_70%)] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,0,0,0.01)_0%,transparent_70%)] animate-[pulse_12s_ease-in-out_infinite_4s]" />
        
        {/* Animated Sparkles */}
        <div className="absolute top-20 left-20 opacity-30 animate-[twinkle_3s_ease-in-out_infinite]">
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="absolute top-40 right-32 opacity-20 animate-[twinkle_4s_ease-in-out_infinite_1s]">
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </div>
        <div className="absolute bottom-32 left-16 opacity-25 animate-[twinkle_5s_ease-in-out_infinite_2s]">
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-8 max-w-4xl">
        {showText && (
          <div>
            {/* Tamil Thank You Text with Enhanced Animation */}
            <div className="mb-12">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light text-gray-800 mb-8 tracking-wide transition-all duration-2000 ${
                showElements.tamil 
                  ? 'opacity-100 transform translate-y-0 scale-100 rotate-0' 
                  : 'opacity-0 transform translate-y-12 scale-110 rotate-1'
              }`}>
                உங்கள் வாழ்த்துகளுக்கு
              </h1>
              <h2 className={`text-6xl md:text-8xl lg:text-9xl font-thin text-gray-700 mb-12 transition-all duration-2000 delay-500 ${
                showElements.tamil 
                  ? 'opacity-100 transform translate-y-0 scale-100' 
                  : 'opacity-0 transform translate-y-8 scale-95'
              }`}>
                நன்றி
              </h2>
              <div className={`w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8 transition-all duration-1000 delay-1000 ${
                showElements.tamil 
                  ? 'opacity-100 scale-x-100' 
                  : 'opacity-0 scale-x-0'
              }`} />
            </div>

            {/* English Translation */}
            <div className={`mb-16 transition-all duration-1500 delay-300 ${
              showElements.english 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-6'
            }`}>
              <p className="text-2xl md:text-3xl text-gray-600 font-light italic tracking-wide animate-[shimmer_3s_ease-in-out_infinite]">
                Thank you for your wishes
              </p>
            </div>

            {/* Final Message */}
            <div className={`transition-all duration-1500 delay-500 ${
              showElements.message 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-6'
            }`}>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                Your heartfelt messages have made Mithran's birthday celebration truly meaningful and memorable. 
                Each wish brings warmth and joy to this special day.
              </p>
            </div>

            {/* Elegant Signature */}
            <div className={`mt-16 transition-all duration-1500 delay-700 ${
              showElements.signature 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-4" />
              <p className="text-gray-400 font-light text-sm tracking-widest animate-pulse">
                WITH GRATITUDE
              </p>
            </div>

            {/* Floating Hearts */}
            {showElements.hearts && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 opacity-30 animate-[floatHeart_8s_ease-in-out_infinite]">
                  <Heart className="w-4 h-4 text-pink-400" />
                </div>
                <div className="absolute top-1/3 right-1/3 opacity-20 animate-[floatHeart_10s_ease-in-out_infinite_2s]">
                  <Heart className="w-3 h-3 text-red-300" />
                </div>
                <div className="absolute bottom-1/3 left-1/5 opacity-25 animate-[floatHeart_12s_ease-in-out_infinite_4s]">
                  <Heart className="w-5 h-5 text-pink-300" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 opacity-35 animate-[floatHeart_9s_ease-in-out_infinite_1s]">
                  <Heart className="w-4 h-4 text-red-400" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-300 rounded-full animate-[float_12s_ease-in-out_infinite] opacity-40" />
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-gray-400 rounded-full animate-[float_8s_ease-in-out_infinite_2s] opacity-30" />
          <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-gray-200 rounded-full animate-[float_10s_ease-in-out_infinite_4s] opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-gray-300 rounded-full animate-[float_14s_ease-in-out_infinite_1s] opacity-35" />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
