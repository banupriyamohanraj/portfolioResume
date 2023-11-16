import "./Skills.css";
import React from "react";

import { Element } from "react-scroll";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMariadb } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoGraphql,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";

function Skills() {
  return (
    <Element name="skills">
      <div className="Skillcontainer_skillset">
        {" "}
        <h1>SKILLS</h1>
        <div className="row Skillcontainer_skillicon  m-0">
          <div className="skill">
            <FaHtml5 size={70} />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FaCss3 size={70} />
            <p>CSS</p>
          </div>
          <div className="skill">
            <RiJavascriptFill size={70} />
            <p>javascript</p>
          </div>

          <div className="skill">
            <FaReact size={70} />
            <p>React</p>
          </div>
          <div className="skill">
            <BiLogoTypescript size={70} />
            <p>Typescript</p>
          </div>
          <div className="skill">
            <BiLogoTailwindCss size={70} />
            <p>Tailwind</p>
          </div>
        </div>
        <div className="row Skillcontainer_skillicon1 m-0">
          <div className="skill">
            <FaNodeJs size={70} />
            <p>Nodejs</p>
          </div>

          <div className="skill">
            <SiMariadb size={70} />
            <p>Mariadb</p>
          </div>
          <div className="skill">
            <BiLogoMongodb size={70} />
            <p>Mongo DB</p>
          </div>
          <div className="skill">
            <DiMysql size={70} />
            <p>My SQl</p>
          </div>

          <div className="skill">
            <BiLogoGraphql size={70} />
            <p>GraphQL</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
