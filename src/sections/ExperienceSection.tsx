import { experience } from "../data/experience";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const { t } = useTranslation();
  const getStartYear = (period: string) => {
    const match = period.match(/\d{4}/);
    return match ? match[0] : "";
  };

  return (
    <section id="experience" className="mt-24">
      <h2 className="text-3xl font-bold mb-12">{t("experience.title")}</h2>

      <div className="space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-[4.5rem_1.5rem_1fr] gap-x-6 gap-y-2 items-start"
          >
            <div className="text-lg text-white/60 font-semibold tracking-wide tabular-nums sm:text-right sm:pr-2">
              {getStartYear(item.period)}
            </div>

            <div className="hidden sm:flex flex-col items-center self-stretch pt-1">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div
                className={`w-px bg-white/20 flex-1 mt-2 ${
                  index === experience.length - 1 ? "hidden" : ""
                }`}
              />
            </div>

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
