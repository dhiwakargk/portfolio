import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import react_img from "./assets/react_img.png"
import html from "./assets/html.png"
import css from "./assets/css.png"
import javascript from "./assets/javascript.png"
import bootstrap from "./assets/bootstrap.png"
import express from "./assets/express-js.png"
const Skills=()=>{
  
    return(
        <div id="skills" className="container" style={{marginTop:"200px"}}>
            <p style={{color:"cyan",textAlign:"center",fontSize:"20px",textDecoration:"underline"}}>Skills</p>
            <br />
            <br />
             <div className="row">
                <div className="col-sm-12 col-md-6">
                    <p style={{color:"white",textAlign:"center"}}  data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">Language</p>
                     <div className="d-flex flex-column justify-content-sm-between justify-content-between align-items-center">
                        <div  data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                            <p style={{color:"white"}}>C</p>
                            <ProgressBar completed={70}  width="300px" />
                        </div>
                        <br />
                        <div  data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                            <p style={{color:"white",textAlign:"start"}}>C++</p>
                            <ProgressBar completed={80}  width="300px" />
                        </div>
                        <br />
                        <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                          <p style={{color:"white",textAlign:"start"}}>JAVA</p>
                           <ProgressBar completed={80}  width="300px"  />
                        </div>
                        <br />
                        <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                          <p style={{color:"white",textAlign:"start"}}>PYTHON</p>
                           <ProgressBar completed={80}   width="300px"  />
                        </div>
                        <br />
                      
                     </div>
                </div>
                
                <div className="col-sm-12 col-md-6">
                    <p style={{color:"white",textAlign:"center"}} className=" mt-sm-5 mt-md-0" >Technology</p>
                    <div className="d-flex flex-sm-row flex-column  justify-content-around align-items-center align-content-center">
                       <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                            <p style={{color:"white",textAlign:"center"}}>HTML</p>
                            <div style={{ position: "relative", width: "100px", height: "100px" }}>
                                 <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                   <CircularProgressbar value={80}  />
                                 </div>
                           
                                 <div
                                   style={{
                                     position: "absolute",
                                     width: "80%",
                                     height: "80%",
                                     top: "10%", 
                                     left: "10%",
                                     borderRadius: "50%",
                                     overflow: "hidden",
                                   }}
                                 >
                                   <img
                                     src={html}
                                     alt="doge"
                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                   />
                                 </div>
                               </div>

                       </div>
                        <br />
                       <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                          <p style={{color:"white",textAlign:"center"}}>CSS</p>
                            <div style={{ position: "relative", width: "100px", height: "100px" }} >
                                 <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                   <CircularProgressbar value={80}   />
                                 </div>
                           
                                 <div
                                   style={{
                                     position: "absolute",
                                     width: "80%",
                                     height: "80%",
                                     top: "10%", 
                                     left: "10%",
                                     borderRadius: "50%",
                                     overflow: "hidden",
                                   }}
                                 >
                                   <img
                                     src={css}
                                     alt="doge"
                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                   />
                                 </div>
                               </div>
                       </div>
                       <br />
                       <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                            <p style={{color:"white",textAlign:"center",marginTop:"10px"}}>BOOTSTRAP</p>
                            <div style={{ position: "relative", width: "100px", height: "100px" }}>
                                 <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                   <CircularProgressbar value={80}  />
                                 </div>
                           
                                 <div
                                   style={{
                                     position: "absolute",
                                     width: "80%",
                                     height: "80%",
                                     top: "10%", 
                                     left: "10%",
                                     borderRadius: "50%",
                                     overflow: "hidden",
                                   }}
                                 >
                                   <img
                                     src={bootstrap}
                                     alt="doge"
                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                   />
                                 </div>
                                 
                               </div>

                       </div>
                    </div>
                    <br />
                    <div className="d-flex flex-sm-row flex-column  justify-content-around align-items-center align-content-center">
                       <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                            <p style={{color:"white",textAlign:"center"}}>REACT</p>
                            <div style={{ position: "relative", width: "100px", height: "100px" }}>
                                 <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                   <CircularProgressbar value={80}  />
                                 </div>
                           
                                 <div
                                   style={{
                                     position: "absolute",
                                     width: "80%",
                                     height: "80%",
                                     top: "10%", 
                                     left: "10%",
                                     borderRadius: "50%",
                                     overflow: "hidden",
                                   }}
                                 >
                                   <img
                                     src={react_img}
                                     alt="doge"
                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                   />
                                 </div>
                               </div>

                       </div>
                        <br />
                       <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                          <p style={{color:"white",textAlign:"center"}}>EXPRESS</p>
                            <div style={{ position: "relative", width: "100px", height: "100px" }} >
                                 <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                   <CircularProgressbar value={80}   />
                                 </div>
                           
                                 <div
                                   style={{
                                     position: "absolute",
                                     width: "80%",
                                     height: "80%",
                                     top: "10%", 
                                     left: "10%",
                                     borderRadius: "50%",
                                     overflow: "hidden",
                                   }}
                                 >
                                   <img
                                     src={express}
                                     alt="doge"
                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                   />
                                 </div>
                               </div>
                       </div>
                       <br />
                       <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                            <p style={{color:"white",textAlign:"center",marginTop:"10px"}}>JAVASCRIPT</p>
                            <div style={{ position: "relative", width: "100px", height: "100px" }}>
                                 <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                   <CircularProgressbar value={80}  />
                                 </div>
                           
                                 <div
                                   style={{
                                     position: "absolute",
                                     width: "80%",
                                     height: "80%",
                                     top: "10%", 
                                     left: "10%",
                                     borderRadius: "50%",
                                     overflow: "hidden",
                                   }}
                                 >
                                   <img
                                     src={javascript}
                                     alt="doge"
                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                   />
                                 </div>
                                 
                               </div>

                       </div>
                    </div>
 
                    {/* <div className="d-flex flex-sm-row flex-column  justify-content-around align-items-center align-content-center">
                       <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                            <p style={{color:"white",textAlign:"center",marginTop:"10px"}}>JAVASCRIPT</p>
                            <div style={{ position: "relative", width: "100px", height: "100px" }}>
                                 <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                                   <CircularProgressbar value={80} text={"70"}  />
                                 </div>
                           
                                 <div
                                   style={{
                                     position: "absolute",
                                     width: "80%",
                                     height: "80%",
                                     top: "10%", 
                                     left: "10%",
                                     borderRadius: "50%",
                                     overflow: "hidden",
                                   }}
                                 >
                                   <img
                                     src={javascript}
                                     alt="doge"
                                     style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                   />
                                 </div>
                                 
                               </div>

                       </div>
                       </div> */}


                </div>
             </div>
        </div>
    )
}

export default Skills;