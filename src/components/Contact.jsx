import React from "react";
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import {FiX} from 'react-icons/fi'
import { BsPatchCheckFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { useState } from "react";
import '../styles/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
// import { faHandshake } from "@fortawesome/free-solid-svg-icons";
const Contact=()=>{

   

    const [value,setvalue]=useState();
    const form = useRef();
    // const check_fn=()=>{
    //     setvalue('pop_up');
    // }
    const sendEmail = (e) => {
      e.preventDefault();
       
      emailjs.sendForm('service_0vr5xbh', 'template_daqauxu', form.current, 'BvX8BJ6pDoTJwLave')
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            // console.log(error.text);
        });
        e.target.reset();
        setvalue('pop_up');
    };
    setTimeout(() => {
        // console.log("get called");
        // alert("done");
        setvalue();
    }, 10000);
    return(<>
        {<section id="contact">
            <div className="verify_submit" style={value==='pop_up'?{"opacity": "1","visibility":"visible","transition":"0.4s all ease"}:{}}>
               <BsPatchCheckFill className="submit_verify_icons"/> <p>successfully submitted</p><FiX onClick={()=>{setvalue('pop_back')}} style={value==='pop_up'?{"opacity": "1","visibility":"visible","transition":"0.4s all ease"}:{}} className="cut"/>
            </div>
            <div className="contactInfo">
            <div className="head_text" >
            <h1 className="text-gray-100 text-center font-bold text-5xl" > <span id='ed'><FontAwesomeIcon icon={faHandshake} /></span>  Get in Touch</h1>
            <h2 >Contact Me</h2>
            </div>
            <div className="contact_option">

            <form className="contact_form " ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" required placeholder="Your full name" />
                <input type="email" name="user_email" placeholder="Enter your email" required />
                <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
                <button type="submit" className="btn btn_form hover:invert" >Send message</button>
            </form>
            </div>
            </div>
            

        </section> }
     
    </>);
}

export default Contact;