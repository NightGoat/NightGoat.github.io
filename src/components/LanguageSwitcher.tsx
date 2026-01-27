import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

type Props = {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: Props) {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`text-xs rounded border transition ${
            compact ? "px-1.5 py-0.5" : "px-2 py-1"
          }
            ${
              i18n.language === code
                ? "border-accent text-accent"
                : "border-white/20 text-white/60 hover:text-white"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
