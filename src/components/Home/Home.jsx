import React from "react";
import style from "./Home.module.css";
import Card from "./Card.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Resume from "../../assets/Resume Enrique Goyret 2024 EN v5.pdf";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div className={style.mainContainer}>
        <div className={style.textLeft}>
          <p>Hello, I'm</p>
          <h1>Enrique Goyret</h1>
          <p className={style.subTitle}>Full Stack Web Developer and Python software engineer</p>
          <button>
            <a href={Resume} target="_blank">
              Download Resume
            </a>
          </button>
          <div className={style.icons}>
            <a href="https://github.com/egoyret" target="_blank">
              <BsGithub />
            </a>
            <a href="https://wa.me/541140609885" target="_blank">
              <BsWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/enrique-goyret/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className={style.aside}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
