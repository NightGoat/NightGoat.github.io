import { Layout } from "./Layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExperienceSection } from "../sections/ExperienceSection";
import { SkillsSection } from "../sections/SkillsSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ContactSection } from "../sections/ContactSection";
import { AboutSection } from "../sections/AboutSection";
import { LinguaCatPage } from "../pages/LinguaCatPage";

export function App() {
  const { t } = useTranslation();
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/linguacat") {
    return <LinguaCatPage />;
  }

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-5xl font-bold">{t("hero.name")}</h1>
        <p className="text-xl text-white/80">{t("hero.title")}</p>
        <p className="text-white/60 max-w-xl">{t("hero.subtitle")}</p>
      </motion.section>

      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <AboutSection />
    </Layout>
  );
}
