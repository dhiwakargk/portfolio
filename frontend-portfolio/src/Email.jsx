import React,{useState} from "react";

import axios from "axios";
import "./email.css"


const Email=()=>{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const [subject,setsubject]=useState("")
    const [msg,setmsg]=useState("")
    const Send_Email=async()=>
    {   
       
        const data=await axios.post("https://portfolio-backend-l65j.onrender.com/data",{name:name,email:email,phone:phone,subject:subject,msg:msg}).then(async(res)=>{
           console.log(res.data)
           if(res.data=="Mail Sended...")
           {
            alert("Mail Sended Successfully")
           }
           else 
           {
            alert("Mail not Send Error Occurs")
           }
        }).catch((err)=>{
          alert("Mail not sended")
        })
    }
    return(
        <div id="contact">
        <form  onSubmit={(e)=>{e.preventDefault() 
          Send_Email()
        }}>
        <p style={{textAlign:"center",color:"white",fontSize:"20px",marginTop:"30px"}}>Contact Me</p>
        
        <div className="container d-flex flex-column align-items-center">
        <div className="mb-3 d-flex flex-column align-items-start" style={{ width: "300px" }}>
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:"white"}}>Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={(e)=>{setname(e.target.value)}} required={true} />
        </div>
      
        <div className="mb-3 d-flex flex-column align-items-start" style={{ width: "300px" }}>
          <label htmlFor="exampleFormControlInput2" className="form-label" style={{color:"white"}}>Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} required={true} />
        </div>
      
        <div className="mb-3 d-flex flex-column align-items-start" style={{ width: "300px" }}>
          <label htmlFor="exampleFormControlInput3" className="form-label" style={{color:"white"}}>Phone</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Phone" onChange={(e)=>{setphone(e.target.value)}} required={true}/>
        </div>
      
        <div className="mb-3 d-flex flex-column align-items-start" style={{ width: "300px" }}>
          <label htmlFor="exampleFormControlInput4" className="form-label" style={{color:"white"}}>Subject</label>
          <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Subject" onChange={(e)=>{setsubject(e.target.value)}} required={true}/>
        </div>
      
        <div className="mb-3 d-flex flex-column align-items-start" style={{ width: "300px" }}>
          <label htmlFor="exampleFormControlInput5" className="form-label" style={{color:"white"}}>Message</label>
          <textarea className="form-control" id="exampleFormControlInput5" placeholder="Message" rows={3} onChange={(e)=>{setmsg(e.target.value)}} required={true} />
        </div>
        <div className="mb-3 d-flex flex-column align-items-center" style={{ width: "300px" }}>
             <button type="submit" class="btn" style={{color:"white",border:"2px solid white"}}>Submit</button>
        </div>

      </div>
      </form>
      </div>
    )
}
export default Email