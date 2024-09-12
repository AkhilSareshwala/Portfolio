import React from 'react'
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { ReactTyped,Typed } from "react-typed";
import { IoLogoJavascript } from "react-icons/io5";

import pic from '../../public/photo.avif';

const Home = () => {
  return (
    <>
        <div name='Home' className='max-w-screen-2xl conatiner mx-auto px-4 md-px:20 my-20'>
            <div className='flex flex-col md:flex-row '>
                <div className='md:w-1/2 mt-12 md:mt-20 space-y-4 order-2 md:order-1' >
                    <span className='text-xl'>Welocme to my feed</span>
                    <br />
                    <div className="flex space-x-2 text-3xl md:text-4xl ">
                        <h1>Hello, I'm a</h1>
                        {/* <span className='text-red-700 font-bold '>Developer</span> */}
                        <ReactTyped className='text-red-700 font-semi-bold '
                            strings={["Devoloper","Programmer","Coder"]}
                            typeSpeed={60}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <p className='text-justify text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium, ullam consequuntur repudiandae ipsam sit rem veritatis omnis expedita sint, distinctio cumque veniam ex architecto, dolore atque. Omnis, expedita nemo?</p>
                    <br />
                    {/* Icons */}
                    <div className='space-y-3'>
                        <h1 className='font-bold md:text-2xl text-xl '>Currently working on</h1>
                        <div className='flex space-x-5 ' >
                            <DiMongodb className=' text-2xl hover:scale-110 duration-75 rounded-full bordeL["2px"]'/>
                            <IoLogoReact className=' text-2xl hover:scale-110 duration-75 rounded-full bordeL["2px"]'/>
                            <SiExpress className=' text-2xl hover:scale-110 duration-75 rounded-full bordeL["2px"]'/>
                            <FaNode className=' text-2xl hover:scale-110 duration-75 rounded-full bordeL["2px"]'/>
                            <SiPython className=' text-2xl hover:scale-110 duration-75 rounded-full bordeL["2px"]'/>
                            <IoLogoJavascript className=' text-2xl hover:scale-110 duration-75 rounded-full bordeL["2px"]' />

                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 md:mt-20 md:ml-60 order-1 md:order-2 ml-12'>
                <img src={pic} className='rounded-full :50 md:h-[450px] md:w-[450px] h-[350px] w-[350px] '/>
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    </>
  )
}

export default Home
