
import React from 'react';

const Problem: React.FC = () => {
  const problems = [
    { title: "Instabilidade", desc: "Agenda instável mesmo com alta carga de trabalho." },
    { title: "Gargalo Financeiro", desc: "Margens comprimidas pela dependência de convênios." },
    { title: "Leads sem Qualidade", desc: "Curiosos que não avançam para o agendamento real." },
    { title: "Falha no Atendimento", desc: "Recepção que não sabe converter contatos digitais." },
    { title: "Ausência de Funil", desc: "Falta de estratégias de follow-up e retenção." },
    { title: "Risco Ético", desc: "Insegurança com as normas de publicidade médica." }
  ];

  return (
    <section className="bg-black w-full h-full flex items-center px-6 md:px-12 border-y border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tighter">O Gargalo Estrutural da Clínica</h2>
          <p className="text-white/40 text-lg font-light">Identificamos falhas que impedem o crescimento sustentável.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div key={i} className="medical-card p-6 flex flex-col gap-3">
              <span className="text-medical-blue font-bold text-xs">PROBLEMA 0{i+1}</span>
              <h3 className="text-white font-bold text-lg">{p.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
