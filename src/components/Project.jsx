import React from 'react'
import '../styles/project.css'
import img1 from '../assets/mern.jpg'
import img2 from '../assets/php.png'
import img3 from '../assets/blockchain.jpeg'
import Aos from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import img4 from '../assets/react.jpg'
import { useState } from 'react'
function Project() {

    useState(() => {
        Aos.init({ duration: 2000 })
    }, [])


    function AlertCall() {
        alert("Hosted site doesn't have full functionality, if you want to see full functionality of the sites , Pls run on your local server, guide is given in github code for the same.")
    }

    return (
        <div className='project' id='project'>

            <h1 data-aos="fade-in" className='text-cyan-100 text-5xl font-bold text-center'><span id='ed'><FontAwesomeIcon icon={faCode} /></span> PROJECTS</h1>

            <div data-aos="fade-up" className="card flex justify-center flex-wrap">


                <div className="w-[300px] h-[420px] bg-transplant cursor-pointer group perspective m-8">
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div className="photo absolute backface-hidden border-2 w-full h-full rounded-2xl">
                        <img className='w-[300px] h-[420px] rounded-t-2xl rounded-b-2xl' src={img1} alt="" />
                        </div>
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 rounded-2xl">
                            <div className="pContent text-center">
                                <h2 className='text-green-500 font-semibold pb-3'> MERN PROJECTS</h2>
                                {/* <a href="https://xcrypto-indol.vercel.app/coins" className='text-center'>Xcrypto</a> */}
                                <p className='font-bold pb-3'>1. Jain Jalebi</p>

                                <a href="https://jain-jalebi.netlify.app/" className=' hover:underline text-orange-600 text-center' target='_blank'><span ><FontAwesomeIcon icon={faLaptop} /></span> Demo</a>
                                <br />
                                <a href="https://github.com/Priyanshu0102Sharma/jain_restaurant" className=' hover:underline text-cyan-500 text-center' target='_blank' > <span><FontAwesomeIcon icon={faCode} /></span> Source Code </a>
                                <p className='p-2'>Engineered a dynamic Online Shopping Website leveraging the MERN Stack, meticulously crafted with an elegant design using Tailwind CSS.</p>
                                <p className='font-bold pb-3'>2. Chikitsak</p>

                                <a href="http://doctorapp-7pnu.onrender.com/" className=' hover:underline text-orange-600 text-center' target='_blank'><span ><FontAwesomeIcon icon={faLaptop} /></span> Demo</a>
                                <br />
                                <a href="https://github.com/Priyanshu0102Sharma/Production-Doc-App" className=' hover:underline text-cyan-500 text-center' target='_blank' > <span><FontAwesomeIcon icon={faCode} /></span> Source Code </a>
                                <p className='p-2 mb-3'>Chikitsak is developed with the purpose of connecting patient to docors online.It is developed using MERN Stack</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[300px] h-[420px] bg-transplant cursor-pointer group perspective m-8">
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div className="photo absolute backface-hidden border-2 w-full h-full rounded-2xl">
                        <img className='w-[300px] h-[420px] rounded-t-2xl rounded-b-2xl' src={img4} alt="" />
                        </div>
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 rounded-2xl">
                            <div className="pContent text-center">
                                <h2 className='text-green-500 font-semibold pb-3'> REACT PROJECTS</h2>
                                {/* <a href="https://xcrypto-indol.vercel.app/coins" className='text-center'>Xcrypto</a> */}
                                <p className='font-bold pb-3'>1. XCrypto</p>

                                <a href="https://xcrypto-indol.vercel.app" className=' hover:underline text-orange-600 text-center' target='_blank'><span ><FontAwesomeIcon icon={faLaptop} /></span> Demo</a>
                                <br />
                                <a href="https://github.com/Priyanshu0102Sharma/Xcrypto" className=' hover:underline text-cyan-500 text-center' target='_blank' > <span><FontAwesomeIcon icon={faCode} /></span> Source Code </a>
                                <p className='p-2 mb-3'>Xcypto is a webapp created using React JS along with real time API for Crypto Currency</p>
                                <p className='font-bold pb-3'>2. VideoHub</p>

                                <a href="https://videohub-eight.vercel.app/" className=' hover:underline text-orange-600 text-center' target='_blank'><span ><FontAwesomeIcon icon={faLaptop} /></span> Demo</a>
                                <br />
                                <a href="https://github.com/Priyanshu0102Sharma/VideoHub" className=' hover:underline text-cyan-500 text-center' target='_blank' > <span><FontAwesomeIcon icon={faCode} /></span> Source Code </a>
                                <p className='p-2'>VideoHub is a web Platform in which user can upload videos and see other people's videos.</p>
                            </div>
                        </div>
                    </div>
                </div>

              
                {/* <div className="w-[300px] h-[420px] bg-transplant cursor-pointer group perspective m-8">
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div className="photo absolute backface-hidden border-2 w-full h-full rounded-2xl">
                            <img className='rounded-2xl' src={img3} alt="" />
                        </div>
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">

                        </div>
                    </div>
                </div> */}
                <div className="w-[300px] h-[420px] bg-transplant cursor-pointer group perspective m-8">
                    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div className="photo absolute backface-hidden border-2 w-full h-full rounded-2xl">
                            <img className='w-[300px] h-[420px] rounded-t-2xl rounded-b-2xl' src={img2} alt="" />
                        </div>
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 rounded-2xl">

                            <div className="pContent text-center">
                                <h2 className='text-green-500 font-semibold pb-3'> PHP PROJECTS</h2>
                                {/* <a href="https://xcrypto-indol.vercel.app/coins" className='text-center'>Xcrypto</a> */}
                                <p className='font-bold pb-3'>1. DiscussKro</p>

                                <a href="http://discusskro.42web.io/" className=' hover:underline text-orange-600 text-center' onClick={AlertCall} target='_blank' ><span ><FontAwesomeIcon icon={faLaptop} /></span> Demo</a>
                                <br />
                                <a href="https://github.com/Priyanshu0102Sharma/Discusskro" className=' hover:underline text-cyan-500 text-center' target='_blank' > <span><FontAwesomeIcon icon={faCode} /></span> Source Code </a>
                                <p className='p-2 mb-3'>DiscussKro is an online coding forum in which user can ask their problem and give their solution.</p>
                                <p className='font-bold pb-3'>2. INotes</p>

                                <a href="http://routinehub.epizy.com/?i=1#" className=' hover:underline text-orange-600 text-center' onClick={AlertCall} target='_blank' ><span ><FontAwesomeIcon icon={faLaptop} /></span> Demo</a>
                                <br />
                                <a href="https://github.com/Priyanshu0102Sharma/INotes" className=' hover:underline text-cyan-500 text-center' target='_blank' > <span><FontAwesomeIcon icon={faCode} /></span> Source Code </a>
                                <p className='p-2 mb-3'>INotes is a platform in which user can create their own notes and edit and delete them.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Project