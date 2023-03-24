import React, {useEffect} from 'react'
import '../styles/about.css'
import img from '../assets/myImg.jpeg'
import Aos from "aos"
import "aos/dist/aos.css"

function About() {

  useEffect(()=>{
    Aos.init({duration:1500})
},[])
    

  return (
    <>
    
    <div className='about-me justify-center' id='about'>
      <div data-aos="fade-in" className="myImg p-5 flex justify-center">
        <img src={img} alt="Image not availaible in your browser" />
      </div>
      <div data-aos="fade-up" className="aboutMe items-center text-center p-7">
      
       <h2 className='text-3xl font-serif mt-8 text-green-300 text-center ame'>I'm Priyanshu Sharma <br />A Passionate developer from India</h2>
       <br /><br />
       <h3 className='text-1xl text-green-100 text-center mr-auto'>
        {/* I am currently enrolled in <b>Computer Science & Engineering</b> from <b>Maharaja Surajmal Institute of Technology, New Delhi.</b>  I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using <b>MERN Stack</b> and <b>LAMP Stack</b> . Working for myself to improve my skills. */}
       I am Priyanshu Sharma. Programming enthusiast, <b>Web Developer</b> and <b>BlockChain Developer</b>. I am obsessed with learning new things and improving my skills. I have worked on variety of projects. I am currently enrolled in <b>Computer Science & Engineering</b> from <b>Maharaja Surajmal Institute of Technology</b>, New Delhi. I am very passionate about improving my coding skills & developing applications & websites.
       </h3>
      </div>
    </div>

    </>
 
  )
}

export default About