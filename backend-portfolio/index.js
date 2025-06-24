const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const nodemailer=require("nodemailer")
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('dotenv').config();

const port=process.env.PORT || 3000;
const userName=process.env.USER_NAME
const password=process.env.PASS_WORD
const to=process.env.TO
console.log(userName,password)
app.get("/",(req,res)=>{
    res.send("Home page")
})

app.post("/data",async(req,res)=>{
    console.log(req.body)
   var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:userName,
        pass:password
    }
   })
   var options={
    from:userName,
    to:to,
    subject:`PortFolio Contact ${req.body.subject}`,
    text:`The person name${req.body.name} has send an email , their email was ${req.body.email} and phone ${req.body.phone}
          Message is ${req.body.msg}   
         `
   }
   transport.sendMail(options,(err,info)=>{
    if (err) {
        console.log(err);
        res.send("Mail Not Send")
      }
      else 
      {
        res.send("Mail Sended...")
      }
   })
})

app.listen(port,()=>{
    console.log("Server Connected")
})