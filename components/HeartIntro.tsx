
import React from 'react';
import { Heart } from 'lucide-react';

interface HeartIntroProps {
  onOpen: () => void;
}

const HeartIntro: React.FC<HeartIntroProps> = ({ onOpen }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-10 bg-rose-50 overflow-hidden">
      <div className="text-center mb-12 animate-bounce">
        <h1 className="font-heading text-4xl text-rose-600 mb-2">Hello Baby...</h1>
        <p className="font-cursive text-2xl text-rose-400">Click the heart to see my heart</p>
      </div>

      <button
        onClick={onOpen}
        className="group relative flex items-center justify-center transition-transform hover:scale-110 active:scale-95 outline-none"
      >
        <div className="absolute inset-0 bg-rose-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
        <Heart
          className="w-48 h-48 text-rose-500 fill-rose-500 transition-all duration-700 ease-in-out group-hover:text-rose-600 group-hover:fill-rose-600 drop-shadow-2xl"
        />
        <span className="absolute font-cursive text-white text-3xl font-bold mt-2">Mukta</span>
      </button>

      <div className="mt-16 flex gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
    </div>
  );
};

export default HeartIntro;
