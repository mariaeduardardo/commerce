import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const FloatingAssistant: React.FC = () => {
  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-[100] flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white/90 bg-[#0241ff] p-1 shadow-[0_12px_35px_rgba(0,20,90,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_45px_rgba(0,20,90,0.6)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 sm:bottom-7 sm:right-7 sm:h-[88px] sm:w-[88px]"
      aria-label="Falar com a assistente virtual pelo WhatsApp"
      title="Falar com a assistente virtual"
    >
      <span className="absolute -inset-1 -z-10 rounded-full border border-white/30 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" aria-hidden="true" />
      <img
        src="./img.png"
        alt="Assistente virtual da Commerce Visual para criação de sites em Belo Horizonte"
        width={512}
        height={512}
        className="h-full w-full rounded-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
      />
      <span className="absolute bottom-0.5 right-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-white shadow-md sm:bottom-1 sm:right-1 sm:h-8 sm:w-8">
        <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#0B132B] shadow-xl group-hover:block">
        Fale com nossa assistente
      </span>
      <span className="sr-only">Abrir conversa no WhatsApp</span>
    </a>
  );
};

export default FloatingAssistant;
