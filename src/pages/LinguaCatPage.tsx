import { useEffect, useMemo, useState, type CSSProperties } from "react";

type Locale = "en" | "ru";

type Screenshot = {
  fileName: string;
  title: string;
  caption: string;
  variant?: "phone" | "desktop";
};

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type Step = {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  screenshot: Screenshot;
};

type Content = {
  metaTitle: string;
  nav: string[];
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    screenshot: Screenshot;
  };
  features: {
    eyebrow: string;
    title: string;
    body: string;
    items: Feature[];
  };
  flow: {
    eyebrow: string;
    title: string;
    body: string;
    steps: Step[];
  };
  podcat: {
    eyebrow: string;
    title: string;
    body: string;
    items: Feature[];
    screenshot: Screenshot;
  };
  ownership: {
    eyebrow: string;
    title: string;
    body: string;
    items: Feature[];
  };
  desktop: {
    eyebrow: string;
    title: string;
    body: string;
    screenshot: Screenshot;
  };
  premium: {
    eyebrow: string;
    title: string;
    body: string;
    freeTitle: string;
    premiumTitle: string;
    freeItems: string[];
    premiumItems: string[];
  };
  closing: {
    title: string;
    body: string;
  };
};

const content: Record<Locale, Content> = {
  en: {
    metaTitle: "LinguaCat - personal vocabulary and calm language practice",
    nav: ["Features", "How it works", "PodCat", "Data", "Premium"],
    languageLabel: "Language",
    hero: {
      eyebrow: "Personal vocabulary app",
      title: "Turn real words into a steady language habit.",
      lead: "LinguaCat is a calm place to collect words and phrases, review them with smart flashcards, and practice through writing, listening and short games.",
      body: "Add vocabulary from daily life, collections or podcasts. LinguaCat keeps the next step clear, helps you repeat before you forget, and stays focused on the words you actually want to remember.",
      primaryCta: "See the learning flow",
      secondaryCta: "Explore PodCat",
      highlights: ["Offline-first dictionary", "Spaced repetition", "Words from podcasts"],
      screenshot: {
        fileName: "01-home.jpg",
        title: "LinguaCat home",
        caption: "Today’s reviews, groups, practice modes and progress in one focused home screen.",
      },
    },
    features: {
      eyebrow: "Core app",
      title: "Dictionary, cards, games and audio in one learning loop.",
      body: "LinguaCat is built around your own material. The app helps you save it, organize it, review it and return tomorrow without noise or pressure.",
      items: [
        {
          icon: "📚",
          title: "Personal dictionary",
          description: "Save words, phrases, translations, notes, images and memory cues in groups that match your life.",
        },
        {
          icon: "🧠",
          title: "Adaptive flashcards",
          description: "Grade each answer as Again, Hard, Good or Easy so difficult words return sooner and familiar words wait longer.",
        },
        {
          icon: "✍️",
          title: "Active recall",
          description: "Switch from review to practice modes when you want to write, listen or reinforce vocabulary without changing the schedule.",
        },
        {
          icon: "🔊",
          title: "Listen & Repeat",
          description: "Hear the word, repeat it at your own pace, then check the meaning with configurable pauses.",
        },
        {
          icon: "📊",
          title: "Gentle statistics",
          description: "Track streaks, reviews, active days and upcoming work as a signal of movement, not a source of pressure.",
        },
        {
          icon: "🧩",
          title: "Ready collections",
          description: "Start with first-word sets or select useful phrases, then make them part of your own dictionary.",
        },
      ],
    },
    flow: {
      eyebrow: "How it works",
      title: "A simple loop for vocabulary that should stay with you.",
      body: "Add useful language, repeat it at the right time, reinforce it through practice, and keep building from real sources.",
      steps: [
        {
          label: "01",
          title: "Collect words and phrases",
          description: "Add vocabulary manually, enrich it with notes and images, or import useful items from collections and PodCat.",
          bullets: ["Words and phrases", "Notes and images", "Manual or imported"],
          screenshot: {
            fileName: "03-word-editor.jpg",
            title: "Word editor",
            caption: "Create cards with translation, notes, media and group context.",
          },
        },
        {
          label: "02",
          title: "Keep the dictionary organized",
          description: "Group words by topic, trip, class, book or podcast. Search, filter and move items as your vocabulary grows.",
          bullets: ["Topic groups", "Search and filters", "Batch actions"],
          screenshot: {
            fileName: "02-dictionary.jpg",
            title: "Dictionary",
            caption: "A searchable vocabulary library, not a throwaway word list.",
          },
        },
        {
          label: "03",
          title: "Review before forgetting",
          description: "Flashcards use your own answer quality to schedule the next repetition. Review changes progress; practice stays separate.",
          bullets: ["Again / Hard / Good / Easy", "Review schedule", "Practice mode"],
          screenshot: {
            fileName: "05-flashcards-grade.jpg",
            title: "Flashcard grading",
            caption: "A short honest grade turns each card into a personal schedule.",
          },
        },
        {
          label: "04",
          title: "Reinforce with games and audio",
          description: "Practice spelling with Word Game, run extra flashcards, or use Listen & Repeat when hearing and pronunciation matter.",
          bullets: ["Word Game", "Flashcard practice", "Listen & Repeat"],
          screenshot: {
            fileName: "06-practice-modes.jpg",
            title: "Practice modes",
            caption: "Choose the mode that fits the moment and the group you are learning.",
          },
        },
        {
          label: "05",
          title: "See progress without pressure",
          description: "Statistics show activity, review volume, streaks and upcoming repetitions so you can understand the rhythm.",
          bullets: ["Active days", "Review history", "Upcoming reviews"],
          screenshot: {
            fileName: "08-statistics.jpg",
            title: "Statistics",
            caption: "Progress is presented as direction, not a scoreboard.",
          },
        },
      ],
    },
    podcat: {
      eyebrow: "PodCat",
      title: "Use real podcast phrases as learning material.",
      body: "PodCat connects listening practice with your dictionary: search podcasts, download episodes, transcribe locally, save useful phrases and turn them into LinguaCat cards.",
      items: [
        {
          icon: "🎧",
          title: "Podcast search and subscriptions",
          description: "Find podcasts for practice, keep local subscriptions and continue the episode you were listening to.",
        },
        {
          icon: "📝",
          title: "Local transcription",
          description: "After a model is downloaded, Whisper transcription runs on the device with clear speed and battery tradeoffs.",
        },
        {
          icon: "⭐",
          title: "Saved phrases",
          description: "Select useful lines from the transcript, add translations and move them into your LinguaCat dictionary.",
        },
      ],
      screenshot: {
        fileName: "11-podcat-transcription.jpg",
        title: "PodCat transcription",
        caption: "Listen, follow the transcript and save phrases you want to remember.",
      },
    },
    ownership: {
      eyebrow: "Offline-first",
      title: "Your words stay useful even when the cloud is optional.",
      body: "LinguaCat is designed around local learning and data ownership. An account is not required for the core dictionary, and Premium sync extends the local workflow instead of replacing it.",
      items: [
        {
          icon: "📱",
          title: "Local-first learning",
          description: "The main dictionary and practice flow work from data stored on the device.",
        },
        {
          icon: "📦",
          title: "Markdown backup",
          description: "Export and import a readable dictionary file, with or without flashcard progress.",
        },
        {
          icon: "🔐",
          title: "Account when needed",
          description: "Use LinguaCat without signing in; add Premium when you want sync and extended features.",
        },
      ],
    },
    desktop: {
      eyebrow: "Desktop helper",
      title: "Maintain a larger dictionary from the keyboard.",
      body: "LinguaCat Desktop is a focused companion for synced dictionaries: search, filter, add, edit and clean up vocabulary faster on a large screen.",
      screenshot: {
        fileName: "10-desktop-dictionary.png",
        title: "LinguaCat Desktop",
        caption: "A utility view for maintaining synced vocabulary, not a replacement for mobile learning modes.",
        variant: "desktop",
      },
    },
    premium: {
      eyebrow: "Free and Premium",
      title: "Start locally. Add sync and extended tools when you need them.",
      body: "The core learning path is designed to work without an account. Premium is for people who want their dictionary and practice context to travel further.",
      freeTitle: "Free",
      premiumTitle: "Premium",
      freeItems: ["Local dictionary", "Flashcards and practice", "Up to 3 custom groups", "Manual backup and restore"],
      premiumItems: ["Cloud sync", "More groups", "Background Listen & Repeat", "PodCat access when enabled"],
    },
    closing: {
      title: "A quieter way to build vocabulary.",
      body: "LinguaCat helps you gather language from real life, review it honestly, and come back to the next useful step.",
    },
  },
  ru: {
    metaTitle: "LinguaCat - личный словарь и спокойная языковая практика",
    nav: ["Возможности", "Как работает", "PodCat", "Данные", "Premium"],
    languageLabel: "Язык",
    hero: {
      eyebrow: "Личный словарь для изучения языков",
      title: "Учите слова, которые нужны именно вам.",
      lead: "LinguaCat помогает собирать слова и фразы, повторять их по карточкам и закреплять в коротких упражнениях.",
      body: "Добавляйте лексику из книг, разговоров, фильмов, коллекций или подкастов. Приложение подскажет, что пора повторить сегодня, и не будет отвлекать лишним.",
      primaryCta: "Как это работает",
      secondaryCta: "Открыть PodCat",
      highlights: ["Ваш личный словарь", "Повторение по расписанию", "Фразы из подкастов"],
      screenshot: {
        fileName: "01-home.jpg",
        title: "Домашний экран LinguaCat",
        caption: "Слова на сегодня, группы, упражнения и прогресс в одном месте.",
      },
    },
    features: {
      eyebrow: "Что внутри",
      title: "Словарь, карточки, упражнения и аудио.",
      body: "В центре LinguaCat - ваши слова. Вы сохраняете их, раскладываете по темам и постепенно начинаете вспоминать увереннее.",
      items: [
        {
          icon: "📚",
          title: "Личный словарь",
          description: "Добавляйте слова и фразы с переводом, заметками, изображениями и подсказками для памяти.",
        },
        {
          icon: "🧠",
          title: "Умные карточки",
          description: "После ответа выберите, насколько легко вспомнили слово. LinguaCat сам назначит следующее повторение.",
        },
        {
          icon: "✍️",
          title: "Практика без давления",
          description: "Пишите слова, повторяйте карточки или слушайте их отдельно от основного расписания.",
        },
        {
          icon: "🔊",
          title: "Аудиоповторение",
          description: "Слушайте слово, повторяйте вслух и проверяйте перевод в удобном темпе.",
        },
        {
          icon: "📊",
          title: "Простая статистика",
          description: "Следите за серией, повторениями и активными днями без ощущения отчёта или соревнования.",
        },
        {
          icon: "🧩",
          title: "Готовые коллекции",
          description: "Можно начать с готового набора слов, а потом добавлять только то, что действительно пригодится.",
        },
      ],
    },
    flow: {
      eyebrow: "Как это работает",
      title: "Простой путь от нового слова к запоминанию.",
      body: "Добавьте слово, повторите его в нужный момент, закрепите упражнением и вернитесь завтра.",
      steps: [
        {
          label: "01",
          title: "Добавляйте нужные слова",
          description: "Записывайте слова и фразы вручную, берите их из коллекций или сохраняйте из подкастов.",
          bullets: ["Слова и фразы", "Перевод и заметки", "Коллекции и PodCat"],
          screenshot: {
            fileName: "03-word-editor.jpg",
            title: "Редактор слова",
            caption: "Карточка может быть простой или подробной - как вам удобно.",
          },
        },
        {
          label: "02",
          title: "Раскладывайте словарь по темам",
          description: "Создавайте группы для работы, поездок, книг, учёбы или любых других тем. Когда слов станет больше, помогут поиск и фильтры.",
          bullets: ["Группы", "Поиск", "Фильтры"],
          screenshot: {
            fileName: "02-dictionary.jpg",
            title: "Словарь",
            caption: "Слова остаются под рукой и не теряются в длинном списке.",
          },
        },
        {
          label: "03",
          title: "Повторяйте вовремя",
          description: "Если слово вспоминается с трудом, оно вернётся раньше. Если легко - позже. Так повторения подстраиваются под вашу память.",
          bullets: ["Again / Hard / Good / Easy", "Личное расписание", "Отдельная практика"],
          screenshot: {
            fileName: "05-flashcards-grade.jpg",
            title: "Оценка карточки",
            caption: "Одна оценка помогает выбрать следующее повторение.",
          },
        },
        {
          label: "04",
          title: "Закрепляйте через написание и аудио",
          description: "Тренируйте написание, повторяйте карточки без изменения расписания или слушайте слова вслух.",
          bullets: ["Игра со словами", "Карточки", "Аудио"],
          screenshot: {
            fileName: "06-practice-modes.jpg",
            title: "Режимы практики",
            caption: "Можно выбрать короткую тренировку под настроение и время.",
          },
        },
        {
          label: "05",
          title: "Следите за движением",
          description: "Статистика показывает, сколько вы повторяли, как держится привычка и что скоро появится снова.",
          bullets: ["Активные дни", "Повторения", "Ближайшие слова"],
          screenshot: {
            fileName: "08-statistics.jpg",
            title: "Статистика",
            caption: "Прогресс виден, но не превращается в гонку.",
          },
        },
      ],
    },
    podcat: {
      eyebrow: "PodCat",
      title: "Сохраняйте фразы из подкастов в словарь.",
      body: "В PodCat можно слушать подкаст, читать расшифровку и сохранять полезные фразы. Потом они становятся обычными карточками LinguaCat.",
      items: [
        {
          icon: "🎧",
          title: "Подкасты для практики",
          description: "Ищите подкасты для практики, сохраняйте интересные и возвращайтесь к последнему эпизоду.",
        },
        {
          icon: "📝",
          title: "Расшифровка на устройстве",
          description: "После загрузки модели расшифровка работает локально. Скорость зависит от устройства и выбранного качества.",
        },
        {
          icon: "⭐",
          title: "Сохранённые фразы",
          description: "Выделяйте фразу, добавляйте перевод и переносите её в словарь для повторения.",
        },
      ],
      screenshot: {
        fileName: "11-podcat-transcription.jpg",
        title: "Транскрипция PodCat",
        caption: "Слушайте выпуск, следите за текстом и сохраняйте выражения.",
      },
    },
    ownership: {
      eyebrow: "Данные",
      title: "Можно учиться без аккаунта.",
      body: "Основной словарь хранится на устройстве. Аккаунт нужен только для функций вроде синхронизации и платных возможностей.",
      items: [
        {
          icon: "📱",
          title: "Словарь на устройстве",
          description: "Слова и упражнения доступны без обязательной регистрации.",
        },
        {
          icon: "📦",
          title: "Экспорт и импорт",
          description: "Словарь можно сохранить в читаемый файл и восстановить позже.",
        },
        {
          icon: "🔐",
          title: "Синхронизация по желанию",
          description: "Premium помогает переносить словарь и прогресс между устройствами.",
        },
      ],
    },
    desktop: {
      eyebrow: "Desktop helper",
      title: "Обслуживайте большой словарь с клавиатуры.",
      body: "LinguaCat Desktop - сфокусированный companion для синхронизированного словаря: поиск, фильтры, добавление, редактирование и чистка слов на большом экране.",
      screenshot: {
        fileName: "10-desktop-dictionary.png",
        title: "LinguaCat Desktop",
        caption: "Утилита для обслуживания синхронизированной лексики, не замена мобильных learning modes.",
        variant: "desktop",
      },
    },
    premium: {
      eyebrow: "Free и Premium",
      title: "Начать можно бесплатно и без аккаунта.",
      body: "Бесплатной версии достаточно, чтобы вести словарь и повторять слова. Premium добавляет синхронизацию и дополнительные возможности.",
      freeTitle: "Free",
      premiumTitle: "Premium",
      freeItems: ["Личный словарь", "Карточки и упражнения", "До 3 своих групп", "Экспорт и импорт словаря"],
      premiumItems: ["Синхронизация между устройствами", "Больше групп", "Фоновое аудио", "Доступ к PodCat"],
    },
    closing: {
      title: "Спокойный способ пополнять словарь.",
      body: "LinguaCat помогает сохранять нужные слова, повторять их вовремя и возвращаться к практике без лишнего шума.",
    },
  },
};

