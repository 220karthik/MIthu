import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Music } from "lucide-react";

/* ---------- local background & music ---------- */
import bg from "../images/pexels-raulling-29194128.jpg";
import bgMusic from "../music/upbeat-summer-background-music-368178.mp3";

/* ---------- gallery images ---------- */
import img1 from "../images/IMG-20240817-WA0006.jpg";
import img2 from "../images/IMG-20240817-WA0005.jpg";
import img3 from "../images/IMG20231023115018.jpg";
import img4 from "../images/IMG20231119140757_BURST014.jpg";
import img5 from "../images/IMG20240115091240_01.jpg";
import img6 from "../images/IMG20240116194324.jpg";
import img7 from "../images/IMG20240115092250.jpg";
import img8 from "../images/IMG20241002101530.jpg";
import img9 from "../images/IMG20231225204331.jpg";
import img10 from "../images/IMG20231119140706.jpg";
import img11 from "../images/1000086432.jpg";
import img12 from "../images/1000084969.jpg";
import img13 from "../images/IMG-20250523-WA0012.jpg";
import img14 from "../images/IMG-20250622-WA0010.jpg";
import img15 from "../images/IMG-20250622-WA0019.jpg";
import img16 from "../images/IMG20240825152432.jpg";
import img17 from "../images/IMG20240308065153.jpg";
import img18 from "../images/IMG20240318182316.jpg";
import img19 from "../images/IMG20231018070243.jpg";
import img20 from "../images/IMG20250606121620.jpg";
import img21 from "../images/IMG20240420094915.jpg";
import img22 from "../images/IMG20240825151918.jpg";
import img23 from "../images/IMG20241002104719.jpg";
import img24 from "../images/IMG20241205071701.jpg";
import img25 from "../images/IMG20250316132445_01.jpg";
import img26 from "../images/IMG20250114104327.jpg";
import img27 from "../images/IMG20250520185832.jpg";
import img28 from "../images/IMG20241015092225.jpg";
import img29 from "../images/IMG20250606132130.jpg";
import img30 from "../images/IMG-20250523-WA0002.jpg";
import img31 from "../images/IMG-20250622-WA0020.jpg";
import img32 from "../images/IMG20250611184227.jpg";

const localImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,img31,img32,
];

const GalleryPage = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPlaying, setPlaying] = useState(true);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((count) =>
        count < localImages.length ? count + 1 : count
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPlaying(false), 120000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.5;
    isPlaying
      ? audioRef.current.play().catch(() => {})
      : audioRef.current.pause();
  }, [isPlaying]);

  const toWish = () => navigate("/wishes");

  return (
    <div
      className="min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Music */}
      <audio ref={audioRef}>
        <source src={bgMusic} type="audio/mp3" />
      </audio>

      {/* Header */}
      <header className="pt-8 pb-4 text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
          Memory Gallery
        </h1>
        <p className="text-white/80 text-lg mt-2">
          Beautiful moments 2023‑2025 ❤
        </p>
      </header>

      {/* Music Toggle */}
      <button
        onClick={() => setPlaying((p) => !p)}
        className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition"
      >
        <Music className={`w-6 h-6 ${isPlaying ? "animate-pulse" : ""}`} />
      </button>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {localImages.slice(0, visibleCount).map((src, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg border-[5px] border-[#FFD700] animate-fade-in transition-all duration-1000"
            style={{
              animationDelay: `${idx * 0.2}s`,
              animationFillMode: "both",
            }}
          >
            <img
              src={src}
              alt={`Memory ${idx + 1}`}
              className="w-full h-[12.5cm] object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-3 left-3 text-white bg-black/40 px-2 py-1 rounded">
              Memory {idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Next Page Button */}
      {visibleCount === localImages.length && (
        <div className="text-center pb-12">
          <button
            onClick={toWish}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-105 transition"
          >
            Share Your Wishes 💝
          </button>
        </div>
      )}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 text-2xl animate-[float_6s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
