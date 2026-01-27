import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mt-24">
      <h2 className="text-3xl font-bold mb-12">{t("projects.title")}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-white/10 p-6 space-y-4"
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold">{t(project.titleKey)}</h3>
              <span className="text-sm text-white/50">{project.period}</span>
            </div>

            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold text-white">Problem:</span>{" "}
                {t(project.problemKey)}
              </p>
              <p>
                <span className="font-semibold text-white">Action:</span>{" "}
                {t(project.actionKey)}
              </p>
              <p>
                <span className="font-semibold text-white">Result:</span>{" "}
                {t(project.resultKey)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
