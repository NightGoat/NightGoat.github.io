import { experience } from "../data/experience";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="mt-24">
      <h2 className="text-3xl font-bold mb-12">{t("experience.title")}</h2>

      <div className="relative pl-12 space-y-12">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20" />
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute left-[10px] top-1 w-3 h-3 rounded-full bg-accent" />

            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-xl font-semibold">{t(item.roleKey)}</h3>
                <span className="text-white/50">@ {item.company}</span>
              </div>

              <div className="text-sm text-white/50">{item.period}</div>

              <ul className="list-disc list-inside text-white/70 space-y-1">
                {item.descriptionKeys.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
