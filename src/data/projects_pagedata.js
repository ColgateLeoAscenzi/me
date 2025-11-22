import { react_tag, javascript_tag, springboot_tag, typescript_tag, java_tag, python_tag, reactnative_tag, postgres_tag, wordpress_tag } from "./tags.js";
export const workProjectsData = [
    {
        title: "Raytheon Project",
        description: "Customizing Windchill PDM",
        image: "/project-resources/raytheon-cover.png",
        imageLink: "/projects/raytheon",
        tags: [java_tag, springboot_tag]
    },
    {
        title: "Contract AI",
        description: "Modern Website Redesign",
        image: "/project-resources/contract-ai-cover.png",
        imageLink: "/projects/contract-ai",
        tags: [wordpress_tag, react_tag, typescript_tag]
    },
    {
        title: "Joulebug",
        description: "Gamified ESG Application",
        image: "/project-resources/joulebug-cover.png",
        imageLink: "/projects/joulebug",
        tags: [react_tag, reactnative_tag]
    },
    {
        title: "MiLuma",
        description: "Puerto Rico Energy Portal",
        image: "/project-resources/miluma-cover.png",
        imageLink: "/projects/miluma",
        tags: [react_tag, springboot_tag, postgres_tag]
    },
]

export const personalProjectsData = [
    {
        title: "CapCurate",
        description: "AI Powered Video Clip Finder",
        image: "/project-resources/capcurate-cover.png",
        imageLink: "/projects/cap-curate",
        tags: [python_tag]
    },
    {
        title: "Raider Rumble",
        description: "ThreeJS Web Game - Colgate University",
        image: "/project-resources/raider-rumble-cover.png",
        imageLink: "/projects/raider-rumble-game",
        tags: [javascript_tag]
    },
]