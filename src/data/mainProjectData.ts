
import {type ProjectCardProps} from "../components/projectCards"
import MigrationMotivationsImage from "../assets/project-previews/mmdt-preview.png"
import DataVisImage from "../assets/project-previews/data-vis-preview.png"
import FritterImage from "../assets/project-previews/fritter-preview.png"


export const mainProjects: Omit<ProjectCardProps, "ind">[] = [
    {
        imageLink: "",
        title: "Twofish",
        date: "2023 - 2024",
        description: "",
        route: "/projects/twofish"
    },
    {
        imageLink: MigrationMotivationsImage,
        title: "Central American Migration Interactive Data Visualization",
        date: "2023",
        description:
            "Explored the economic motives behind Central American migration to the US through the use of a scrollytelling data visualization, built using Svelte and D3.js",
        route: "/projects/migration-motivations"
    },
    {
        imageLink: DataVisImage,
        title: "Data Visualization Work",
        date: "2021 –– Present",
        description: "Some examples of other work I’ve done in the data visualization field in the last few years, from medical chart graphing and research work to exploration with Tableau, etc.",
        route: "/projects/data-vis-work"
    },
    {
        imageLink: FritterImage,
        title: "Fritter",
        date: "2022",
        description: "An independent class project that spanned a large portion of a semester, which involved going through all stages of the design thinking and was my first time using Figma.",
        route: "/projects/fritter"
    },
];