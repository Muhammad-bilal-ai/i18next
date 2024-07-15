// components/LanguageSwitcher.js
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
