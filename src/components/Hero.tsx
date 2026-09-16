import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2,
  Star, 
  MessageCircle 
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { useLanguage } from '../i18n';

const ConversionDashboardGraphic: React.FC<{ title: string; subtitle: string; live: string; conversions: string; vsMarket: string; performance: string; pageSpeed: string; leadsGenerated: string; last7Days: string; newLead: string; }> = ({
  title,
  subtitle,
  live,
  conversions,
  vsMarket,
  performance,
  pageSpeed,
  leadsGenerated,
  last7Days,
  newLead,
}) => (
  <svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
    <defs>
      <linearGradient id="panel" x1="80" y1="40" x2="1120" y2="860" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1554D1" />
        <stop offset="1" stopColor="#06256F" />
      </linearGradient>
      <linearGradient id="chart" x1="110" y1="0" x2="110" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6EE7B7" />
        <stop offset="1" stopColor="#22C55E" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="28" stdDeviation="30" floodColor="#00124F" floodOpacity="0.38" />
      </filter>
    </defs>
    <rect x="34" y="34" width="1132" height="832" rx="48" fill="url(#panel)" stroke="#8DB7FF" strokeOpacity="0.4" strokeWidth="2" filter="url(#shadow)" />
    <circle cx="1040" cy="100" r="170" fill="#5B9BFF" fillOpacity="0.12" />
    <circle cx="170" cy="790" r="210" fill="#6EE7B7" fillOpacity="0.08" />
    <rect x="86" y="86" width="74" height="74" rx="22" fill="white" />
    <path d="M108 132h30M108 116h30M108 148h20" stroke="#1554D1" strokeWidth="7" strokeLinecap="round" />
    <text x="184" y="121" fill="white" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700">{title}</text>
    <text x="184" y="151" fill="#B9D4FF" fontFamily="Arial, sans-serif" fontSize="18">{subtitle}</text>
    <rect x="930" y="103" width="166" height="48" rx="24" fill="#6EE7B7" fillOpacity="0.14" stroke="#6EE7B7" strokeOpacity="0.5" />
    <circle cx="958" cy="127" r="7" fill="#6EE7B7" />
    <text x="978" y="134" fill="#C7F9E2" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="700">{live}</text>
    <rect x="86" y="216" width="498" height="178" rx="28" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.18" />
    <text x="120" y="263" fill="#C8DDFF" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="700">{conversions.toUpperCase()}</text>
    <text x="120" y="334" fill="white" fontFamily="Arial, sans-serif" fontSize="58" fontWeight="700">+380%</text>
    <text x="120" y="369" fill="#86EFAC" fontFamily="Arial, sans-serif" fontSize="17">{vsMarket}</text>
    <circle cx="524" cy="263" r="23" fill="#6EE7B7" fillOpacity="0.18" />
    <path d="M512 269l9-11 8 7 12-16" stroke="#6EE7B7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="616" y="216" width="498" height="178" rx="28" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.18" />
    <text x="650" y="263" fill="#C8DDFF" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="700">{performance.toUpperCase()}</text>
    <text x="650" y="334" fill="white" fontFamily="Arial, sans-serif" fontSize="58" fontWeight="700">95</text>
    <text x="758" y="334" fill="#B9D4FF" fontFamily="Arial, sans-serif" fontSize="28">/100</text>
    <text x="650" y="369" fill="#86EFAC" fontFamily="Arial, sans-serif" fontSize="17">{pageSpeed}</text>
    <circle cx="1054" cy="263" r="23" fill="#6EE7B7" fillOpacity="0.18" />
    <path d="M1043 273l9-20 10 10" stroke="#6EE7B7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="86" y="438" width="1028" height="276" rx="28" fill="#001B70" fillOpacity="0.58" stroke="white" strokeOpacity="0.16" />
    <text x="120" y="487" fill="white" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="700">{leadsGenerated}</text>
    <text x="120" y="518" fill="#B9D4FF" fontFamily="Arial, sans-serif" fontSize="17">{last7Days}</text>
    <rect x="974" y="472" width="104" height="38" rx="12" fill="white" fillOpacity="0.1" />
    <text x="995" y="497" fill="#D9E8FF" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700">+24,8%</text>
    <path d="M140 646C230 614 270 626 340 590C410 554 472 599 542 554C612 509 661 567 731 530C801 493 854 531 922 482C970 448 1010 458 1060 430" stroke="#6EE7B7" strokeWidth="7" strokeLinecap="round" />
    <path d="M140 646C230 614 270 626 340 590C410 554 472 599 542 554C612 509 661 567 731 530C801 493 854 531 922 482C970 448 1010 458 1060 430V665H140V646Z" fill="url(#chart)" fillOpacity="0.16" />
    <g fill="#6EE7B7">
      <circle cx="140" cy="646" r="7" /><circle cx="340" cy="590" r="7" /><circle cx="542" cy="554" r="7" /><circle cx="731" cy="530" r="7" /><circle cx="922" cy="482" r="7" /><circle cx="1060" cy="430" r="7" />
    </g>
    <rect x="86" y="758" width="1028" height="66" rx="22" fill="#6EE7B7" fillOpacity="0.12" stroke="#6EE7B7" strokeOpacity="0.25" />
    <circle cx="123" cy="791" r="19" fill="#6EE7B7" />
    <path d="M114 791c0-6 5-11 11-11 4 0 8 2 10 6l-4 3c-2-2-4-3-6-3-3 0-5 2-5 5s2 5 5 5c2 0 4-1 6-3l4 3c-2 4-6 6-10 6-6 0-11-5-11-11Z" fill="#064E3B" />
    <text x="164" y="798" fill="white" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="700">{newLead}</text>
    <circle cx="1060" cy="791" r="10" fill="#6EE7B7" />
    <path d="M1055 791l4 4 7-8" stroke="#064E3B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Hero: React.FC = () => {
  const { copy } = useLanguage();

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
            <h1 className="animate-hero-rise max-w-[680px] text-[2.35rem] font-black leading-[0.98] tracking-[-0.05em] text-white [animation-delay:90ms] break-words sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.35rem]">
              {copy.hero.title}
            </h1>

            <p className="animate-hero-rise max-w-[38rem] text-sm font-medium leading-relaxed text-blue-100/95 [animation-delay:180ms] break-words sm:text-base lg:text-lg xl:text-xl">
              {copy.hero.description}{' '}
              <strong className="font-extrabold text-white">{copy.hero.emphasis}</strong>.
            </p>

            <div className="animate-hero-rise flex w-full flex-col items-stretch gap-3 pt-1 [animation-delay:270ms] sm:w-auto sm:flex-row sm:items-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-base font-extrabold text-[#0241ff] shadow-[0_18px_50px_rgba(0,20,90,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-[0_20px_60px_rgba(1,23,96,0.38)] active:scale-[0.95] sm:w-auto sm:px-8 sm:py-4"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>{copy.hero.primaryCta}</span>
                <ArrowRight className="w-5 h-5 text-[#0241ff] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#solucoes"
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:bg-white/20 active:scale-[0.96] sm:w-auto"
              >
                <span>{copy.hero.secondaryCta}</span>
              </a>
            </div>

            <div className="animate-hero-rise grid w-full grid-cols-1 gap-2.5 border-t border-white/20 pt-4 text-[11px] text-blue-100 [animation-delay:360ms] sm:grid-cols-2 sm:gap-x-4 sm:text-left sm:text-xs lg:grid-cols-3 lg:items-center lg:justify-center lg:text-center lg:[&>*]:justify-center lg:[&>*]:sm:justify-center">
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2 sm:justify-start lg:justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span className="font-medium text-white">{copy.hero.noFee}</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2 sm:justify-start lg:justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                <span className="font-medium text-white">{copy.hero.fastDelivery}</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2 sm:col-span-1 sm:justify-start lg:justify-center">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                  ))}
                </div>
                <span className="font-bold text-white">{copy.hero.rating}</span>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center lg:col-span-5 lg:justify-end">
            <div className="animate-hero-panel relative w-full max-w-[390px] lg:max-w-[420px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#001b70]/35 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-[#0036d6]/85 p-1.5 shadow-[0_28px_80px_rgba(2,13,77,0.42)] backdrop-blur-xl sm:p-2.5">
                <div className="h-auto w-full overflow-hidden rounded-[1.3rem] object-contain">
                  <ConversionDashboardGraphic
                    title={copy.hero.dashboardTitle}
                    subtitle={copy.hero.dashboardSubtitle}
                    live={copy.hero.dashboardLive}
                    conversions={copy.hero.dashboardConversions}
                    vsMarket={copy.hero.dashboardVsMarket}
                    performance={copy.hero.dashboardPerformance}
                    pageSpeed={copy.hero.dashboardGooglePageSpeed}
                    leadsGenerated={copy.hero.dashboardLeadsGenerated}
                    last7Days={copy.hero.dashboardLast7Days}
                    newLead={copy.hero.dashboardNewLead}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
