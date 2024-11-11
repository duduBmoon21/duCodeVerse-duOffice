
import { create } from 'zustand';
import { produce } from 'immer';
import { useTranslation } from 'react-i18next';

const useLanguageStore = create((set) => ({
  language: 'en', // Default language
  setLanguage: (newLanguage) => set(produce((state) => {
    state.language = newLanguage; // Update language state in store
  })),
  changeLanguage: async (newLanguage) => {
    const { i18n } = useTranslation();
    await i18n.changeLanguage(newLanguage); // Change language in i18next
    set(produce((state) => {
      state.language = newLanguage; // Update language in store after i18next change
    }));
  }
}));

export default useLanguageStore;
