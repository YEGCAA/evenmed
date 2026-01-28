
import React from 'react';

const Results: React.FC = () => {
  const benefits = [
    "Aumento do volume de pacientes particulares",
    "Elevação do ticket médio das consultas",
    "Agenda com previsibilidade de ocupação",
    "Construção de autoridade local e digital",
    "Processo comercial independente do médico",
    "Blindagem ética total perante conselhos"
  ];

  return (
    <section className="bg-black w-full h-full flex items-center px-6 md:px-12">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-left mb-16">
          <span className="text-medical-blue font-bold text-xs tracking-widest uppercase mb-4 block">Entregas Reais</span>
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Resultados Estratégicos</h2>
          <p className="text-white/40 text-xl font-light">Impacto operacional direto no faturamento e autoridade.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-5 group">
              <div className="shrink-0 w-6 h-6 rounded-sm bg-medical-blue/20 text-medical-blue flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <span className="text-white/80 font-medium text-lg leading-snug group-hover:text-white transition-colors">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
