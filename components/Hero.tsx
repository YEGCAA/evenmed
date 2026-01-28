
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient h-full flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden text-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-medical-blue opacity-10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-medical-blue animate-pulse"></span>
          <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            Assessoria Estratégica para Clínicas
          </span>
        </div>
        
        <h1 className="text-white text-5xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter">
          Marketing Médico com <br/>
          <span className="text-medical-blue">Previsibilidade Real</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-2xl max-w-2xl leading-relaxed font-light mb-0 mx-auto">
          Implementamos um sistema integrado de captação e conversão para médicos que buscam autonomia de convênios com total segurança ética.
        </p>
      </div>
    </section>
  );
};

export default Hero;