const phoneScreenshotWidth = 272;
const phoneScreenshotHeight = 611;

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const params = new URLSearchParams(window.location.search);
  const queryLocale = params.get("lang");
  if (queryLocale === "ru" || queryLocale === "en") {
    return queryLocale;
  }

  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

function ScreenshotCard({ screenshot, elevated = false }: { screenshot: Screenshot; elevated?: boolean }) {
  const [hasError, setHasError] = useState(false);
  const src = `/linguacat/screenshots/${screenshot.fileName}`;
  const isDesktop = screenshot.variant === "desktop";
  const width = isDesktop ? 640 : phoneScreenshotWidth;
  const height = isDesktop ? 400 : phoneScreenshotHeight;

  return (
    <figure
      className={[
        "mx-auto overflow-hidden rounded-lg border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)]",
        elevated ? "shadow-2xl shadow-blue-200/50" : "shadow-xl shadow-blue-100/45",
      ].join(" ")}
      style={{ width: "min(100%, var(--shot-width))", ["--shot-width" as string]: `${width}px` }}
    >
      <div
        className="bg-[var(--lc-surface-variant)]"
        style={{
          aspectRatio: `${width} / ${height}`,
          width: "100%",
        }}
      >
        {hasError ? (
          <div className="flex h-full items-center justify-center p-5 text-center">
            <div className="text-2xl font-bold text-[var(--lc-text-muted)]">LinguaCat</div>
          </div>
        ) : (
          <img
            src={src}
            alt={screenshot.title}
            className="block h-full w-full object-contain"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <figcaption className="space-y-1.5 border-t border-[var(--lc-surface-variant)] p-4">
        <h3 className="text-sm font-semibold text-[var(--lc-text)]">{screenshot.title}</h3>
        <p className="text-xs leading-5 text-[var(--lc-text-muted)]">{screenshot.caption}</p>
      </figcaption>
    </figure>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="rounded-lg border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)] p-5 shadow-sm shadow-blue-100/50">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--lc-surface-variant)] text-2xl leading-none" aria-hidden="true">
        {feature.icon}
      </div>
      <h3 className="mt-5 text-base font-semibold text-[var(--lc-text)]">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--lc-text-muted)]">{feature.description}</p>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--lc-teal)]">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--lc-text)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-[var(--lc-text-muted)]">{body}</p> : null}
    </div>
  );
}

