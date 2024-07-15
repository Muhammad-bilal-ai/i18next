// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./public/locales/en/common.json";
import fr from "./public/locales/fr/common.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
