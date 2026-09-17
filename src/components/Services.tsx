import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, Layers, Code, Palette } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../i18n';

const serviceIcons = {
  'landing-pages': Layers,
  'sistemas-web': Code,
  'identidade-visual': Palette,
};

export const Services: React.FC = () => {
  const { copy } = useLanguage();

  return (
    <section id="solucoes" className="premium-shell relative overflow-hidden border-y border-white/15 bg-[#0043ce] py-16 sm:py-24 lg:py-32">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="soft-label mb-4">{copy.services.eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {copy.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
            {copy.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {copy.servicesData.map((service) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons] || Layers;
            const isFeatured = service.recommended;

            return (
              <div
                id={service.id}
                key={service.id}
                className={`group relative flex min-h-[420px] flex-col justify-between overflow-visible rounded-[28px] p-4 pt-8 shadow-[0_18px_48px_rgba(8,28,107,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-white/50 sm:p-5 sm:pt-9 lg:p-6 lg:pt-10 ${
                  isFeatured
                    ? 'bg-white text-slate-900 shadow-2xl shadow-[#002885]/50 ring-2 ring-white/50 lg:-translate-y-2'
                    : 'border border-white/15 bg-blue-900/30 text-white backdrop-blur-xl hover:shadow-[0_25px_70px_rgba(3,18,75,0.32)]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0241ff] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg ring-2 ring-white/20">
                    {service.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-md ${
                      isFeatured ? 'bg-[#0241ff] text-white' : 'bg-white text-[#0241ff]'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {!isFeatured && (
                      <span className="rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className={`mb-2 text-xl font-black leading-tight ${isFeatured ? 'text-slate-900' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-4 text-sm leading-relaxed ${isFeatured ? 'text-slate-600' : 'text-blue-100'}`}>
                    {service.description}
                  </p>

                  <div className={`mb-5 space-y-2 border-t pt-3 ${isFeatured ? 'border-slate-200' : 'border-white/15'}`}>
                    <span className={`mb-2 block text-[10px] font-extrabold uppercase tracking-wider ${isFeatured ? 'text-slate-500' : 'text-blue-200'}`}>
                      {copy.services.included}
                    </span>
                    {service.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                        <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${isFeatured ? 'text-emerald-600' : 'text-emerald-300'}`} />
                        <span className={isFeatured ? 'text-slate-800 font-medium' : 'text-white'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-xs font-black shadow-lg transition-all duration-300 active:scale-[0.96] ${
                      isFeatured
                        ? 'bg-gradient-to-r from-emerald-600 to-brand-whatsapp text-white hover:from-emerald-500 hover:to-brand-whatsappHover hover:scale-[1.02]'
                        : 'bg-white text-[#0241ff] hover:bg-blue-50'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
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
