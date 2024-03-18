import benedict from "../assets/benedict.png";
import money_manager from "../assets/money_manager.png";
import portfolio_website from "../assets/portfolio_website.png";
import a4_urbanism from "../assets/a4_urbanism.png";
import a1_piraten from "../assets/a1_piraten.png";

export const ProjectList = [
    {
        name: "Benedict",
        image: benedict,
        link: "https://github.com/liujeffery/benedict",
        description: "A bot created for Discord that utilizes speech-to-text features for streamlined user interactions. The bot supports music playback, transcription, translation, web searching, and other quality of life features. All features are available as both voice-activated and text-activated commands. Deployed using Heroku.",
        skills: ["Node.js", "Google Cloud", "Discord API", "Heroku", "Git", "Javascript"]
    },
    {
        name: "Portfolio Website",
        image: portfolio_website,
        link: "https://github.com/liujeffery/portfolio-website/tree/master",
        description: "A personal website to showcase my previous and current experiences and projects. You're on it! The website supports seamless cross-platform display by utilizing Material UI. Deployed through Github.",
        skills: ["React.js", "Material UI", "Github", "Javascript", "HTML", "CSS"]
    },
    {
        name: "Urbanism",
        image: a4_urbanism,
        link: "https://github.com/2AA4-W23/a4-urbanism-liujeffery",
        description: "A command line interface that procedurally generates an island, complete with accurate biomes, humidity, elevation, and temperature. The user can define specific properties through the command line, or have them be randomly generated. Cities are also added, with roads connecting them that are calculated using Dijkstra's algorithm. Completed as an assignment for the 2AA4 course.",
        skills: ["Apache CLI", "Mesh Generation", "Maven", "Log4j", "Java"]
    },
    {
        name: "Piraten Karpen",
        image: a1_piraten,
        link: "https://github.com/2AA4-W23/a1-liujeffery",
        description: "A command line interface that simulates games of Piraten Karpen. The program includes the option to specify strategies for each player and apply various rulesets to the simulation. Completed as an assignment for the 2AA4 course.",
        skills: ["Apache CLI", "Maven", "Log4j", "Java"]
    },
    {
        name: "Money Manager",
        image: money_manager,
        link: "https://github.com/liujeffery/Financial-Tracker/tree/main",
        description: "An application built through Java that aids in financial management. The app includes features to add individual and continuous expenses, and compiles relevant information and statistics in graphic form. Made as an internal assessment for the ISC4U7 course. ",
        skills: ["Java Swing", "Java"]
    },
]