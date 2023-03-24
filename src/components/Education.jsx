import React, { useEffect } from 'react'
import '../styles/education.css'
import img1 from '../assets/school.jpg'
import img2 from '../assets/college.jpg'

import Aos from "aos"
import "aos/dist/aos.css"
import {FaSchool} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSchool } from '@fortawesome/free-solid-svg-icons'

function Education() {
useEffect(()=>{
Aos.init({duration:2000})
},[])
  return (
    <>
    <div className='education' id='education'>
    <h1 data-aos="fade-in" className='text-5xl font-semibold text-yellow-100 text-center p-4'><span id='ed'><FontAwesomeIcon icon={faSchool} /></span> Education</h1>
    <div className='cover flex justify-center'>
      <div data-aos="flip-up" className="school">
      <div className="image rounded-t-3xl">
            <img className='rounded-t-3xl transform transition duration-500 hover:scale-110' src={img1} alt="Image not availaible in your browser" />
      </div>
            <div className="content rounded-b-3xl transform transition duration-500 hover:scale-110">
              <h1 className='text-3xl font-bold text-blue-800'>Maharja Agarsain Public School</h1>
    <h2 className='text-red-600'>Secondary and higher Secondary School</h2>
    <h5 className='font-semibold text-gray-900'>2018-2020</h5>
    <div className="flex justify-around">
  <h5 className='font-semibold text-gray-900'>10th - 95.2%</h5>
  <h5 className='font-semibold text-gray-900'>12th - 95.8%</h5>
</div>
            
            </div>

            </div>
      <div data-aos= "flip-up" className="college ">
<div className="image">
<img className='rounded-t-3xl transform transition duration-500 hover:scale-110' src={img2} alt="Image not availaible" />
</div>
<div className="content rounded-b-3xl transform transition duration-500 hover:scale-110">
<h1 className="text-3xl font-bold text-blue-800">Maharaja Surajmal Institute of Technology</h1>
<h2 className="text-red-600">B.tech in Computer Science & Enginnering</h2>
<h5 className="text-gray-900 font-semibold">2020 - Present</h5>
<h5 className="text-gray-900 font-semibold">CGPA - 9.55</h5>

</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Education