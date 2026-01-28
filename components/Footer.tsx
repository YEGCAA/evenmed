
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-baseline font-black text-xl tracking-tighter opacity-30 grayscale">
          <span className="text-white">EVEN</span>
          <span className="text-medical-blue">.MED</span>
        </div>
        <div className="text-white/20 text-[9px] uppercase tracking-widest text-center md:text-right font-medium">
          © {new Date().getFullYear()} EVEN DIGITAL - UNIDADE SAÚDE. <span className="text-medical-blue/50">MEDICAL.GROWTH STRATEGY.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
