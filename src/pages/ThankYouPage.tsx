
import { useEffect, useState } from 'react';

const ThankYouPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-100 to-slate-100 relative overflow-hidden flex items-center justify-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,0,0,0.01)_0%,transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-8 max-w-4xl">
        {/* Tamil Thank You Text */}
        {showText && (
          <div className="animate-[fade-in_2s_ease-out]">
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-800 mb-8 tracking-wide">
                உங்கள் வாழ்த்துகளுக்கு
              </h1>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-thin text-gray-700 mb-12">
                நன்றி
              </h2>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8" />
            </div>

            {/* English Translation */}
            <div className="mb-16 animate-[fade-in_1s_ease-out_1s_both]">
              <p className="text-2xl md:text-3xl text-gray-600 font-light italic tracking-wide">
                Thank you for your wishes
              </p>
            </div>

            {/* Final Message */}
            <div className="animate-[fade-in_1s_ease-out_2s_both]">
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                Your heartfelt messages have made Mithran's birthday celebration truly meaningful and memorable. 
                Each wish brings warmth and joy to this special day.
              </p>
            </div>

            {/* Elegant Signature */}
            <div className="mt-16 animate-[fade-in_1s_ease-out_3s_both]">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-4" />
              <p className="text-gray-400 font-light text-sm tracking-widest">
                WITH GRATITUDE
              </p>
            </div>
          </div>
        )}

        {/* Minimal Floating Elements */}
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
