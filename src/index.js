import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from './ParticleBackground'
import {MdComputer} from 'react-icons/md'
import {FaUniversity,FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaBootstrap} from 'react-icons/fa'
import {SiJavascript,SiMongodb,SiPostgresql,SiGmail} from 'react-icons/si'
import Zoom from 'react-reveal/Zoom';


const App =()=>{

  return  <BrowserRouter>
          <div>
          <nav className='header'>
              <h3 className='name'>Sanyam Panchal</h3>
              <h6>sanyampanchal632000@gmail.com</h6>
              <button className='resume'>My Resume</button>

              <ul>
                <li> <button className='btn buttons'><Link to='/' className='link'>Home</Link></button> </li>
                <li> <button className='btn buttons'><Link to='/skills' className='link'>Skills</Link></button> </li>
                <li> <button className='btn buttons'><Link to='/projects' className='link'>Projects</Link></button> </li>
                <li> <button className='btn buttons'><Link to='/contact' className='link'>Contact</Link></button> </li>
              </ul>
              
         </nav>
          
          <ParticleBackground  className='bg'/>
          <ParticleBackground  className='bg'/>
          <ParticleBackground  className='bg'/>
          
          <Routes>
            <Route exact path='/' element={<Home/>}>  </Route>
            <Route path='/skills' element={<Skills/>}> </Route>
            <Route path='/projects' element={<Projects/>}>  </Route>
            <Route path='/contact' element={<Contact/>}>  </Route>
       </Routes>


        
      </div>
        </BrowserRouter>
}



const Home =()=>{
  return <div className='hello'>
            <Zoom>
            
            <h1 className='hiii'>Hiii There</h1>
            <h1 className='second'>My name is <span>Sanyam Panchal</span> and I am currently in my last year of <span>Computer Science (BSc)</span> <MdComputer/> in York University <FaUniversity/>. I am looking for full-time job relating to my education field. </h1>
                         
            </Zoom>
            
         </div>
}

const Skills =()=>{
  return <div className='third'>
            <Zoom>
              <FaHtml5 size='100' className='skills_icon' color='#f06529'/>
              <FaCss3Alt size='100' className='skills_icon' color='#2965f1'/>
              <SiJavascript size='100' className='skills_icon' color='yellow'/>
              <FaBootstrap size='100' className='skills_icon' color='#553C7B'/>
              <FaReact size='100' className='skills_icon' color='lightblue'/>
              <FaNodeJs size='100' className='skills_icon' color='green'/>
              <SiMongodb size='100' className='skills_icon' color='#3FA037'/>
              <SiPostgresql size='100' className='skills_icon' color='#0064a5'/>
            </Zoom>
         </div>
}

const Projects =()=>{
  return <div className='hello_project'>

          
            <h1><b>1) Menu: </b> <span className='project-description'> This menu is designed using React. There are four button in the website and I have used the concept of map.filter(). In all button, there are list of availble dishes whereas in breakfast button, there is list of only breakfast dishes (used concent of map.filter()). The rest of remaining button work in similar manner. Moreover, I have used CSS for making the website more attractive and responsive. This is webpage is responsive for all mobile, tablet and laptop devices.</span></h1>
            <a href='https://menu-static-webpage.netlify.app/' className='view-project'>View Project</a>


            <h1><b>2) OurTours: </b> <span className='project-description'> This is simple static webpage designed using pure React and CSS and have used dummy data for all the informations. When you press not Interested button it will be removed from the webpage and when all tours information will be removed, then it will say no Tour Left. This is responsive website which can adapt any mobile, tablet and laptop devices.</span></h1>
            <a href='https://tours-information.netlify.app/' className='view-project'>View Project</a>

            
         </div>
}

const Contact =()=>{

      const [name,setName] = React.useState();
      const [email,setEmail] = React.useState();
      const [message,setMessage] = React.useState();
      const [disable,setDisable] = React.useState(false);

      const Submit =(e)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(message)
        setDisable(true)

        /*emailjs.send("service_o9o430n","template_j143vf3",{
          Name: name,
          Email: email,
          Message:message
          });*/
          

      /* emailjs.sendForm('service_o9o430n', 'template_j143vf3', e.target, 'user_WuTYK5XSxsszYgiKYem3i')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();*/
        
      /*  let data={
          name:name,
          email:email,
          message:message
        }

        axios.post('http://localhost:3000/api/email',data)
        .then(res=>{
          console.log(name)
        })*/
             
        
      }

  return <div className='hello'>
            <Zoom>


            <h1>Contact</h1>
            <form>
              
                <h4>Name</h4>
              <textarea className='input' type='text' placeholder='Name' name ='name' required="true" onChange={(e)=>{setName(e.target.value)}}></textarea>
               <h4>E-mail</h4>
              <textarea className='input' type='text' placeholder='e-mail' name='email' required='true' onChange={(e)=>{setEmail(e.target.value)}}></textarea>
              <h4>Message</h4>
              <textarea className='textarea' placeholder='Message' name='message' required='true' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              <br/>
              <button className='send' onClick={Submit} disabled={disable}>Send</button>
           </form>


            
            </Zoom>
         </div>
}

ReactDOM.render(<App/>,document.getElementById('root'))
