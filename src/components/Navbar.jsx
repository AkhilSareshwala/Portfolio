import React, { useState } from 'react';
import pic from '../../public/photo.avif';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [menu,setMenu] = useState(true)
    const nav = [
        { id: 1, label: 'Home' },
        { id: 2, label: 'About' },
        { id: 3, label: 'Projects' },
        { id: 5, label: 'Contact' }
      ]
  return (
    <>
        <div className='max-w-screen-2xl conatiner mx-auto px-4 md-px:20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white'>
            <div className='flex justify-between h-16 items-center'>
                <div className=' flex space-x-2 '>
                    <img src={pic} alt="" className='h-12 w-12 rounded-full ' />
                    <h1 className=' font-semibold text-xl cursor-pointer text-red-500' >Akhil <span className=' text-xl '>Sareshwala</span>
                    <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>
                <div>
                    <ul className='hidden md:flex space-x-8 text-xl '>
                        {nav.map((nav_item)=>{
                            return(
                                <li className='hover:scale-105 duration-200 cursor-pointer hover:text-red-200' key={nav_item['id']}>
                                <Link to={nav_item['label']} smooth={true} duration={500} activeClass='active' offset={-70}>{nav_item['label']}</Link>
                                </li>
                                
                            )
                        })}
                    </ul>
                </div>
                <div className="md:hidden cursor-pointer" onClick={()=>setMenu(!menu)} >{menu?<IoMenu size={24}></IoMenu>:<IoClose size={24}></IoClose>}</div>
                
            </div>
            {/* For Mobile */}
            {
                !menu&&(
                    <div className='z-50 bg-white '>
                        <ul className='md:hidden h-screen flex flex-col justify-center text-center text-2xl font-extrabold space-y-6'>
                        {nav.map((nav_item)=>{
                            return(
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={nav_item['id']}>
                                <Link onClick={()=>setMenu(!menu)} to={nav_item['label']} smooth={true} duration={500} activeClass='active' offset={-70}>{nav_item['label']}</Link>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Navbar
