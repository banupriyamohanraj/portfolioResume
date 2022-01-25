import "./Project.css";
import { Element } from "react-scroll";
import React from "react";
import Cloud from "../Image/cloud.png";
import Ecomm from "../Image/E-comm.png";
import Recipe from "../Image/receipe.png"
import url from "../Image/urlshortener.png";
import Videochat from "../Image/videochat.png"
import invoice from "../Image/Invoicegenerator.png";

function Project() {
  let Project_Data = [
    {
      url: "https://cakes-site.netlify.app/",
      title: "E-commerce site",
      img: Ecomm,
      githublinkfe: "https://github.com/banupriyamohanraj/cake-site",
      githublinkbe: "https://github.com/banupriyamohanraj/jpcakes-backend",
      path: "/ecomm",
    },
    {
      url: "https://cloudapp-mern.netlify.app",
      title: "Cloud App ",
      img: Cloud,
      githublinkfe: "https://github.com/banupriyamohanraj/cloudapp",
      githublinkbe:"https://github.com/banupriyamohanraj/nodejs_RestAPI",
      path: "/cloud",
    },
    {
      url: "https://invoice-fe.netlify.app",
      title: "Invoice Generator app",
      img: invoice,
      githublinkfe: "https://github.com/banupriyamohanraj/invoice-fe",
      githublinkbe : "https://github.com/banupriyamohanraj/invoice-backend",
      path: "/invoice",
    },
    {
      url: "https://recipe-task-promise.netlify.app/",
      title: "Recipe app",
      img: Recipe,
      githublinkfe: "https://github.com/banupriyamohanraj/recipe-task",

      path: "/invoice",
      
    },
    {
      url: "https://urlshortener-fe.netlify.app",
      title: "url shortener app",
      img: url,
      githublinkfe: "https://github.com/banupriyamohanraj/urlShortener-FE",
      githublinkbe: "https://github.com/banupriyamohanraj/urlShortener-BE",
      path: "/url",
    },
    {
      url: "https://web-videochat-app.netlify.app/",
      title: "videochat app",
      img: Videochat,
      githublinkfe: "https://github.com/banupriyamohanraj/videochatapp-be",
      githublinkbe: "https://github.com/banupriyamohanraj/videochatapp-be",
      path: "/url",
    },
    
  ];

  return (
    <Element name="projects">
      <div className="Project__Container">
        <div class="diagonal-box">
          <div class="content">
            <h1>PROJECTS</h1>

            <div className="container-fluid">
              <div className="row projectrow m-0">
                {Project_Data.map((obj) => {
                  return (
                    <div className="col-md-2 col-lg-4 col-sm-1 ">
                      <div class="col  mb-4">
                        <div class="card  projectcard shadow">
                          <img src={obj.img} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">{obj.title}</h5>
                            <br />
                            <p class="card-text ">
                              <a
                                href={obj.githublinkfe}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "white" }}
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-dark "
                                  id="linkbutton"
                                >
                                  Frontend{" "}
                                  <i
                                    class="fa fa-github"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </a>
                              <a
                                href={obj.githublinkbe}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "white" }}
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-dark"
                                  id="linkbutton"
                                >
                                  Backend{" "}
                                  <i
                                    class="fa fa-github"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </a>
                          
                              <a
                                href={obj.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "white" }}
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-dark"
                                  id="linkbutton"
                                >
                                  Demo{" "}
                                  <i class="fa fa-eye" aria-hidden="true"></i>
                                </button>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                  //    return   <div className="col-4  ">
                  //    <div className="card projectcard ml-4 mb-3 shadow  mb-4 bg-black rounded">
                  //    <img src={obj.img} alt={obj.title}></img>
                  //      <div className="card-body p-1">
                  //         <p style={{textAlign:"center"}}>{obj.title}</p>
                  //      </div>
                  //    </div>
                  //  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Project;
