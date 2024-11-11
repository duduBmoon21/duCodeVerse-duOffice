import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';  // Importing i18n hook from react-i18next

// Create a context to manage the language state globally
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Set the initial state of the language (we'll use `en` as the default)
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const { i18n } = useTranslation(); // i18next hook to change language

  useEffect(() => {
    // Whenever the `language` state changes, update the i18n language and save to localStorage
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);  // Save the selected language to localStorage
  }, [language, i18n]);

  // Provide the language state and function to update it
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access the language store
export const useLanguageStore = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageStore must be used within a LanguageProvider");
  }
  return context;
};
