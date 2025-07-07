
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      caption: 'Cherished Moments'
    },
    {
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
      caption: 'Timeless Memories'
    },
    {
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop',
      caption: 'Beautiful Journey'
    },
    {
      url: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2070&auto=format&fit=crop',
      caption: 'Peaceful Evening'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    navigate('/wishes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-neutral-100">
      {/* Clean Header */}
      <div className="pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 animate-fade-in">
          Gallery
        </h1>
        <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto" />
        <p className="text-gray-600 text-lg mt-6 font-light animate-[fade-in_1s_ease-out_0.5s_both]">
          A collection of beautiful moments
        </p>
      </div>

      {/* Media Controls */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/80 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      {/* Modern Gallery Container */}
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="relative h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Image Display */}
          <div className="relative h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImageIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-light mb-2">{image.caption}</h3>
                  <p className="text-white/80 font-light">Every moment tells a story</p>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Elegant Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Clean Next Button */}
      <div className="text-center mt-16 pb-16">
        <button
          onClick={handleNext}
          className="px-12 py-4 text-lg font-light text-gray-700 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-[fade-in_1s_ease-out_2s_both]"
        >
          Share Your Wishes
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;
