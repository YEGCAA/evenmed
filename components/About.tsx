
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-black w-full h-full flex items-center px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-medical-blue font-bold text-xs tracking-widest uppercase mb-4 block">Sobre a Assessoria</span>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 tracking-tight">Especialização Técnica em Gestão de Saúde</h2>
          <p className="text-white/60 leading-relaxed mb-8 text-base md:text-lg font-light">
            Diferente de agências genéricas, a Even Med atua como uma unidade de crescimento focada na jornada do paciente e na eficiência operacional da clínica.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Foco Exclusivo", desc: "Expertise real no setor saúde." },
              { title: "Integração CRM", desc: "Unimos marketing e recepção." },
              { title: "Compliance", desc: "Segurança total CFM/CODAME." },
              { title: "ROI Real", desc: "Foco em consultas particulares." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 border border-white/5 bg-white/5 rounded-lg">
                <h4 className="text-medical-blue font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-white/40 text-[11px] leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="medical-card p-10 bg-medical-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-medical-blue/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
            <p className="text-white text-xl lg:text-2xl font-light leading-relaxed mb-6">
              "Não geramos apenas leads. Construímos autoridade e processos que garantem a sustentabilidade comercial do médico."
            </p>
            <span className="text-medical-blue font-bold text-xs tracking-widest uppercase">Even Med Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
