import { useEffect, useMemo, useState, type CSSProperties } from "react";

type Locale = "en" | "ru";

type ConfirmationState = {
  isError: boolean;
  message?: string;
};

const content: Record<
  Locale,
  {
    metaTitle: string;
    languageLabel: string;
    successEyebrow: string;
    errorEyebrow: string;
    successTitle: string;
    errorTitle: string;
    successBody: string;
    errorBody: string;
    defaultError: string;
    note: string;
  }
> = {
  en: {
    metaTitle: "Email confirmed - LinguaCat",
    languageLabel: "Language",
    successEyebrow: "Email confirmed",
    errorEyebrow: "Confirmation link",
    successTitle: "Your email is confirmed.",
    errorTitle: "We could not confirm this email link.",
    successBody:
      "You can return to LinguaCat and continue using your account. This email is now linked to your LinguaCat account.",
    errorBody:
      "The confirmation link may have expired or already been used. Open LinguaCat and request a new confirmation email if you still cannot sign in.",
    defaultError: "The confirmation link is invalid or expired.",
    note: "You can close this page and return to LinguaCat.",
  },
  ru: {
    metaTitle: "Email подтверждён - LinguaCat",
    languageLabel: "Язык",
    successEyebrow: "Email подтверждён",
    errorEyebrow: "Ссылка подтверждения",
    successTitle: "Email успешно подтверждён.",
    errorTitle: "Не удалось подтвердить email по этой ссылке.",
    successBody:
      "Теперь можно вернуться в LinguaCat и продолжить работу с аккаунтом. Этот email привязан к вашему аккаунту LinguaCat.",
    errorBody:
      "Ссылка могла устареть или уже была использована. Откройте LinguaCat и запросите новое письмо подтверждения, если вход всё ещё не работает.",
    defaultError: "Ссылка подтверждения недействительна или устарела.",
    note: "Эту страницу можно закрыть и вернуться в LinguaCat.",
  },
};

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const params = new URLSearchParams(window.location.search);
  const queryLocale = params.get("lang");
  if (queryLocale === "ru" || queryLocale === "en") {
    return queryLocale;
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return browserLanguages.some((language) => language.toLowerCase().startsWith("ru")) ? "ru" : "en";
}

function readConfirmationState(defaultError: string): ConfirmationState {
  if (typeof window === "undefined") {
    return { isError: false };
  }

  const params = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const error =
    params.get("error_description") ||
    hashParams.get("error_description") ||
    params.get("error") ||
    hashParams.get("error");

  return error ? { isError: true, message: decodeURIComponent(error) || defaultError } : { isError: false };
}

function LanguageToggle({
  locale,
  setLocale,
  label,
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  label: string;
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-full border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)] p-1 text-sm shadow-sm"
      aria-label={label}
    >
      {(["en", "ru"] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          className={[
            "min-w-11 rounded-full px-3 py-1.5 font-semibold transition",
            locale === item
              ? "bg-[var(--lc-primary)] text-white"
              : "text-[var(--lc-text-muted)] hover:bg-[var(--lc-surface-variant)] hover:text-[var(--lc-text)]",
          ].join(" ")}
          onClick={() => setLocale(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function LinguaCatEmailConfirmedPage() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const page = content[locale];
  const confirmation = useMemo(() => readConfirmationState(page.defaultError), [page.defaultError]);

  useEffect(() => {
    document.title = page.metaTitle;
    document.documentElement.lang = locale;

    const previousRobots = document.querySelector('meta[name="robots"]')?.getAttribute("content");
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow");

    return () => {
      document.title = "Nail Asadullin";
      document.documentElement.lang = "en";
      if (previousRobots) {
        robots?.setAttribute("content", previousRobots);
      } else {
        robots?.remove();
      }
    };
  }, [locale, page.metaTitle]);

  return (
    <main
      className="min-h-screen bg-[var(--lc-background)] text-[var(--lc-text)]"
      style={
        {
          "--lc-primary": "#3399FF",
          "--lc-secondary": "#66CCFF",
          "--lc-tertiary": "#FFCC66",
          "--lc-background": "#F7F9FC",
          "--lc-surface": "#FFFFFF",
          "--lc-surface-variant": "#E1EAF4",
          "--lc-text": "#1F2933",
          "--lc-text-muted": "#4A5D73",
          "--lc-coral": "#E57F84",
          "--lc-teal": "#4297A0",
        } as CSSProperties
      }
    >
      <header className="border-b border-[var(--lc-surface-variant)] bg-white/88 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <a href="/linguacat" className="flex min-w-0 items-center gap-2 text-base font-bold tracking-wide text-[var(--lc-text)]">
            <img src="/linguacat/happy_cat.png" alt="" className="h-9 w-9 rounded-lg shadow-sm" />
            <span className="truncate">LinguaCat</span>
          </a>
          <LanguageToggle locale={locale} setLocale={setLocale} label={page.languageLabel} />
        </div>
      </header>

      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-5xl items-center">
          <div className="max-w-2xl">
            <div
              className={[
                "mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em]",
                confirmation.isError
                  ? "border-[var(--lc-coral)] bg-[#FFF0F1] text-[var(--lc-coral)]"
                  : "border-[var(--lc-teal)] bg-[#EDF9F8] text-[var(--lc-teal)]",
              ].join(" ")}
            >
              {confirmation.isError ? page.errorEyebrow : page.successEyebrow}
            </div>

            <h1 className="text-4xl font-bold leading-tight text-[var(--lc-text)] sm:text-6xl">
              {confirmation.isError ? page.errorTitle : page.successTitle}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--lc-text-muted)] sm:text-xl">
              {confirmation.isError ? page.errorBody : page.successBody}
            </p>

            {confirmation.message ? (
              <p className="mt-5 rounded-lg border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)] p-4 text-sm leading-6 text-[var(--lc-text-muted)]">
                {confirmation.message}
              </p>
            ) : null}

            <p className="mt-8 rounded-lg border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)] p-4 text-sm font-semibold leading-6 text-[var(--lc-text)]">
              {page.note}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
