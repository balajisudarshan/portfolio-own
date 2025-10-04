import React from 'react'
import img from '../assets/img.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <section className='hero bg-base-200 min-h-screen'>
        <div className="hero-content flex-col-reverse lg:flex-row ">
             <div className="left-section lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                <img src={img} className='rounded-lg shadow-lg max-w-sm w-100'/>
            </div>
            <div className="right-section text-center mt-20 lg:text-start lg:w-1/2 space-y-6 mb-20">
                <h1 className='text-3xl font-bold'>Hi, My Name Is<br></br> <span className='text-accent mt-1'>Balaji Sudarshan Reddy</span></h1>
                <p className='py-4 text-lg'>Im a passionate web developer creating modern and responsive web applications</p>
                <div className="buttons flex flex-col sm:flex-row gap-4">
                    <a className='btn btn-primary ' href='https://www.linkedin.com/in/k-balaji-sudarshan-reddy-9449a3320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_new'><FaLinkedin /> Linked In</a>
                    <a className='btn btn-secondary' href='https://drive.google.com/file/d/1MZpnEC-Pi9oganxg8JSqoj08vBL5duiY/view?usp=sharing' target='_new'><IoDocumentOutline /> Download CV</a>
                    <a className='btn btn-neutral' href='https://github.com/balajisudarshan' target='_new'><FaGithub /> GitHub</a>
                </div>
            </div>
           
        </div>


    </section>
  )
}

export default Hero