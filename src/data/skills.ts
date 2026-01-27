export type SkillLevel = "expert" | "advanced" | "intermediate";

export type SkillGroup = {
  titleKey: string;
  skills: {
    name: string;
    level: SkillLevel;
  }[];
};

export const skills: SkillGroup[] = [
  {
    titleKey: "skills.leadership",
    skills: [
      { name: "Engineering Leadership", level: "advanced" },
      { name: "Team Management", level: "advanced" },
      { name: "Mentoring & Feedback", level: "advanced" },
      { name: "Delivery & Planning", level: "advanced" },
      { name: "Cross-functional Collaboration", level: "advanced" },
    ],
  },
  {
    titleKey: "skills.mobile",
    skills: [
      { name: "Kotlin", level: "expert" },
      { name: "Kotlin Multiplatform", level: "advanced" },
      { name: "Android SDK", level: "expert" },
      { name: "Jetpack Compose", level: "advanced" },
      { name: "Swift", level: "intermediate" },
      { name: "SwiftUI", level: "intermediate" },
    ],
  },
  {
    titleKey: "skills.architecture",
    skills: [
      { name: "Mobile Architecture", level: "advanced" },
      { name: "MVVM / MVI", level: "advanced" },
      { name: "Redux-style State Management", level: "advanced" },
      { name: "Offline-first Applications", level: "advanced" },
      { name: "Cross-platform Architecture", level: "advanced" },
    ],
  },
  {
    titleKey: "skills.tooling",
    skills: [
      { name: "Ktor", level: "advanced" },
      { name: "REST APIs", level: "advanced" },
      { name: "IoT Integration", level: "intermediate" },
      { name: "NFC / Camera / ML Scanning", level: "intermediate" },
      { name: "CI / Code Review Practices", level: "advanced" },
    ],
  },
];
