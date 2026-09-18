import React from 'react';
import { ArrowUp, MessageCircle, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../i18n';

export const Footer: React.FC = () => {
  const { copy } = useLanguage();
  const solutionLinks = [
    { label: copy.footer.solutionLinks[0], href: '#landing-pages' },
    { label: copy.footer.solutionLinks[1], href: '#sistemas-saas' },
    { label: copy.footer.solutionLinks[2], href: '#identidade-visual' },
    { label: copy.footer.solutionLinks[3], href: '#performance' },
  ];

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
                src="./logo-white.png"
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
              {copy.footer.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{copy.footer.ownership}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {copy.footer.navigation}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {copy.nav.map((link) => (
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
              {copy.footer.solutions}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      const target = document.querySelector(link.href);
                      if (target) {
                        event.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {copy.footer.contact}
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
                <span className="font-medium">{copy.footer.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <div>
              © {SITE_CONFIG.year} {SITE_CONFIG.name}. {copy.footer.copyright} CNPJ: {SITE_CONFIG.cnpj}.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white hover:text-blue-200 font-bold transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>{copy.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
