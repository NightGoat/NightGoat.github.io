import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const contacts = [
  {
    key: "contact.email",
    label: "Email",
    value: "alxumeg@gmail.com",
    href: "mailto:alxumeg@gmail.com",
  },
  {
    key: "contact.github",
    label: "GitHub",
    value: "github.com/NightGoat",
    href: "https://github.com/NightGoat",
  },
  {
    key: "contact.linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/nail-asadullin",
    href: "https://www.linkedin.com/in/nail-asadullin/",
  },
  {
    key: "contact.medium",
    label: "Medium",
    value: "medium.com/@Night_Goat",
    href: "https://medium.com/@Night_Goat",
  },
];

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mt-24">
      <h2 className="text-3xl font-bold mb-8">{t("contact.title")}</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.key}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="block rounded-lg border border-white/10 p-4 hover:border-accent transition"
          >
            <div className="text-sm text-white/50">{t(contact.key)}</div>
            <div className="font-medium">{contact.value}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
