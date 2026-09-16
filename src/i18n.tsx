import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTranslations, SupportedLanguage } from './i18n/translations';

export type Language = SupportedLanguage;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LANGUAGE_STORAGE_KEY = 'commerce-visual-language';

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LANGUAGE_OPTIONS: Array<{ value: Language; label: string }> = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
];

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return {
    ...context,
    copy: getTranslations(context.language),
  };
};

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt';
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === 'en' ? 'en' : 'pt';
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};
