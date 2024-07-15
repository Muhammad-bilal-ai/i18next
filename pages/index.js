import Image from "next/image";
import { Inter } from "next/font/google";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwtcher";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <LanguageSwitcher />
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
      </div>
    </main>
  );
}
