
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Estudo de Posicionamento",
      desc: "Análise da sua especialidade e do perfil de paciente ideal.",
      label: "POSICIONAMENTO",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Construção de Autoridade",
      desc: "Definição de mensagens e conteúdo que geram confiança e atraem.",
      label: "AUTORIDADE",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Campanhas de Atração",
      desc: "Produção e otimização de tráfego pago para alcançar o público certo.",
      label: "ATRAÇÃO",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Inteligência Comercial",
      desc: "Treinamento e estruturação do atendimento para pré-qualificar contatos.",
      label: "INTELIGÊNCIA",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Funil de Agendamento",
      desc: "Configuração de funil e automações para gerenciar o fluxo.",
      label: "AGENDAMENTO",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Qualificação",
      desc: "Agendamento de consultas somente com pacientes dentro do perfil.",
      label: "QUALIFICAÇÃO",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Otimização Contínua",
      desc: "Ajustes estratégicos semanais para escalar os agendamentos.",
      label: "OTIMIZAÇÃO",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="metodo" className="bg-black w-full h-full flex flex-col items-center justify-center px-6 md:px-12 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-8">
        
        {/* Subtitle */}
        <p className="text-white/60 text-center max-w-2xl text-sm md:text-base font-light mb-4">
          Criamos um novo fluxo de pacientes para sua clínica, integrando estratégia, marketing de autoridade e inteligência comercial em um único processo.
        </p>

        {/* Circular Diagram Container */}
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center mb-12">
          {/* Outer Circle Lines */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-20" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" fill="none" stroke="var(--primary-blue)" strokeWidth="0.5" strokeDasharray="1 3" />
          </svg>

          {/* Center Brand */}
          <div className="text-center z-20">
            <span className="text-white/40 text-[10px] tracking-[0.3em] font-bold uppercase mb-2 block">MÉTODO</span>
            <div className="flex items-baseline font-black text-2xl md:text-3xl tracking-tighter">
              <span className="text-white">Medical</span>
              <span className="text-medical-blue">.Growth</span>
            </div>
          </div>

          {/* Nodes around the circle */}
          {steps.map((step, index) => {
            const angle = (index * (360 / steps.length)) - 90;
            const radius = 45; // percentage
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div 
                key={index} 
                className="absolute flex flex-col items-center group cursor-default transition-all duration-500"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-medical-blue group-hover:border-medical-blue group-hover:bg-medical-blue/10 transition-all shadow-2xl">
                  {step.icon}
                </div>
                <div className="absolute -bottom-8 whitespace-nowrap text-center">
                  <span className="text-[9px] md:text-[10px] font-bold text-white/50 group-hover:text-medical-blue tracking-widest uppercase transition-colors">
                    {step.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {steps.map((step) => (
            <div key={step.id} className="medical-card p-6 border-l-2 border-l-medical-blue/20 hover:border-l-medical-blue transition-all bg-white/5 backdrop-blur-sm">
              <span className="text-medical-blue font-black text-xs mb-3 block">{step.id}. {step.title}</span>
              <p className="text-white/50 text-[11px] md:text-xs leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;
