import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Typing from "./Typing";
import Button from "./Resume";
const Home=()=>{
    return(
    <div>
        <div>
      <nav className="navbar navbar-expand-sm" style={{background: "linear-gradient(90deg, rgba(1,0,21,1) 0%, rgba(7,6,40,1) 9%, rgba(21,21,113,1) 53%, rgba(0,7,8,1) 100%)"}}  >
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand text-white " href="#" style={{}} data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1500" data-aos-offset="200">DHIWAKAR G K</a>
          
          <ul className="nav d-none d-md-flex">
            {/* <li className="nav-item" ><a className="nav-link text-white" href="#"   data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">HOME</a></li> */}
            <li className="nav-item"><a className="nav-link text-white " href="#"  data-aos="zoom-in" data-aos-delay="70"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out" onClick={(e)=>{ e.preventDefault() 
      document.getElementById("about").scrollIntoView({behavior:'smooth'})
     }}>ABOUT ME</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#"  data-aos="zoom-in" data-aos-delay="80"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out" onClick={(e)=>{e.preventDefault() 
      document.getElementById("skills").scrollIntoView({behavior:'smooth'})
    }}>SKILLS</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#"  data-aos="zoom-in" data-aos-delay="80"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out" onClick={(e)=>{e.preventDefault() 
      document.getElementById("projects").scrollIntoView({behavior:'smooth'})
    }} >PROJECTS</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#"   data-aos="zoom-in" data-aos-delay="90"
    data-aos-duration="1700"
    data-aos-easing="ease-in-out" onClick={(e)=>{e.preventDefault()
      document.getElementById("contact").scrollIntoView({behavior:'smooth'})
    }}>CONTACT ME</a></li>
          </ul>

          <button className="btn d-md-none bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
          <span className="navbar-toggler-icon" ></span>
          </button>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{width:"300px",background: "linear-gradient(90deg, rgba(1,0,21,1) 0%, rgba(7,6,40,1) 9%, rgba(21,21,113,1) 53%, rgba(0,7,8,1) 100%)"}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-center" id="offcanvasRightLabel"></h5>
          <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <p className="text-center mb-5" style={{fontSize:"20px",color:'white'}}>DHIWAKAR G K</p>
            <div className="d-flex flex-column justify-content-center align-items-center">
           {/*  <li className="nav-item mb-5" style={{listStyleType:"none"}}><a className="nav-link text-white" href="#">HOME</a></li> */}
            <li className="nav-item mb-5" style={{listStyleType:"none"}}><a className="nav-link text-white " href="#" onClick={(e)=>{e.preventDefault()
              document.getElementById("about").scrollIntoView({behavior:'smooth'})
            }} >ABOUT ME</a></li>
            <li className="nav-item mb-5" style={{listStyleType:"none"}}><a className="nav-link text-white" href="#" onClick={(e)=>{e.preventDefault()
              document.getElementById("skills").scrollIntoView({behavior:'smooth'})
            }}>PROJECTS</a></li>
            <li className="nav-item mb-5" style={{listStyleType:"none"}}><a className="nav-link text-white" href="#" onClick={(e)=>{e.preventDefault()
              document.getElementById("projects").scrollIntoView({behavior:'smooth'})
            }} >PROJECTS</a></li>
            <li className="nav-item mb-5" style={{listStyleType:"none"}}><a className="nav-link text-white" href="#" onClick={(e)=>{e.preventDefault()
              document.getElementById("contact").scrollIntoView({behavior:'smooth'})
            }} >CONTACT ME</a></li>
            </div>
        </div>
      </div>
    </div>
    
    <div className="mt-5"></div>
    <Typing/>
  
    </div>

    
        
    )
}
export default Home;