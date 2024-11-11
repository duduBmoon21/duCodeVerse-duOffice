// resources/js/hooks/store/useLanguageStore.js

import { create } from 'zustand';

export const useLanguageStore = create((set) => ({
  language: 'en', // Default language
  changeLanguage: (newLanguage) => set({ language: newLanguage }),
}));
