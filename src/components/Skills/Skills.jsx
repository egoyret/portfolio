import React from "react";
import style from "./Skills.module.css";
import { GrReactjs, GrNode } from "react-icons/gr";
import {
  SiHtml5,
  SiExpress,
  SiRedux,
  SiPostgresql,
  SiJavascript,
  SiPython,
  SiDjango,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className={style.skillsContainer}>
      <div className={style.mainContainer}>
        <div className={style.boxContainer}>
          <h2>my skills</h2>
          <div className={style.boxContent}>
            <span className={style.icons}>
              <SiHtml5 />
              <p>HTML / CSS</p>
            </span>
            <span className={style.icons}>
              <SiJavascript />
              <p>Javascript</p>
            </span>
            <span className={style.icons}>
              <GrReactjs />
              <p>React</p>
            </span>
            <span className={style.icons}>
              <SiRedux />
              <p>Redux</p>
            </span>
            <span className={style.icons}>
              <GrNode />
              <p>Node JS</p>
            </span>
            <span className={style.icons}>
              <SiExpress />
              <p>Express</p>
            </span>
            <span className={style.icons}>
              <SiPostgresql />
              <p>Postgre SQL</p>
            </span>
            <span className={style.icons}>
              <SiPython />
              <p>Python</p>
            </span>
            <span className={style.icons}>
              <SiDjango />
              <p>Django</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
