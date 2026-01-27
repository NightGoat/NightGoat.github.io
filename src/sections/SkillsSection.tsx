import { skills } from "../data/skills";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const levelStyle: Record<string, string> = {
  expert: "bg-accent text-white",
  advanced: "bg-white/20 text-white",
  intermediate: "bg-white/10 text-white/70",
};

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mt-24">
      <h2 className="text-3xl font-bold mb-12">{t("skills.title")}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={group.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-white/10 p-6 space-y-4"
          >
            <h3 className="font-semibold">{t(group.titleKey)}</h3>

            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between"
                >
                  <span>{skill.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${levelStyle[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
