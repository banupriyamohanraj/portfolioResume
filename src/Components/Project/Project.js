import "./Project.css";
import { Element } from "react-scroll";
import React from "react";
import Ecomm from "../Image/E-comm.png";
import Recipe from "../Image/receipe.png";
import Videochat from "../Image/videochat.png";
import expense from "../Image/expense.png";
import insta from "../Image/insta.PNG";

function Project() {
  let Project_Data = [
    {
      url: "https://instagram-clone-eight-blue.vercel.app/",
      title: "Instagram Clone app",
      img: insta,
      githublinkfe: "https://github.com/banupriyamohanraj/InstagramClone",
      path: "/insta",
    },
    {
      url: "https://cakes-site.netlify.app/",
      title: "E-commerce site",
      img: Ecomm,
      githublinkfe: "https://github.com/banupriyamohanraj/cake-site",
      githublinkbe: "https://github.com/banupriyamohanraj/jpcakes-backend",
      path: "/ecomm",
    },
    {
      url: "https://videochatapp-fe.netlify.app/",
      title: "videochat app",
      img: Videochat,
      githublinkfe: "https://github.com/banupriyamohanraj/videochatapp-fe",
      githublinkbe: "https://github.com/banupriyamohanraj/videochatapp-be",
      path: "/video",
    },

    {
      url: "https://recipe-task-promise.netlify.app/",
      title: "Recipe app",
      img: Recipe,
      githublinkfe: "https://github.com/banupriyamohanraj/recipe-task",

      path: "/receipe",
    },
    {
      url: "https://quickexpensetrackerapp.netlify.app/",
      title: "Quick Expense Tracker ",
      img: expense,
      githublinkfe:
        "https://github.com/banupriyamohanraj/expenseTracker/tree/master",
      path: "/expenseTracker",
    },
  ];

  return (
    <Element name="projects">
      <div className="Project__Container">
        <div class="diagonal-box">
          <div class="content">
            <h1>PROJECTS</h1>

            <div className="container-fluid">
              <div className="row demoaccount m-0 p-0 justify-content-center">
                <div className="card  shadow p-0">
                  <div class="card-body">
                    <h5 class="card-title">
                      <span style={{ color: "orangered" }}>Demo Account :</span>{" "}
                      banupriyamohanrajoffl@gmail.com{" "}
                      <span style={{ color: "orangered" }}>Password :</span>{" "}
                      banu{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="row projectrow m-0">
                {Project_Data.map((obj) => {
                  return (
                    <div className="col-md-1 col-lg-3 col-sm-1 mb-4 d-flex align-items-stretch">
                      <div class="card  projectcard shadow ">
                        <img src={obj.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title mb-0">{obj.title}</h5>
                          <br />
                          <p class="card-text ">
                            {obj.githublinkfe ? (
                              <a
                                href={obj.githublinkfe}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "white" }}
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-dark btn-sm"
                                  id="linkbutton"
                                >
                                  Frontend{" "}
                                  <i
                                    class="fa fa-github"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </a>
                            ) : null}
                            {obj.githublinkbe ? (
                              <a
                                href={obj.githublinkbe}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "white" }}
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-dark btn-sm"
                                  id="linkbutton"
                                >
                                  Backend{" "}
                                  <i
                                    class="fa fa-github"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </a>
                            ) : null}

                            <a
                              href={obj.url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: "white" }}
                            >
                              <button
                                type="button"
                                className="btn btn-outline-dark btn-sm"
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
                  );
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
