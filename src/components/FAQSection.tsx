import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../i18n';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { copy } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0241ff] py-16 sm:py-24 lg:py-32">
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-bold text-white mb-4 backdrop-blur-md">
            <span>{copy.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight break-words">
            {copy.faq.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-blue-100">
            {copy.faq.description}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 sm:space-y-4">
          {copy.faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-[28px] border shadow-[0_18px_48px_rgba(7,20,86,0.16)] transition-all duration-200 ${
                  isOpen
                    ? 'border-white/50 bg-blue-900/40 shadow-2xl backdrop-blur-2xl'
                    : 'border-white/15 bg-blue-900/25 backdrop-blur-xl hover:border-white/35 hover:shadow-[0_22px_60px_rgba(3,17,78,0.28)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between rounded-[28px] px-4 py-4 text-left transition-transform duration-200 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-black text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md ${
                    isOpen
                      ? 'bg-white text-[#0241ff] rotate-180'
                      : 'bg-white/20 text-white'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-blue-50 leading-relaxed border-t border-white/20 pt-4 animate-in fade-in duration-200 font-medium">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Objection solver CTA */}
        <div className="mt-8 rounded-[28px] border border-white/25 bg-blue-900/35 p-4 text-center shadow-[0_22px_60px_rgba(4,19,89,0.28)] backdrop-blur-xl sm:mt-10 sm:p-6 lg:p-8">
          <p className="text-base font-bold text-white">
            {copy.faq.objection}
          </p>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-black text-[#0241ff] shadow-md transition-all duration-200 hover:bg-blue-50 active:scale-[0.96] sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{copy.faq.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
