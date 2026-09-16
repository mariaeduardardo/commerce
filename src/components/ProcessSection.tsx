import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PROCESS_STEPS, SITE_CONFIG } from '../data/siteData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="como-funciona" className="premium-shell relative overflow-hidden bg-[#0241ff] py-16 sm:py-24 lg:py-32">
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="soft-label mb-4">Processo Transparente</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight break-words">
            Como tiramos sua ideia do papel em{' '}
            <span className="underline decoration-white/40 decoration-wavy underline-offset-8">
              4 Etapas Ágeis
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-blue-100">
            Metodologia sem enrolação. Você acompanha cada passo com alinhamento contínuo e previsão exata de entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="group relative flex min-h-[260px] flex-col justify-between rounded-[28px] border border-white/15 bg-blue-900/30 p-5 shadow-[0_18px_48px_rgba(7,21,96,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-[0_22px_60px_rgba(4,19,89,0.28)] sm:p-6 lg:p-7"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-4xl font-black font-mono text-white drop-shadow-sm">
                    {step.step}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0241ff] text-xs font-black shadow-md">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-extrabold text-white transition-colors group-hover:text-blue-200">
                  {step.title}
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex items-center border-t border-white/15 pt-4 text-xs font-bold text-white">
                <span>Garantia de Qualidade</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/25 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:flex-row sm:p-6 lg:p-8">
          <div>
            <h4 className="text-lg font-black text-white">
              Pronto para iniciar a primeira etapa?
            </h4>
            <p className="mt-1 text-sm text-blue-100">
              Faça um diagnóstico rápido e receba uma proposta sem compromisso no WhatsApp.
            </p>
          </div>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-[#0241ff] shadow-xl transition-all duration-200 hover:bg-blue-50 active:scale-[0.96] sm:w-auto sm:px-7 sm:py-4"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Fazer Diagnóstico Grátis</span>
            <ArrowRight className="w-4 h-4 text-[#0241ff]" />
          </a>
        </div>
      </div>
    </section>
  );
};
