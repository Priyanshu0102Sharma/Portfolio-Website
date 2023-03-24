import React from 'react'
import '../styles/footer.css'
// import {BsLinkedin} from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
// import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faEnvelope, faLinkedin} from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <div className='footer'>
      <div className="containerOfFooter flex justify-center">
        <div className="left m-auto pt-10">
          <h2 className='text-yellow-400'>Priyanshu Sharma's Portfolio</h2>
          <h4 className='text-gray-200'>Thanks for visiting on my portfolio. You can contact me over socials</h4>
        </div>
        <div className="right m-auto pt-10 text-center">
            <h2 className='text-cyan-400 font-serif text-2xl'>Contact info</h2>
            <h5 className='text-gray-200'><span id='ed'><FontAwesomeIcon icon={faEnvelope} /></span> priyanshu0102here@gmail.com</h5>
            <h5 className="text-gray-200"><span id='ed'><FontAwesomeIcon icon={faLocationDot} /></span> Delhi, India-110052</h5>
            <div className="icons flex justify-center p-2">
             <a href="https://www.linkedin.com/in/priyanshu-sharma-/" className='text-gray-100 p-2 text-2xl hover:invert'><AiFillLinkedin /></a> 
             <a href="https://instagram.com/here__priyanshu__?igshid=ZDdkNTZiNTM=" className='text-gray-100 p-2 text-2xl hover:invert' ><AiFillInstagram /></a> 
             <a href="https://twitter.com/007priyanshu007" className='text-gray-100 p-2 text-2xl hover:invert'><AiFillTwitterCircle /></a> 
             <a href="https://github.com/Priyanshu0102Sharma" className='text-gray-100 p-2 text-2xl hover:invert'><AiFillGithub /></a> 
            
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer