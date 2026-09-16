import React from 'react';
import { ArrowUp, MessageCircle, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#002187] border-t border-white/20 text-blue-100 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#inicio"
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="Commerce Visual - Início"
            >
              <img
                src="/logo-white.png"
                alt="Commerce Visual Logo"
                width={50}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto max-w-[50px] object-contain drop-shadow-md transition-transform group-hover:scale-105"
              />
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-white tracking-tight">
                  Commerce
                </span>
                <span className="text-xl font-medium text-blue-200 tracking-tight">
                  Visual
                </span>
              </div>
            </a>

            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              Agência especializada no desenvolvimento de páginas de alta conversão, landing pages estratégicas e sistemas sob medida para empresas que buscam liderança e autoridade digital.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Projetos 100% proprietários • Sem mensalidades obrigatórias</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors font-medium">
                  Landing Pages de Alta Conversão
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors font-medium">
                  Sistemas Web & SaaS Sob Medida
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors font-medium">
                  Identidade Visual Corporativa
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-white transition-colors font-medium">
                  Otimização Core Web Vitals
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Atendimento Direto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span className="font-medium">{SITE_CONFIG.whatsappDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span className="font-medium">{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{SITE_CONFIG.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <div>
            © {SITE_CONFIG.year} {SITE_CONFIG.name}. Todos os direitos reservados. CNPJ: {SITE_CONFIG.cnpj}.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white hover:text-blue-200 font-bold transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
