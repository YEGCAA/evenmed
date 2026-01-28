
import React from 'react';

const Differentiators: React.FC = () => {
  const diffs = [
    { title: "Especialização em Saúde", desc: "Entendemos a jornada do paciente e os códigos de ética médica." },
    { title: "Segurança Ética", desc: "Processos alinhados ao CFM e CODAME." },
    { title: "Integração Mkt + Vendas", desc: "Não entregamos leads, entregamos agendamentos qualificados." },
    { title: "Execução Completa", desc: "Foco no resultado operacional, não em métricas de vaidade." },
    { title: "Método Validado", desc: "Processos testados e padronizados em escala." }
  ];

  return (
    <section className="bg-black h-full flex items-center py-24 px-6 md:px-12 text-white overflow-hidden relative border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tighter">Por que a <span className="text-medical-blue">EVEN MED?</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {diffs.map((d, i) => (
            <div key={i} className="text-center p-6 border border-white/5 rounded-lg hover:bg-white/5 transition-all">
              <h3 className="text-medical-blue font-bold text-xs uppercase mb-4 tracking-tighter">{d.title}</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed uppercase tracking-widest">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
