import benedict from "../assets/benedict.png";
import money_manager from "../assets/money_manager.png"
import portfolio_website from "../assets/portfolio_website.png"

export const ProjectList = [
    {
        name: "Benedict",
        image: benedict,
        link: "https://github.com/liujeffery/benedict",
        description: "A bot created for Discord that utilizes speech-to-text features for streamlined user interactions. The bot supports music playback, transcription, translation, web searching, and other quality of life features. All features are available as both voice-activated and text-activated commands. Built and deployed using Heroku.",
        skills: ["Node.js", "Google Cloud", "Discord API", "Heroku", "Git", "Javascript"]
    },
    {
        name: "Portfolio Website",
        image: portfolio_website,
        link: "https://github.com/liujeffery/portfolio-website/tree/master",
        description: "A personal website to showcase my previous and current experiences and projects. You're on it! The website supports seamless cross-platform display by utilizing Material UI. Built and deployed through Github.",
        skills: ["React.js", "Material UI", "Github", "Javascript", "HTML", "CSS"]
    },
    {
        name: "Money Manager",
        image: money_manager,
        link: "https://github.com/liujeffery/Financial-Tracker/tree/main",
        description: "A Java application built as an internal assessment for the ISC4U7 course, that aids in financial management. The app includes features to add individual and continuous expenses, and compiles relevant information and statistics in graphic form.",
        skills: ["Java Swing", "Java"]
    },
]