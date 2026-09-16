import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2,
  Star, 
  MessageCircle 
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="premium-shell bg-[#0241ff] pt-24 pb-16 md:min-h-[720px] md:pt-28 md:pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/10 rounded-full blur-[150px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0036d6]/40 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col items-start space-y-4 text-left sm:space-y-5 lg:col-span-7 lg:pr-6">
            <div className="soft-label animate-hero-rise [animation-delay:60ms]">Agência Premium</div>

            <h1 className="animate-hero-rise max-w-[680px] text-[2.35rem] font-black leading-[0.98] tracking-[-0.05em] text-white [animation-delay:90ms] break-words sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.35rem]">
              Seu próximo cliente começa com uma{' '}
              <span className="text-gradient-white underline decoration-white/55 decoration-wavy underline-offset-8">
                experiência melhor
              </span>.
            </h1>

            <p className="animate-hero-rise max-w-[38rem] text-sm font-medium leading-relaxed text-blue-100/95 [animation-delay:180ms] break-words sm:text-base lg:text-lg xl:text-xl">
              Criamos páginas e sistemas que posicionam sua marca, simplificam a decisão de compra e transformam atenção em oportunidades reais.{' '}
              <strong className="font-extrabold text-white">
                Você investe uma vez e o projeto é seu
              </strong>.
            </p>

            <div className="animate-hero-rise flex w-full flex-col items-stretch gap-3 pt-1 [animation-delay:270ms] sm:w-auto sm:flex-row sm:items-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-base font-extrabold text-[#0241ff] shadow-[0_18px_50px_rgba(0,20,90,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-[0_20px_60px_rgba(1,23,96,0.38)] active:scale-[0.95] sm:w-auto sm:px-8 sm:py-4"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Quero transformar meu site</span>
                <ArrowRight className="w-5 h-5 text-[#0241ff] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#solucoes"
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:bg-white/20 active:scale-[0.96] sm:w-auto"
              >
                <span>Ver como podemos ajudar</span>
              </a>
            </div>

            <div className="animate-hero-rise grid w-full grid-cols-2 gap-2.5 border-t border-white/20 pt-4 text-[11px] text-blue-100 [animation-delay:360ms] sm:grid-cols-2 sm:gap-x-4 sm:text-left sm:text-xs">
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2 sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span className="font-medium text-white">Sem mensalidade</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2 sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span className="font-medium text-white">Entrega ágil</span>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2 sm:col-span-1 sm:justify-start">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 no Google</span>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center lg:col-span-5 lg:justify-end">
            <div className="animate-hero-panel relative w-full max-w-[500px] lg:max-w-[520px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#001b70]/35 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-[#0036d6]/85 p-2 shadow-[0_28px_80px_rgba(2,13,77,0.42)] backdrop-blur-xl sm:p-3">
                <img
                  src="/conversion-dashboard.svg"
                  alt="Painel de conversão com métricas, gráfico de leads e notificações em tempo real"
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded-[1.5rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
