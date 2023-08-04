import React, {useEffect, useRef, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import{IoMdClose} from 'react-icons/io';
import AnchorLink from "react-anchor-link-smooth-scroll";
import img1 from "../assets/mypic.jpeg"
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
// import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        setClicked(!clicked);
        if(ref.current.classList.contains('mdm:right-[-400px]')){
            ref.current.classList.remove('mdm:right-[-400px]');
            ref.current.classList.add('mdm:right-[0px]');
        }
        else{
            ref.current.classList.add('mdm:right-[-400px]');
            ref.current.classList.remove('mdm:right-[0px]');
        } 
    }

    return (
        <div className=' p-4 main-navbar flex justify-center items-center space-x-8 mdm:space-x-0 mdm:fixed mdm:bg-[#000] mdm:w-[100vw] mdm:p-2  mdm:top-0 mdm:left-0 mdm:justify-start mdm:items-start z-10'>
            <ul ref={ref} className={'flex space-x-10 justify-center items-center cursor-pointer text-white mdm:flex-col mdm:justify-start mdm:items-center mdm:space-y-6 mdm:space-x-0 mdm:fixed mdm:top-10 mdm:right-[-400px] mdm:w-[200px] mdm:h-[100vh] mdm:bg-[#550202] mdm:shadow-2xl mdm:pt-[40px] mdm:pl-3 mdm:z-10 duration-500 ease-in-out'}>

                <img src={img1} alt="" className="hidden mdm:block rounded-full w-4/5 mx-auto h-40" />

                <div className="icons mdm:flex mdm:justify-center mdm:p-2 hidden">
             <a href="https://www.linkedin.com/in/priyanshu-sharma-/" className='text-gray-100 p-2 text-2xl hover:invert'><AiFillLinkedin /></a> 
             <a href="https://instagram.com/here__priyanshu__?igshid=ZDdkNTZiNTM=" className='text-gray-100 p-2 text-2xl hover:invert' ><AiFillInstagram /></a> 
             <a href="https://twitter.com/007priyanshu007" className='text-gray-100 p-2 text-2xl hover:invert'><AiFillTwitterCircle /></a> 
             <a href="https://github.com/Priyanshu0102Sharma" className='text-gray-100 p-2 text-2xl hover:invert'><AiFillGithub /></a> 
            
            </div>


                <AnchorLink href  = '#home'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>HOME</li></ AnchorLink>
                <AnchorLink href  = '#about'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>ABOUT</li></ AnchorLink>
                <AnchorLink href  = '#education'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>EDUCATION</li></ AnchorLink>
                <AnchorLink href  = '#skills'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>SKILLS</li></ AnchorLink>
                <AnchorLink href  = '#project'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>PROJECTS</li></ AnchorLink>
                <AnchorLink href  = '#experience'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>EXPERIENCE</li></ AnchorLink>
                <AnchorLink href  = '#OtherInfo'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>OTHER INFO</li></ AnchorLink>
                <AnchorLink href  = '#contact'><li onClick={handleClick} className='hover:border-b-2 hover:border-b-red-600 transition duration-300 ease-in-out h-6 hover:scale-110 hover:text-red-600 active:text-red-600'>CONTACT US</li></ AnchorLink>
            </ul>
            <div className='navbar text-white cursor-pointer hidden mdm:flex mdm:justify-center mdm:items-center mdm:z-[14]' onClick={handleClick}>
                { !clicked ? 
                    <FaBars className='font-bold text-2xl'/> :
                    <IoMdClose className='font-bold text-2xl' />
                }
            </div>
        </div>
    )
}

export default Navbar
