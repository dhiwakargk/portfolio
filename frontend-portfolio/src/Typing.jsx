import React from "react";
import {ReactTyped} from "react-typed"
import pic from "./assets/pic.png"
import './typing.css'
import ImageGlow from 'react-image-glow';
import Buttons from "./Resume";
const Typing=()=>{
    return(
        <div  className="container d-md-flex flex-row justify-content-md-around align-items-center gap-5 justify-content-sm-center">
            <div style={{marginTop:"150px"}} data-aos="zoom-in"  data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
            <ReactTyped
            strings={[
                "Hi! I Am Dhiwakar",
                "A Full Stack Developer!",
                "A BlockChain Developer!!"
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop={true}
            style={{color:"cyan",fontSize:"25px"}}
            className="type_text"
           >

           </ReactTyped>
            <p className="mt-2 text-white d-sm-flex justify-content-center align-items-center texts contents"  data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" >
               
               I specialize in building scalable and responsive web applications using modern front-end and back-end technologies
  With a passion for decentralization, I also design secure, transparent solutions using blockchain and smart contracts.
  I love turning complex ideas into clean, functional, and user-friendly digital products
              
            </p>
            <Buttons/>
            </div>

            <div className="d-flex justify-content-center  align-items-center" data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" style={{marginTop:"50px"}}>
                
                <img src={pic} alt="" style={{borderRadius:"50%"}} height={300} width={300} className="imgs"  />
                
                 
            </div>
            
           
        </div>
    )
}
export default Typing;