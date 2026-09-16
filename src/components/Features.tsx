import React from 'react';
import {
  ShieldCheck,
  Target,
  Zap,
  Clock,
  Smartphone,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { FEATURES, SITE_CONFIG } from '../data/siteData';

const iconMap = {
  ShieldCheck,
  Target,
  Zap,
  Clock,
  Smartphone,
  TrendingUp,
};

export const Features: React.FC = () => {
  return (
    <section id="vantagens" className="premium-shell relative overflow-hidden bg-[#0241ff] py-16 sm:py-24 lg:py-32">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="soft-label mb-4">Diferenciais Exclusivos</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight break-words">
            Por que empresas escolhem a{' '}
            <span className="underline decoration-white/40 decoration-wavy underline-offset-8">
              Commerce Visual
            </span>?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">
            Eliminamos os vícios das agências tradicionais: nada de mensalidades infinitas, atrasos misteriosos ou páginas lentas que desperdiçam seu investimento em anúncios.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || ShieldCheck;
            const isNoFee = feature.id === 'sem-mensalidade';

            return (
              <div
                key={feature.id}
                className={`group relative flex min-h-[320px] flex-col justify-between rounded-[28px] border p-5 shadow-[0_18px_48px_rgba(5,26,110,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-[0_28px_70px_rgba(4,19,89,0.32)] sm:p-7 lg:p-8 ${
                  isNoFee
                    ? 'border-white/50 bg-blue-900/35 ring-2 ring-white/20'
                    : 'border-white/15 bg-blue-900/30'
                }`}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0241ff] shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                      {feature.subtitle}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold text-white transition-colors group-hover:text-blue-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/15 pt-5">
                  <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {feature.highlight}
                  </span>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-bold text-white transition-colors hover:text-blue-200"
                  >
                    <span>Saber mais</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
