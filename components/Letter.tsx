
import React from 'react';
import { LetterContent } from '../types';

interface LetterProps {
  content: LetterContent;
  isVisible: boolean;
}

const Letter: React.FC<LetterProps> = ({ content, isVisible }) => {
  return (
    <div
      className={`max-w-xl w-full mx-auto transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
    >
      <div className="parchment p-8 md:p-12 min-h-[500px] relative rounded-lg overflow-hidden flex flex-col justify-between">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-200/20 rotate-45 translate-x-12 -translate-y-12" />
        
        <header className="mb-8">
          <h2 className="font-heading text-3xl text-rose-800 mb-4 italic border-b border-rose-200 pb-2">
            {content.title}
          </h2>
          <div className="text-rose-400 font-serif italic">October 4th</div>
        </header>

        <main className="flex-grow">
          <p className="font-serif text-xl leading-relaxed text-stone-800 first-letter:text-5xl first-letter:font-cursive first-letter:text-rose-600 first-letter:float-left first-letter:mr-3 whitespace-pre-wrap">
            {content.body}
          </p>
        </main>

        <footer className="mt-8 border-t border-rose-200 pt-6 text-right">
          <p className="font-cursive text-3xl text-rose-700">Yours forever,</p>
          <p className="font-cursive text-2xl text-rose-600 mt-1">Omkar</p>
        </footer>
      </div>
    </div>
  );
};

export default Letter;
