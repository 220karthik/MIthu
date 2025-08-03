
import { useEffect, useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import thank from '../images/thankyou.jpg'; 

const ThankYouPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
     <div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${thank})` }} />
        <div className="absolute inset-0 bg-black opacity-50" />  
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-[twinkle_3s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Star className="w-4 h-4 text-yellow-300 fill-current" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        {/* Heart Animation */}
        <div className="mb-8 animate-[fade-in_1s_ease-out]">
          <Heart className="w-20 h-20 text-pink-400 mx-auto animate-[heartbeat_2s_ease-in-out_infinite] fill-current" />
        </div>

        {/* Tamil Thank You Text */}
        {showText && (
          <div className="animate-[fade-in_2s_ease-out]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="inline-block animate-[bounce_2s_infinite] text-yellow-300">உ</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.1s] text-pink-300">ங்</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.2s] text-blue-300">க</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.3s] text-green-300">ள்</span>
              <span className="mx-2"></span>
              <span className="inline-block animate-[bounce_2s_infinite_0.4s] text-purple-300">வ</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.5s] text-orange-300">ா</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.6s] text-cyan-300">ழ்</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.7s] text-red-300">த்</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.8s] text-indigo-300">து</span>
              <span className="inline-block animate-[bounce_2s_infinite_0.9s] text-emerald-300">க</span>
              <span className="inline-block animate-[bounce_2s_infinite_1s] text-rose-300">ள்</span>
              <span className="inline-block animate-[bounce_2s_infinite_1.1s] text-violet-300">க்</span>
              <span className="inline-block animate-[bounce_2s_infinite_1.2s] text-amber-300">கு</span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 animate-[fade-in_1s_ease-out_1s_both] drop-shadow-xl">
              <span className="inline-block animate-[bounce_2s_infinite_1.3s] text-teal-300">ந</span>
              <span className="inline-block animate-[bounce_2s_infinite_1.4s] text-lime-300">ன்</span>
              <span className="inline-block animate-[bounce_2s_infinite_1.5s] text-sky-300">றி</span>
            </h2>

            {/* English Translation */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 animate-[fade-in_1s_ease-out_2s_both] italic">
              Thank you for your wishes
            </p>

            {/* Sparkles Animation */}
            <div className="flex justify-center space-x-4 animate-[fade-in_1s_ease-out_2.5s_both]">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
              <Sparkles className="w-6 h-6 text-pink-400 animate-ping" />
              <Sparkles className="w-8 h-8 text-purple-400 animate-spin" style={{ animationDirection: 'reverse' }} />
            </div>

            {/* Final Message */}
            <div className="mt-12 animate-[fade-in_1s_ease-out_3s_both]">
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Your heartfelt wishes have made Mithran's birthday celebration truly special and memorable. 
                Each of your messages brought joy and warmth to this wonderful day!
              </p>
            </div>
          </div>
        )}

        {/* Floating Celebration Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 text-4xl animate-[float_4s_ease-in-out_infinite] opacity-60">🎂</div>
          <div className="absolute top-32 right-16 text-3xl animate-[float_4s_ease-in-out_infinite_1s] opacity-60">🎈</div>
          <div className="absolute bottom-40 left-16 text-3xl animate-[float_4s_ease-in-out_infinite_2s] opacity-60">🎁</div>
          <div className="absolute bottom-32 right-20 text-4xl animate-[float_4s_ease-in-out_infinite_0.5s] opacity-60">🌟</div>
          <div className="absolute top-1/2 left-10 text-2xl animate-[float_4s_ease-in-out_infinite_1.5s] opacity-60">💝</div>
          <div className="absolute top-1/3 right-10 text-2xl animate-[float_4s_ease-in-out_infinite_2.5s] opacity-60">🎊</div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
