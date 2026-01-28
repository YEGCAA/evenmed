
import React from 'react';

const BusinessModel: React.FC = () => {
  const items = [
    { label: "Formatos de Contrato", value: "Contratos por período (TCV) para maturação estratégica." },
    { label: "Pagamento", value: "Faturamento via boleto (PJ) ou parcelamento corporativo." },
    { label: "Acompanhamento", value: "Dashboards de performance em tempo real e reuniões mensais." },
    { label: "Gestão por Dados", value: "Métricas claras de CAC, LTV e taxa de conversão comercial." }
  ];

  return (
    <section className="bg-black w-full h-full flex items-center px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Modelo de Trabalho</h2>
          <p className="text-white/40 text-lg font-light uppercase tracking-widest">Processos transparentes e orientados a resultados.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="p-8 medical-card border-l-4 border-medical-blue">
              <h4 className="text-medical-blue font-bold text-xs uppercase tracking-widest mb-3">{item.label}</h4>
              <p className="text-white/70 text-base leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
