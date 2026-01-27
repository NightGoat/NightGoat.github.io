import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="mt-24">
      <h2 className="text-3xl font-bold mb-8">{t("about.title")}</h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl text-white/70 leading-relaxed"
      >
        {t("about.text")}
      </motion.p>
    </section>
  );
}
