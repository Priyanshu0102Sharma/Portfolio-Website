import React, { useEffect } from 'react'
import '../styles/education.css'
import img1 from '../assets/school.jpg'
import img2 from '../assets/college.jpeg'

import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSchool } from '@fortawesome/free-solid-svg-icons'

function Education() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'easeInOutElastic',
    })
  }, [])
  return (
    <>
      <div className='education' id='education'>
        <h1 data-aos="slide-up" className='text-5xl font-semibold text-yellow-100 text-center'><span id='ed'><FontAwesomeIcon icon={faSchool} /></span> Education</h1>
        <div className='flex justify-around edu pt-5' >

          <div data-aos="slide-up" className="schoolDiv p-9 border-solid border-2 border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110 ">
            <img src={img1} alt="" style={{ width: '25rem' }} className='m-auto pb-4' />
            <div className="SchoolwriteUp text-center">
              <h1 className='text-center'>Maharaja Agarsain Public School</h1>
              <h2 className='text-red-600'>Secondary and higher Secondary School</h2>
              <h5 className='font-semibold text-red-200'>2018-2020</h5>
              <div className="flex justify-around">
                <h5 className='font-semibold text-gray-200'>10th - 95.2%</h5>
                <h5 className='font-semibold text-gray-200'>12th - 95.8%</h5>
              </div>
            </div>
          </div>
          <div data-aos="slide-up" className="collegeDiv p-9 border-solid border-2 border-red-600 bg-slate-900 text-red-300 rounded-2xl transform transition duration-500 hover:scale-110 ">
            <img src={img2} alt="" style={{ width: '25rem' }} className='m-auto pb-4' />
            <div className=" p-4 SchoolwriteUp text-center">
              <h1 className='text-center'>Maharaja Surajmal Institute of Technology</h1>
              <h2 className='text-red-600'>B.tech in Computer Science & Engineering</h2>
              <h5 className='font-semibold text-red-200'>2020-Present</h5>

              <h5 className='font-semibold text-gray-200'>CGPA - 9.394</h5>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Education