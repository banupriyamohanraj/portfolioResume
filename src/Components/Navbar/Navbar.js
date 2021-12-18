import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'

function Navbar() {
  return (
     <nav className='navbar fixed-top navbar-expand-md '>
    <div className="container-fluid header">
            <div className="header__left">
        Banu
            </div>
            <div className="header__right">
          
               <Link to="about" smooth={true} duration={1000} activeClass="active" offset={-70} >
                    <h4>ABOUT</h4>
                </Link>
              <Link to="resume" smooth={true} duration={1000}  offset={-100} >
              <h4>RESUME</h4>
                  </Link>
                <Link to="skills" smooth={true} duration={1000}  offset={-100} >
                   <h4> SKILLS</h4>
                </Link>
                <Link to="projects" smooth={true} duration={1000}  offset={-100}>
                   <h4> PROJECTS</h4>
                </Link>
                <Link to="contact" smooth={true} duration={500}  offset={-100}>
                   <h4> CONTACT</h4>
                </Link>
            
            </div>
        </div>
        </nav>
      
   
    
 
    




  )
}

export default Navbar
