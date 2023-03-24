import React,{useState} from 'react'
import '../styles/experience.css'
import logo from '../assets/logo.png'
import Aos from "aos"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import "aos/dist/aos.css"
function Experience() {
useState(()=>{
Aos.init({duration:1500})
},[])

  return (
    <div id='experience' className='experience'>
    
    <h1 data-aos="fade-out" className='text-center text-orange-400 font-bold text-5xl pb-14'><span id='ed'><FontAwesomeIcon icon={faFile} /></span> Experience</h1>
    <div className="internship flex justify-center">

        <div data-aos="fade-in" className="img">
          <img className = "rounded-2xl" src={logo} alt="Image not found in your browser" />
        </div>

        <div data-aos = "fade-in" className="content1 justify-center pl-10">
          <h1 className='justify-center text-blue-300 font-serif font-semibold text-2xl mb-3'>Rise Retail and Payment Solution Pvt. Ltd.</h1>
          <a href="https://drive.google.com/file/d/13KrfW8t65oZAb2DXxB0vG_zhSIgehIMI/view?usp=sharing" target="blank" className='text-green-200 hover:underline'>Web Developer Intern</a>
          <p className="text-gray-500">July 2022 - September 2022</p>
          <br />
          <p className='text-gray-300'>
            <li>Work as a Full Stack Web Developer </li>
          <li>Build Several Web Pages using PHP as a backend language</li>
          <li>Used MySQL as a database to store data</li>
          </p>

          <p></p>
        </div>

    </div>
    
    </div>
  )
}

export default Experience