
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/5 py-3 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="flex items-baseline font-black text-2xl tracking-tighter">
          <span className="text-white">EVEN</span>
          <span className="text-medical-blue">.MED</span>
        </div>
        <div className="hidden lg:block h-5 w-[1px] bg-white/10 mx-2"></div>
        <span className="hidden lg:block text-white/40 text-[9px] uppercase tracking-widest font-semibold mt-1">
          Assessoria de Marketing Médico
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">
        <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector('.snap-container')?.scrollTo({top: window.innerHeight * 3, behavior: 'smooth'}); }} className="hover:text-medical-blue transition-colors">Método</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector('.snap-container')?.scrollTo({top: window.innerHeight * 5, behavior: 'smooth'}); }} className="hover:text-medical-blue transition-colors">Planos</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector('.snap-container')?.scrollTo({top: window.innerHeight * 4, behavior: 'smooth'}); }} className="hover:text-medical-blue transition-colors">Resultados</a>
      </div>
      <div className="w-10"></div>
    </nav>
  );
};

export default Navigation;
