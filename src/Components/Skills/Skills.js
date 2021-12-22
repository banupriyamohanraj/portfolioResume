import "./Skills.css";
import React from "react";

import { Element } from 'react-scroll'

function Skills() {
  return (<Element name="skills">
    <div className="Skillcontainer_skillset">
    
        {" "}
        <h1>SKILLS</h1>
     
        <div className="row Skillcontainer_skillicon  m-0">
          <div className="skill">
            <img
              src="https://img.icons8.com/color/79/000000/html-5--v1.png"
              alt=""
            />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/color/79/000000/css3.png" alt="" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img
              src="https://img.icons8.com/color/79/000000/javascript--v2.png"
              alt=""
            />
            <p>javascript</p>
          </div>
          <div className="skill">
            <img
              src="https://img.icons8.com/color/79/000000/c-plus-plus-logo.png"
              alt=""
            />
            <p>C++</p>
          </div>

          <div className="skill">
            <img
              src="https://img.icons8.com/color/79/000000/react-native.png"
              alt=""
            />
            <p>React</p>
          </div>
          <div className="skill">
          <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/79/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt=""/>
          <p>Netlify</p>
          </div>
          </div>
          <div className="row Skillcontainer_skillicon1 m-0">

          <div className="skill">
            <img
              src="https://img.icons8.com/color/79/000000/nodejs.png"
              alt=""
            />
            <p>Nodejs</p>
          </div>

          <div className="skill">
            <img
              src="https://img.icons8.com/color/79/000000/bootstrap.png"
              alt=""
            />
            <p>Bootstrap</p>
          </div>
          <div className="skill">
            <img
              src="https://img.icons8.com/color/82/000000/mongodb.png"
              alt=""
            />
            <p>Mongo DB</p>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/color/79/000000/sql.png" alt="" />
            <p>My SQl</p>
          </div>
          <div className="skill">
          <img src="https://img.icons8.com/color/79/000000/heroku.png" alt="" />
          <p>Heroku</p>
          </div>
          <div className="skill">
            <img src="https://img.icons8.com/color/79/000000/git.png" alt="" />
            <p>Git</p>
          </div>
         
        </div>
  

   
    </div>
    </Element>
  );
}

export default Skills;
