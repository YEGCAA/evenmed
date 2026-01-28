
import React from 'react';

const Plans: React.FC = () => {
  const plans = [
    {
      name: "ESTRUTURAÇÃO",
      duration: "4 SEMANAS",
      target: "Base estratégica.",
      deliverables: ["Diagnóstico", "LP de Conversão", "Organização IG", "Campanha Ready"],
      highlight: "Garantia de Entrega"
    },
    {
      name: "SILVER",
      duration: "MENSAL",
      target: "Fluxo de agendamentos.",
      deliverables: ["Ads Meta/Google", "Gestão Diária", "Relatórios", "Criativos"],
      highlight: "Foco em ROI"
    },
    {
      name: "GOLD",
      duration: "PREMIUM",
      target: "Captação + Autoridade.",
      deliverables: ["Tudo Silver", "Calendário Editorial", "Design Feed", "Squad Dedicado"],
      highlight: "Autoridade Digital"
    },
    {
      name: "SALES MANAGER",
      duration: "COMERCIAL",
      target: "Conversão na recepção.",
      deliverables: ["Implementação CRM", "Playbook Vendas", "Treinamento", "Follow-up"],
      highlight: "Blindagem de Vendas"
    }
  ];

  return (
    <section id="planos" className="bg-black w-full h-full flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight uppercase">Escopos de Atuação</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((p, i) => (
            <div key={i} className="medical-card flex flex-col overflow-hidden">
              <div className="bg-medical-navy p-5 text-white">
                <span className="text-medical-blue font-bold text-[9px] tracking-widest mb-2 block">{p.duration}</span>
                <h3 className="text-lg font-bold">{p.name}</h3>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-2 mb-4">
                  {p.deliverables.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-[11px] text-white/60 font-medium">
                      <span className="text-medical-blue font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-3 bg-white/5 text-[9px] text-white/30 text-center font-bold uppercase tracking-widest">
                {p.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
