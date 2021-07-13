import React, { useState } from "react";
import Project from "../Project/Project";
import dinner from "../../images/whatsfordinner.png";
import budget from "../../images/budgettracker.png"
import note from "../../images/notetaker.png";
import passwordgen from "../../images/passwordgenerator.png";
import scheduler from "../../images/superscheduler.png";
import weather from "../../images/wonderfulweather.png";
import proTeam from '../../images/pro-team.png'


function Portfolio() {
  const [dummyData, setDummyData] = useState([
    {
      description: "project1",
      title: "Pro-Team",
      image:  proTeam,
      gitHubLink: "https://github.com/Xunaxidonita/Pro-Team",
      projectLink: "http://agile-shore-63107.herokuapp.com/",
    },

    {
      description: "project2",
      title: "What's for Dinner?",
      image:  dinner,
      gitHubLink: "https://github.com/Xunaxidonita/Whats_for_dinner",
      projectLink: "https://infinite-citadel-40199.herokuapp.com/",
    },

    {
      description: "project3",
      title: "Budget Tracker",
      image: budget,
      gitHubLink: "https://github.com/jessicap5159/budget-tracker",
      projectLink: "https://ancient-island-34751.herokuapp.com/"
    },
    {
      description: "project4",
      title: "Note Taker",
      image: note,
      gitHubLink: "https://github.com/jessicap5159/note-taker",
      projectLink: "https://infinite-plains-29071.herokuapp.com/"
    },
    {
      description: "project5",
      title: "Password Generator",
      image: passwordgen,
      gitHubLink: "https://github.com/jessicap5159/awesome-password-generator",
      projectLink: "https://jessicap5159.github.io/awesome-password-generator/"
    },

    {
      description: "project6",
      title: "Super Scheduler",
      image: scheduler,
      gitHubLink: "https://github.com/jessicap5159/superscheduler",
      projectLink: "https://jessicap5159.github.io/superscheduler/"
    },

    {
      description: "project7",
      title: "Wonderful Weather App",
      image: weather,
      gitHubLink: "https://github.com/jessicap5159/wonderfulweatherapp",
      projectLink: "https://jessicap5159.github.io/wonderfulweatherapp/"
    },
  ]);
  return (
    <section>
      <div>
        <h1 className="fancy-header">Portfolio</h1>
        <p className="portfolio-text">Click the image to open the app</p>
      </div>
      {dummyData.map(({ title, image, gitHubLink, projectLink }) => (
        <Project
        
          title={title}
          image={image}
          gitHubLink={gitHubLink}
          projectLink={projectLink}
        />
      ))}
    </section>
  );
}

export default Portfolio;
