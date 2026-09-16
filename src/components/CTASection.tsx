import React from 'react';
import { MessageCircle, ArrowUpRight, CheckCircle2, Shield, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0241ff] py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main High-Contrast White CTA Box inside #0241ff */}
        <div className="relative overflow-hidden rounded-[32px] bg-white p-5 text-slate-950 shadow-2xl shadow-[#002187]/60 ring-8 ring-white/20 sm:p-8 lg:p-12">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex min-h-[44px] items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black text-[#0241ff] shadow-sm">
              <span>Pronto para acelerar suas vendas?</span>
            </div>

            {/* Main CTA Heading */}
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem]">
              Pare de perder vendas para concorrentes com sites genéricos.
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Tenha uma página ou sistema profissional de alta conversão, entregue com agilidade e{' '}
              <strong className="text-[#0241ff] font-black">100% sob seu controle, sem mensalidades obrigatórias</strong>.
            </p>

            {/* Action Button Container */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-brand-whatsapp to-emerald-500 px-6 py-3.5 text-base font-black text-white shadow-glow-whatsapp transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_60px_rgba(16,185,129,0.35)] active:scale-[0.96] sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                <span>Falar com Especialista no WhatsApp</span>
                <ArrowUpRight className="w-5 h-5 text-emerald-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Guarantee Points */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Atendimento Rápido e Consultivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0241ff]" />
                <span>Orçamento Sem Compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Cronograma Seguro de Entrega</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
