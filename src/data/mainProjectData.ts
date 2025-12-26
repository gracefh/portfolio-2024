import { type ProjectCardProps } from "../components/projectCards";

export const mainProjects: Omit<ProjectCardProps, "ind">[] = [
  {
    imageLink: "image/project-previews/ball-defenders.png",
    title: "Ball Defenders",
    date: "2024",
    description:
      "A small passion project, born out of both the frustration and the fun I had playing the United Airlines game of similar name on a long, international flight",
    route: "/projects/ball-defenders",
  },
  {
    imageLink: "",
    title: "Twofish",
    date: "2023 –– 2024",
    description:
      "The topic of my Master's thesis for my MEng (2023 - 2024) at MIT, Twofish explores possible ways of improving the process of editing charts. The project extends Bluefish, a visualization library built with UI frameworks in mind, and combines it with TLDraw, a whiteboard editing tool.",
    route: "/projects/twofish",
  },
  {
    imageLink: "image/project-previews/mmdt-preview.png",
    title: "Central American Migration Interactive Data Visualization",
    date: "2023",
    description:
      "Explored the economic motives behind Central American migration to the US through the use of a scrollytelling data visualization, built using Svelte and D3.js",
    route: "/projects/migration-motivations",
  },
  {
    imageLink: "image/project-previews/data-vis-preview.png",
    title: "Data Visualization Work",
    date: "2021 –– 2024",
    description:
      "Some examples of other work I’ve done in the data visualization field in the last few years, from medical chart graphing and research work to exploration with Tableau, etc.",
    route: "/projects/data-vis-work",
  },
  // {
  //     imageLink: FritterImage,
  //     title: "Fritter",
  //     date: "2022",
  //     description: "An independent class project that spanned a large portion of a semester, which involved going through all stages of the design thinking and was my first time using Figma.",
  //     route: "/projects/fritter"
  // },
];
