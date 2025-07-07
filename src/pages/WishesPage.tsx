import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Correctly import the video from your local images folder
import birthdayVideo from "../images/VID-20250622-WA0036.mp4";

const Wishes = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/thankyou");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* ── Background Video ── */}
      <video
        src={birthdayVideo}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-xl animate-fade-in">
          Send Your Wishes 🎂
        </h1>

        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-2xl overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScMPGkYZ6Q_6R_mKEIIOZ9hSr0JxAsa91muMEL7DGB4wNHmNw/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            onLoad={() => setShowButton(true)}
            title="Birthday Wishes Form"
          >
            Loading…
          </iframe>
        </div>

        {/* Continue button */}
        {showButton && (
          <button
            onClick={handleContinue}
            className="mt-6 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Continue to Thank You Page →
          </button>
        )}
      </div>
    </div>
  );
};

export default Wishes;
