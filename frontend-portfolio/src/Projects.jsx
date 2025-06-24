import React from "react";
import Project_Images from "./Project_Image";
import ImageSlider from "./Project_Image";
import metamask from './assets/metamask1.jpg'
import hackathon from './assets/hackathon.jpg'
import './projects.css'
import Project2_Image from "./Project2_Image";

const Projects=()=>{
    const Project_View=(link)=>{
        window.open(link)
    }
    return(
        <div id="projects" style={{marginTop:"130px"}}>
            <p style={{color:"cyan",fontSize:"25px",textAlign:"center",textDecoration:"underline"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >Projects</p>
            <br />
            <br />
            <div className="container">
               <div className="row">

                <div className="col-lg-5 col-xs-12 d-flex justify-content-center align-items-center">
                    <img src={metamask} alt="" height={300} width={300} style={{borderRadius:"20px"}}  data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"/>
                </div>

                <div className="col cols-xs-12">
                    <p style={{color:"cyan",fontSize:"20px"}} className="d-flex justify-content-sm-center justify-content-lg-start align-items-center para" data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >Online Banking Application Using Blockchain</p>
                    <p style={{color:"white",textAlign:"justify"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >A Banking Application using the MERN Stack integratedwith Blockchain provides secure and transparent banking services.Itenables efficient account management, fund transfers, and real-timetracking with enhanced security.Banking Application using the MERN Stack integratedwith Blockchain provides secure and transparent banking services.Itenables efficient account management, fund transfers, and real-timetracking with enhanced security.</p>

                  <div data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >
                    <button className="btn" style={{background:"linear-gradient(90deg, rgba(29,48,144,1) 12%, rgba(154,139,195,1) 46%, rgba(21,48,114,1) 94%, rgba(27,52,113,1) 100%)",color:"white"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" onClick={()=>{Project_View("https://app-front-jj3j.onrender.com")}} >View Project</button>
                  </div>
         
                </div>

               </div>
            </div>
            <br />
            <br />
             <br />
             <br />
             <p style={{color:"cyan",fontSize:"20px",textAlign:"center",textDecoration:"underline"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >Project Images</p>
             <br />
             <ImageSlider/>
             <br />
             <br />
             <br />
             <div className="container">
               <div className="row">

                <div className="col-lg-5 col-xs-12 d-flex justify-content-center align-items-center">
                    <img src={hackathon} alt="" height={300} width={300} style={{borderRadius:"20px"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" />
                </div>

                <div className="col cols-xs-12">
                    <p style={{color:"cyan",fontSize:"20px"}} className="d-flex justify-content-sm-center justify-content-lg-start align-items-center para" data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">Online HackThon Event Management Website</p>
                    <p style={{color:"white",textAlign:"justify"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">Our website's core feature is a comprehensive hackathon registration system designed to streamline the process for participants and organizers. Users can create and manage teams, register their problem statements, and collaborate seamlessly. The platform also enables admins to add and manage events for both software and hardware hackathons, ensuring smooth event coordination. With an intuitive interface and efficient workflow, the system enhances the hackathon experience, making it easier for innovators to participate and showcase their solutions.</p>
               
               <div data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >
                    <button className="btn" style={{background:"linear-gradient(90deg, rgba(29,48,144,1) 12%, rgba(154,139,195,1) 46%, rgba(21,48,114,1) 94%, rgba(27,52,113,1) 100%)",color:"white"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"  onClick={()=>{Project_View("https://event-management-frontend-itab.onrender.com/")}}>View Project</button>
                  </div>
               
                </div>

               </div>
            </div>
             
             <br />
             <br />
             <br />
             <br />
            
            <p style={{color:"cyan",fontSize:"20px",textAlign:"center",textDecoration:"underline"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">Project Images</p>
             <Project2_Image/>
             
        </div>
    )
}
export default Projects;