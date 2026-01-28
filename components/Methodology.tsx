
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Diagnóstico Estratégico",
      points: ["Análise de posicionamento", "Avaliação de presença digital", "Diagnóstico comercial", "Definição de ICP e oferta"]
    },
    {
      id: "02",
      title: "Estratégia de Captação",
      points: ["Funil estruturado de aquisição", "Tráfego pago orientado a conversão real", "Comunicação 100% ética"]
    },
    {
      id: "03",
      title: "Integração Mkt + Comercial",
      points: ["CRM como base operacional", "Processo padronizado de atendimento", "Follow-up automatizado e humano"]
    },
    {
      id: "04",
      title: "Squad Especializado",
      points: ["Head estratégico dedicado", "Gestores de tráfego e design", "Processos via Playbooks padronizados"]
    }
  ];

  return (
    <section id="metodo" className="bg-black h-full flex items-center px-6 md:px-12 text-white relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Metodologia <span className="text-medical-blue">EVEN MED</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
            Nosso método não é baseado em tentativas. É fundamentado em pilares operacionais consolidados e replicáveis.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="medical-card p-8 bg-medical-navy/30 border border-white/5 rounded-sm hover:border-medical-blue/30 transition-all">
              <span className="text-medical-blue font-black text-sm tracking-widest mb-6 block">{step.id}</span>
              <h3 className="text-lg font-extrabold mb-8 min-h-[50px]">{step.title}</h3>
              <ul className="space-y-4">
                {step.points.map((pt, pi) => (
                  <li key={pi} className="text-slate-400 text-xs flex gap-3 leading-relaxed">
                    <span className="text-medical-blue font-bold shrink-0">›</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
