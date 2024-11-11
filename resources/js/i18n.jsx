import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import am from "./locales/am/translation.json";
import or from "./locales/or/translation.json";
// import orr from "./locales/en."

i18n
  .use(initReactI18next)  // Initialize i18next with React
  .init({
    resources: {
      en: { translation: en },
      am: { translation: am },
      or: { translation: or },
    },
    lng: "en",  // default language
    fallbackLng: "en",  // fallback language
    interpolation: {
      escapeValue: false,  // react already escapes
    },
  });

export default i18n;
