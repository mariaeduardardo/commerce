import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Globe2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { LANGUAGE_OPTIONS, useLanguage } from '../i18n';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash || '#inicio' : '#inicio'));
  const { language, setLanguage, copy } = useLanguage();
  const localizedNavLinks = copy.nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : previousOverflow;

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || '#inicio');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0036d6]/92 backdrop-blur-md border-b border-white/20 shadow-lg shadow-[#002187]/40 py-3.5'
          : 'bg-[#0241ff]/40 backdrop-blur-sm border-b border-white/15 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <a
            href="#inicio"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg min-h-[44px]"
            aria-label="Commerce Visual - Página Inicial"
          >
            <img
              src="/logo-white.png"
              alt="Commerce Visual Logo"
              width={60}
              height={48}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-12 w-auto max-w-[60px] flex-shrink-0 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex min-w-0 flex-col">
              <div className="flex min-w-0 items-center gap-1.5">
                <span className="text-sm leading-none tracking-tight text-white sm:text-xl sm:leading-normal font-black">
                  Commerce
                </span>
                <span className="text-sm leading-none tracking-tight text-blue-100 sm:text-xl sm:leading-normal font-medium">
                  Visual
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-100/90 -mt-1 hidden sm:inline-block">
                {copy.labels.technology}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {localizedNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/15 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-2.5 py-1.5 transition-colors hover:bg-white/20">
              <Globe2 className="h-4 w-4 text-blue-100" aria-hidden="true" />
              <label className="sr-only" htmlFor="language-select">{copy.labels.language}</label>
              <select
                id="language-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value as typeof language)}
                className="bg-transparent text-xs font-bold text-white outline-none [&>option]:text-slate-900"
              >
                {LANGUAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold text-[#0241ff] bg-white hover:bg-blue-50 shadow-xl shadow-[#002187]/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
              aria-label={copy.labels.whatsapp}
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 transition-transform group-hover:rotate-12" />
              <span>{copy.labels.whatsapp}</span>
              <ArrowUpRight className="w-4 h-4 text-[#0241ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="ml-auto flex items-center gap-1.5 md:hidden">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0241ff] font-bold text-sm shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
            </a>
            <div className="flex h-10 flex-shrink-0 items-center gap-1 rounded-xl border border-white/20 bg-white/10 px-1.5 transition-colors hover:bg-white/20">
              <Globe2 className="h-3.5 w-3.5 text-blue-100" aria-hidden="true" />
              <label className="sr-only" htmlFor="mobile-header-language-select">{copy.labels.language}</label>
              <select
                id="mobile-header-language-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value as typeof language)}
                className="max-w-[38px] bg-transparent text-[10px] font-bold text-white outline-none [&>option]:text-slate-900"
              >
                {LANGUAGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative z-[60] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${mobileMenuOpen ? 'rotate-90' : ''}`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? copy.labels.closeMenu : copy.labels.openMenu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[9999] h-screen min-h-[100dvh] bg-[#0036d6] transition-opacity duration-300 ease-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`relative flex h-full w-full flex-col overflow-y-auto bg-[#0036d6] px-5 pb-6 pt-5 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-10 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <div className="flex min-h-[52px] items-center justify-between border-b border-white/15">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Commerce Visual - Página Inicial"
            >
              <img src="/logo-white.png" alt="Commerce Visual Logo" width={48} height={40} loading="eager" decoding="async" className="h-10 w-auto max-w-[48px] object-contain" />
              <span className="text-base font-black tracking-tight text-white">Commerce <span className="font-medium text-blue-100">Visual</span></span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 hover:border-white/60 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col space-y-2" aria-label={copy.labels.mobileNavigation}>
            {localizedNavLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveHash(link.href);
                  setMobileMenuOpen(false);
                }}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 35 + 80}ms` : '0ms' }}
                className={`group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-lg font-semibold tracking-wide text-white/90 transition-all duration-300 hover:translate-x-2 hover:border-white/15 hover:bg-white/10 hover:text-white ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
                }`}
              >
                <span>{link.label}</span>
                <span className={`flex h-2 w-2 rounded-full transition-all duration-300 group-hover:bg-emerald-300 group-hover:shadow-[0_0_12px_rgba(110,231,183,0.9)] ${activeHash === link.href ? 'bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]' : 'bg-white/30'}`} />
              </a>
            ))}
          </nav>
          <div className="mt-auto border-t border-white/15 pt-5">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex min-h-[60px] w-full items-center justify-between gap-3 rounded-2xl border border-emerald-300/30 bg-emerald-400 px-5 py-4 font-extrabold text-[#043d2d] shadow-[0_12px_35px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_16px_42px_rgba(16,185,129,0.38)] active:translate-y-0"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>{copy.labels.mobileWhatsapp}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-3 text-center text-xs font-medium text-blue-100/60">{copy.labels.quickResponse}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
