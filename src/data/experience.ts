export type ExperienceItem = {
  company: string;
  roleKey: string;
  period: string;
  descriptionKeys: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Electrolux",
    roleKey: "experience.electrolux.manager.role",
    period: "2024 — Present",
    descriptionKeys: [
      "experience.electrolux.manager.desc1",
      "experience.electrolux.manager.desc2",
      "experience.electrolux.manager.desc3",
    ],
  },
  {
    company: "Electrolux",
    roleKey: "experience.electrolux.engineer.role",
    period: "02.2022 — 2024",
    descriptionKeys: [
      "experience.electrolux.engineer.desc1",
      "experience.electrolux.engineer.desc2",
      "experience.electrolux.engineer.desc3",
    ],
  },
  {
    company: "Krit.pro",
    roleKey: "experience.krit.role",
    period: "06.2020 — 02.2022",
    descriptionKeys: [
      "experience.krit.desc1",
      "experience.krit.desc2",
      "experience.krit.desc3",
      "experience.krit.desc4",
      "experience.krit.desc5",
    ],
  },
];