function StepBlock({ step, index }: { step: Step; index: number }) {
  const imageFirst = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 rounded-lg border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)] p-5 shadow-sm shadow-blue-100/50 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(272px,360px)] lg:gap-12">
      <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
        <ScreenshotCard screenshot={step.screenshot} />
      </div>

      <div className={["min-w-0", imageFirst ? "lg:order-2" : "lg:order-1"].join(" ")}>
        <div className="text-sm font-semibold text-[var(--lc-primary)]">{step.label}</div>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--lc-text)] sm:text-3xl">{step.title}</h3>
        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--lc-text-muted)]">{step.description}</p>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--lc-text)] sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {step.bullets.map((bullet) => (
            <li key={bullet} className="rounded-lg border border-[var(--lc-surface-variant)] bg-[var(--lc-background)] px-4 py-3">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
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
    <div className="flex items-center gap-2 rounded-full border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)] p-1 text-sm shadow-sm" aria-label={label}>
      {(["en", "ru"] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          className={[
            "min-w-11 rounded-full px-3 py-1.5 font-semibold transition",
            locale === item ? "bg-[var(--lc-primary)] text-white" : "text-[var(--lc-text-muted)] hover:bg-[var(--lc-surface-variant)] hover:text-[var(--lc-text)]",
          ].join(" ")}
          onClick={() => setLocale(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function LinguaCatPage() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const page = content[locale];
  const navTargets = useMemo(
    () => ["features", "flow", "podcat", "data", "premium"].map((id, index) => ({ id, label: page.nav[index] })),
    [page.nav],
  );

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
      className="min-h-screen overflow-hidden bg-[var(--lc-background)] text-[var(--lc-text)]"
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
      <header className="sticky top-0 z-30 border-b border-[var(--lc-surface-variant)] bg-white/88 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-2 text-base font-bold tracking-wide text-[var(--lc-text)]">
            <img src="/linguacat/happy_cat.png" alt="" className="h-9 w-9 rounded-lg shadow-sm" />
            <span className="truncate">LinguaCat</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-[var(--lc-text-muted)] md:flex">
            {navTargets.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-[var(--lc-primary)]">
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageToggle locale={locale} setLocale={setLocale} label={page.languageLabel} />
        </div>
      </header>

      <section id="top" className="border-b border-[var(--lc-surface-variant)] px-5 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(272px,360px)] lg:gap-16">
          <div className="order-2 lg:order-2">
            <ScreenshotCard screenshot={page.hero.screenshot} elevated />
          </div>

          <div className="order-1 lg:order-1">
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--lc-teal)]">
              {page.hero.eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.06] text-[var(--lc-text)] sm:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-[var(--lc-text)] sm:text-2xl sm:leading-9">
              {page.hero.lead}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--lc-text-muted)]">{page.hero.body}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#flow"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--lc-primary)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200/70 hover:bg-[#1f86ef]"
              >
                {page.hero.primaryCta}
              </a>
              <a
                href="#podcat"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--lc-primary)] bg-[var(--lc-surface)] px-5 py-3 text-sm font-bold text-[var(--lc-primary)] hover:bg-[#EAF6FF]"
              >
                {page.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-[var(--lc-text)] sm:grid-cols-3">
              {page.hero.highlights.map((highlight) => (
                <div key={highlight} className="rounded-lg border border-[var(--lc-surface-variant)] bg-[var(--lc-surface)] px-4 py-3 shadow-sm">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow={page.features.eyebrow} title={page.features.title} body={page.features.body} />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.features.items.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="border-y border-[var(--lc-surface-variant)] bg-[#EAF6FF] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow={page.flow.eyebrow} title={page.flow.title} body={page.flow.body} />

          <div className="mt-10 space-y-8">
            {page.flow.steps.map((step, index) => (
              <StepBlock key={step.label} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="podcat" className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(272px,360px)] lg:gap-14">
          <div>
            <SectionHeader eyebrow={page.podcat.eyebrow} title={page.podcat.title} body={page.podcat.body} />
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {page.podcat.items.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
          <ScreenshotCard screenshot={page.podcat.screenshot} elevated />
        </div>
      </section>

      <section id="data" className="border-y border-[var(--lc-surface-variant)] bg-[#FFF8EA] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow={page.ownership.eyebrow} title={page.ownership.title} body={page.ownership.body} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.ownership.items.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="premium" className="border-y border-[var(--lc-surface-variant)] bg-[#EAF6FF] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow={page.premium.eyebrow} title={page.premium.title} body={page.premium.body} />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { title: page.premium.freeTitle, items: page.premium.freeItems, tone: "border-[var(--lc-secondary)]" },
              { title: page.premium.premiumTitle, items: page.premium.premiumItems, tone: "border-[var(--lc-primary)]" },
            ].map((tier) => (
              <article key={tier.title} className={`rounded-lg border ${tier.tone} bg-[var(--lc-surface)] p-6 shadow-sm shadow-blue-100/50`}>
                <h3 className="text-2xl font-bold text-[var(--lc-text)]">{tier.title}</h3>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--lc-text-muted)]">
                  {tier.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lc-primary)]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <img src="/linguacat/happy_logo_outline.png" alt="" className="mx-auto mb-6 h-16 w-16" />
          <h2 className="text-3xl font-bold leading-tight text-[var(--lc-text)] sm:text-4xl">{page.closing.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--lc-text-muted)]">{page.closing.body}</p>
        </div>
      </section>
    </main>
  );
}
