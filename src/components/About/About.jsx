import React from "react";
import style from "./About.module.css";
import Profile from "../../assets/img/fotolinkedin.png";
import ScrollToTop from "./ScrollToTop";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.mainContainer}>
        <div className={style.boxContainer}>
          <h2>about me</h2>
          <div className={style.boxContent}>
            <img src={Profile} alt="Enrique Goyret" />
            <p>I'm a web full stack developer graduated from the Henry academy in Argentina, 
              after an intensive 4 month bootcamp course, where I incorporated knowledge and 
              practice on current web technologies such as HTML5, CSS3, Javascript, NodeJS, 
              React, Redux, Express, Sequelize, and others to my prior expertise and experience 
              with IT systems. I currently work as a backend engineer using Python and Django
              which I learned on the job.<br></br>
              Recently retired from a large multinational company, I'm looking to continue in 
              the job market now as a software engineer which has always been my favorite role, 
              as it demands creativity, ingenuity, and has a direct impact in process improvement 
              and productivity. I believe my long experience dealing with systems implementations, 
              plus my educational background as an engineer student, gives me an edge that adds 
              value to my role as a developer team member and thus can contribute to the success 
              of any project. <br></br>
              I have an analytical mind and enjoy solving complex problems. I am more than willing 
              to continue my journey in the world of internet as a developer with end user criteria no 
              just as a coder. I have a preference for working with databases and as a backend 
              engineer but would not mind helping with front end work also.
            </p>
          </div>
        </div>
      </div>
      <div className={style.scrollBtn}>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default About;
