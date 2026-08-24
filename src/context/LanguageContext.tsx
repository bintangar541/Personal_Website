import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return saved === 'en' ? 'en' : 'id';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((current) => current === 'id' ? 'en' : 'id');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
