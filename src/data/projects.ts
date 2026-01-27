export type Project = {
  titleKey: string;
  period: string;
  problemKey: string;
  actionKey: string;
  resultKey: string;
};

export const projects: Project[] = [
  {
    titleKey: "projects.crossPlatform.title",
    period: "Cross-platform & IoT",
    problemKey: "projects.crossPlatform.problem",
    actionKey: "projects.crossPlatform.action",
    resultKey: "projects.crossPlatform.result",
  },
  {
    titleKey: "projects.enterprise.title",
    period: "Enterprise & Offline-first",
    problemKey: "projects.enterprise.problem",
    actionKey: "projects.enterprise.action",
    resultKey: "projects.enterprise.result",
  },
  {
    titleKey: "projects.leadership.title",
    period: "Engineering Leadership",
    problemKey: "projects.leadership.problem",
    actionKey: "projects.leadership.action",
    resultKey: "projects.leadership.result",
  },
];
