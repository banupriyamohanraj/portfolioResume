import "./Project.css";
import { Element } from 'react-scroll'
import React from "react";
import Cloud from "../Image/cloud.png"
import Ecomm from "../Image/E-comm.png"
import receipe from "../Image/receipe.png"
import url from "../Image/urlshortener.png"
import invoice from "../Image/Invoicegenerator.png"


function Project() {
  let Project_Data = [
    {
      url: "https://urlshortener-fe.netlify.app",
      title: "url shortener app",
      img: url,
      githublink: "https://github.com/banupriyamohanraj/urlShortener-FE",
      path:"/url"
    },
    {
      url: "https://invoice-fe.netlify.app",
      title: "Invoice Generator app",
      img: invoice,
      githublink: "https://github.com/banupriyamohanraj/invoice-fe",
      path:"/invoice"
    },
    {
      url: "https://recipe-task-promise.netlify.app/",
      title: "Receipe search ",
      img: receipe,
      githublink: "https://github.com/banupriyamohanraj/recipe-task",
      path:"/receipe"
    },
    {
      url: "https://cloudapp-mern.netlify.app",
      title: "Cloud App ",
      img: Cloud,
      githublink: "https://github.com/banupriyamohanraj/cloudapp",
      path:"/cloud"
    },
    {
      url: "https://cakes-site.netlify.app/",
      title: "E-commerce site",
      img: Ecomm,
      githublink: "https://github.com/banupriyamohanraj/cake-site",
      path:"/ecomm"
    },
  ];

  return (<Element name="projects">
    <div className="Project__Container">
      <div class="diagonal-box">
        <div class="content">
          <h1>PROJECTS</h1>
          
          <div className="container-fluid">
            <div className="row projectrow ">
              
              {
                   Project_Data.map((obj)=>{
                     return <div className="col-md-2 col-lg-4 col-sm-1 "> 
                     
                         <div class="col  mb-4">
                             <div class="card  projectcard shadow">
                             <img src={obj.img} class="card-img-top" alt="..."  />
                                 <div class="card-body">
                                 
                                     <h5 class="card-title">{obj.title}</h5><br/>
                                     <p class="card-text" >

                                     <a href={obj.githublink} target="_blank" rel="noreferrer" style={{color:'white'}}>
                                   <button type="button" className="btn btn-outline-dark" id="linkbutton">Github <i class="fa fa-github" aria-hidden="true"></i></button> 
                  </a>
                  &emsp;
                  <a href={obj.url} target="_blank" rel="noreferrer" style={{color:'white'}}>
                                   <button type="button" className="btn btn-outline-dark" id="linkbutton">Demo <i class="fa fa-eye" aria-hidden="true"></i></button> 
                  </a>


                                     </p>
                                 </div>
                             </div>
                         </div>
                     
                     </div>
                    //    return   <div className="col-4  ">
                    //    <div className="card projectcard ml-4 mb-3 shadow  mb-4 bg-black rounded">
                    //    <img src={obj.img} alt={obj.title}></img>
                    //      <div className="card-body p-1">
                    //         <p style={{textAlign:"center"}}>{obj.title}</p>  
                    //      </div>
                    //    </div>
                    //  </div>
                   })
              }
            
            
              
         
              
            </div>
          </div>
        </div>
      </div>

    
    </div>
    </Element>
  );
}

export default Project;



