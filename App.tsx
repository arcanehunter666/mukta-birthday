
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { LETTERS } from './constants';
import Background from './components/Background';
import HeartIntro from './components/HeartIntro';
import Letter from './components/Letter';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const handleNext = () => {
    if (currentPage < LETTERS.length - 1 && !isChanging) {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsChanging(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isChanging) {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsChanging(false);
      }, 500);
    }
  };

  if (!isOpen) {
    return <HeartIntro onOpen={() => setIsOpen(true)} />;
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center py-10 px-4">
      <Background />

      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <div className="flex items-center justify-center gap-2 text-rose-600 mb-2">
          <Heart size={20} className="fill-current animate-pulse" />
          <span className="font-cursive text-2xl">Page {currentPage + 1} of {LETTERS.length}</span>
          <Heart size={20} className="fill-current animate-pulse" />
        </div>
        <h1 className="font-heading text-4xl md:text-5xl text-rose-900 drop-shadow-sm">For Mukta</h1>
      </div>

      {/* Letter Container */}
      <div className="relative z-10 w-full flex-grow flex items-center justify-center">
        <div className={`w-full max-w-2xl transition-all duration-500 ${isChanging ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
          <Letter content={LETTERS[currentPage]} isVisible={!isChanging} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 mt-12 flex items-center gap-8">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0 || isChanging}
          className={`p-4 rounded-full bg-white/80 border border-rose-200 shadow-lg text-rose-500 transition-all hover:bg-rose-50 disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <ChevronLeft size={32} />
        </button>

        <div className="flex gap-3">
          {LETTERS.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentPage ? 'w-8 bg-rose-500' : 'w-2 bg-rose-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === LETTERS.length - 1 || isChanging}
          className={`p-4 rounded-full bg-white/80 border border-rose-200 shadow-lg text-rose-500 transition-all hover:bg-rose-50 disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Floating Sparkle/Extra cute elements */}
      <div className="fixed top-10 right-10 text-rose-400 opacity-60 animate-spin-slow">
        <Sparkles size={40} />
      </div>
      <div className="fixed bottom-10 left-10 text-rose-400 opacity-60 animate-spin-slow">
        <Sparkles size={30} />
      </div>

      {/* Surprise Final Message if at the end */}
      {currentPage === LETTERS.length - 1 && (
        <div className="relative z-10 mt-12 text-center animate-bounce">
          <p className="font-cursive text-3xl text-rose-800">Together Forever ❤️</p>
        </div>
      )}
    </div>
  );
};

export default App;
