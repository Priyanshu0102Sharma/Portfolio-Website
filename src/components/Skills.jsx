import React,{useEffect} from 'react'
import '../styles/skills.css'
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faSchool } from '@fortawesome/free-solid-svg-icons'


function Skills() {

  useEffect(()=>{
    Aos.init({duration:2000})
    },[])

  return (
    <div className='skills' id='skills'>
        
        <h1 data-aos ="zoom-in" className='text-blue-300 font-bold text-center text-5xl p-5'><span id='ed'><FontAwesomeIcon icon={faLaptop} /></span> SKILLS </h1>
    <div className="skillSet flex justify-center flex-wrap">

    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       
       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
             
               <h4 class="text-white mt-2">C++</h4></div>

    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       
       
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
             
               <h4 class="text-white mt-2">CSS</h4></div>

    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-5 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                       
               <h4 class="text-white mt-2">Express</h4></div>

    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                       
               <h4 class="text-white mt-2">GIT</h4></div>

    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
                       
               <h4 class="text-white mt-2">GraphQL</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                       
               <h4 class="text-white mt-2">HTML5</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                       
               <h4 class="text-white mt-2">JavaScript</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
                       
               <h4 class="text-white mt-2">JQuery</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                       
               <h4 class="text-white mt-2">Linux</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                       
               <h4 class="text-white mt-2">MongoDB</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                       
               <h4 class="text-white mt-2">MYSQL</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       


    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                                 
               <h4 class="text-white mt-2">NodeJS</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       


    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                                 
               <h4 class="text-white mt-2">PHP</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       



    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                           
               <h4 class="text-white mt-2">ReactJS</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       


    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />
                                 
               <h4 class="text-white mt-2">Socket.io</h4></div>
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       



    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                                           
               <h4 class="text-white mt-2">Tailwind</h4></div>
    
    <div data-aos="fade-in" className="skill flex flex-col justify-center items-center bg-red-600 px-4 py-2 rounded-md m-5 w-40 mdmh:w-28 smh:w-full mdm:m-2 hover:scale-110 duration-200 hover:shadow-xl">
       



    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" />
                                           
               <h4 class="text-white mt-2">Solidity</h4></div>
       
       </div>

       

    </div>
  
  )
}

export default Skills