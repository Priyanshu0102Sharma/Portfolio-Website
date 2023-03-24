import React from 'react'
import '../styles/Home.css'
import Header from './Header'
import About from './About'
import Project from './Project'
import Education from './Education'
import Contact from './Contact'
import Skills from './Skills'
import Experience from './Experience'
import img1 from '../assets/img1.gif' 
import Typewriter from 'typewriter-effect'
import Aos from "aos"
import "aos/dist/aos.css"
import { useState } from 'react'
import { ScrollToTop } from 'react-simple-scroll-up'


function Home() {
  useState(()=>{
    Aos.init({duration:2000})
  },[])
//     var hello = document.getElementById('hello');

//     var typewriter = new Typewriter(hello, {
//         loop: true,
//         delay: 75,
//       });
//       typewriter
//   .pauseFor(2500)
//   .typeString('A simple yet powerful native javascript')
//   .pauseFor(300)
//   .deleteChars(10)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
//   .start();
{/* <ScrollToTop showUnder={160}>
<span>UP</span>
</ScrollToTop> */}


  return (
    <>
     {/* <ScrollToTop /> */}
        <div className="home-1" id='home'>
        <Header />
            <div className="section1 flex justify-center flex-wrap mt-8">
            <div className="desc pt-40">
                <h1 className='text-5xl font-semibold text-gray-100'>Hello, I'm</h1>
                <h1 className='text-6xl font-semibold text-gray-50' >Priyanshu Sharma</h1>
                <h2 className='text-gray-300' id='hello'></h2>
                <h3 className='text-cyan-300 text-2xl leading-loose pt-2'><Typewriter 
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                onInit={(typewriter)=>{
                    typewriter
                    .pauseFor(400)
                    .typeString('I am a <strong>Developer</strong>')
                    .pauseFor(300)
                    .deleteChars(9)
                    .typeString('<strong>Programmer </strong>')
                    .typeString('<strong>and <span style="color: #27ae60;">Problem Solver</span></strong>')
                    .pauseFor(500)
                    .start();
                }
              
            }
                /></h3>
            </div>

            <div className="ill justify-center pl-16">
                <img src={img1} alt="image not availaible" />
            </div>
            </div>
        </div>
        <About />
        <Education />
        <Skills />
        <Project />
        <Experience />
        <Contact />
    </>
  )
}

export default Home