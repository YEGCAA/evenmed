
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
          A decisão não é fazer marketing. <br/>
          <span className="text-medical-blue">É construir um sistema previsível.</span>
        </h2>
        <p className="text-white/40 text-lg md:text-2xl mb-12 uppercase tracking-[0.3em] font-light">
          Pronto para elevar o patamar da sua clínica?
        </p>
        <button 
          onClick={() => alert("Formalizando fechamento do contrato...")}
          className="btn-coral px-16 py-6 md:py-8 rounded-lg font-bold text-xl md:text-3xl uppercase tracking-[0.2em] transform active:scale-95 transition-all"
        >
          VAMOS FECHAR
        </button>
      </div>
    </div>
  );
};

export default FinalCTA;
