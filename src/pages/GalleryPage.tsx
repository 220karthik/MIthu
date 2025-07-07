
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      caption: 'Cherished Moments',
      description: 'Every smile tells a story'
    },
    {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
      caption: 'Timeless Memories',
      description: 'Capturing life\'s beautiful moments'
    },
    {
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop',
      caption: 'Beautiful Journey',
      description: 'Adventures that last forever'
    },
    {
      url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2070&auto=format&fit=crop',
      caption: 'Peaceful Evening',
      description: 'Serenity in every sunset'
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      caption: 'Mountain Views',
      description: 'Nature\'s grandest spectacle'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setImagesLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  const handleNext = () => {
    navigate('/wishes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-100 to-slate-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.02)_0%,transparent_50%)] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.01)_0%,transparent_50%)] animate-[pulse_8s_ease-in-out_infinite_2s]" />
      </div>

      {/* Enhanced Header */}
      <div className="pt-16 pb-8 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 animate-[slideDown_1s_ease-out]">
          Gallery
        </h1>
        <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto animate-[expand_1s_ease-out_0.5s_both]" />
        <p className="text-gray-600 text-lg mt-6 font-light animate-[fadeInUp_1s_ease-out_0.8s_both]">
          A collection of beautiful moments
        </p>
      </div>

      {/* Automatic Photo Display */}
      <div className="relative max-w-6xl mx-auto px-8 mb-16">
        <div className="relative h-[75vh] rounded-3xl overflow-hidden shadow-2xl">
          {/* Image Stack with Smooth Transitions */}
          <div className="relative h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
                  index === currentImageIndex
                    ? 'opacity-100 scale-100 rotate-0'
                    : index === (currentImageIndex - 1 + images.length) % images.length
                    ? 'opacity-0 scale-105 -rotate-1'
                    : 'opacity-0 scale-95 rotate-1'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Enhanced Content */}
                <div className={`absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-1000 ${
                  index === currentImageIndex 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <h3 className="text-4xl md:text-5xl font-light mb-3 animate-[slideInLeft_1s_ease-out]">
                    {image.caption}
                  </h3>
                  <p className="text-xl text-white/90 font-light animate-[slideInLeft_1s_ease-out_0.3s_both]">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="absolute top-8 right-8 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentImageIndex 
                    ? 'w-12 bg-white' 
                    : 'w-3 bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-8 left-8 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Enhanced Next Button */}
      <div className="text-center pb-16 relative z-10">
        <button
          onClick={handleNext}
          className="group px-12 py-4 text-lg font-light text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 animate-[bounceIn_1s_ease-out_2s_both]"
        >
          <span className="relative z-10">Share Your Wishes</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-300/40 rounded-full animate-[float_15s_ease-in-out_infinite] opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400/30 rounded-full animate-[float_12s_ease-in-out_infinite_3s] opacity-50" />
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-gray-200/50 rounded-full animate-[float_18s_ease-in-out_infinite_6s] opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-gray-300/40 rounded-full animate-[float_20s_ease-in-out_infinite_2s] opacity-45" />
      </div>
    </div>
  );
};

export default GalleryPage;
