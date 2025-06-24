import { useState } from 'react'

//import './App.css'
import Home from './Home'
import About from './About'
import Skills from './Skiils'
import Projects from './Projects'
import Email from './Email'

function App() {
/* background:"linear-gradient(90deg, rgba(29,48,144,1) 12%, rgba(35,173,187,1) 52%, rgba(21,48,114,1) 94%, rgba(27,52,113,1) 100%)",height:"1000px" */
/* style={{background: "linear-gradient(90deg, rgba(1,0,21,1) 0%, rgba(7,6,40,1) 9%, rgba(21,21,113,1) 53%, rgba(0,7,8,1) 100%)",height:"auto"}}
 */  return (
     <div style={{background: "linear-gradient(90deg, rgba(1,0,21,1) 0%, rgba(7,6,40,1) 9%, rgba(21,21,113,1) 53%, rgba(0,7,8,1) 100%)",height:"auto"}}>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Email/>
        
    </div> 
    
  )
}

export default App
