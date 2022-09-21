import React from "react";
import style from "./Card.module.css";

const Card = () => {
  const key = "{";
  return (
    <div className={style.card}>
      <div className={style.text}>
        <p>
          1&nbsp;&nbsp;class <b>Person</b> "{`${key}`}"
        </p>
        <p>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() </p>
        <p>
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "{" "}
          <b>Enrique Goyret</b>;
        </p>
        <p>
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
          <b>Developer</b>", "<b>Backend</b>"];
        </p>
        <p>
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new
          Date().getFullYear() - 1953;
        </p>
        <p>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "}"</p>
        <p>7&nbsp;&nbsp; "}"</p>
      </div>
    </div>
  );
};

const Card_EG = () => {
  return (
    <div className={style.card}>
      <div className={style.text}>
        <p>import datetime</p>
        <span>class Developer:</span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, born, title, prog_lang=None, speciality=None):</span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;self.name = name</span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;self.age = datetime.datetime.now().year - born </span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;self.title = title </span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;self.speciality = speciality </span>
        <br />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;self.prog_lang = prog_lang </span>
        <br /> <br />
        <span>dev1 = Developer("Enrique Goyret", 1953, 'Software Engineer', ["Python","Django"]) </span>        
        <br /> <br />
        <span>print(f'My name is {"{"}dev1.name{"}"}, I have a life experience of {"{"}dev1.age{"}"}years.')</span>
        <br />
        <span>print(f'I am a {"{"}dev1.title{"}"} and use programming languajes {"{"}dev1.prog_lang{"}"}')</span>
        <br /> <br />
        <p>My name is Enrique Goyret, I have a life experience of 69 years.</p>
        <p>I am a Software Engineer and use programming languajes ['Python', 'Django']</p>
      </div>
    </div>
  );
};

export default Card_EG;
