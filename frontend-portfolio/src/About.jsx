import React from "react";
import pic from "./assets/pic.png"

import person from "./assets/person1.jpg"

const About=()=>{
    
   
    return(
        <div id="about" className="container" style={{marginTop:"200px"}}>
           <div>
               <p style={{color:"cyan",fontSize:"20px",textAlign:"center",textDecoration:"underline"}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">About Me</p>
           </div>
           <div className="row">
             <div className="col d-flex align-items-center justify-content-center" data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
                <img src={person} alt=""  height={300} width={300} style={{borderRadius:"50%"}}/>
             </div>
             <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center contents" style={{color:'white'}} data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1100"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >
               I am a passionate developer with a strong interest in creating practical and secure digital solutions. I recently developed a blockchain-based banking application that ensures secure, transparent, and tamper-proof transactions, aimed at modernizing traditional banking systems. Additionally, I built a responsive event management website that allows users to create, manage, and register for events with ease. Through these projects, I’ve gained hands-on experience in both decentralized technologies and dynamic full-stack development.
             </div>
           </div>
        </div>
    )
}
export default About;