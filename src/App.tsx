import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingAssistant } from './components/FloatingAssistant';
import { LanguageProvider } from './i18n';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0241ff] text-white selection:bg-white selection:text-[#0241ff] flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <Features />
          <Services />
          <ProcessSection />
          <FAQSection />
          <CTASection />
        </main>

        <Footer />
        <FloatingAssistant />
      </div>
    </LanguageProvider>
  );
};

export default App;
