import React, { useContext } from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaDatabase, FaHome, FaServer, FaTable, FaUserCircle } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { AllContext } from '../context/AllContext'

const Sidebar = () => {

   let { isMobile , showSideBar , setShowSideBar } = useContext(AllContext);
   let location = useLocation();
   let allLinks = [
      { name : 'Dashboard' , icon : <FaHome /> , to : '/' },
      { name : 'Profile' , icon : <FaUserCircle /> , to : '/profile' },
      { name : 'Tables' , icon : <FaTable /> , to : '/tables' },
      { name : 'Notifications' , icon : <BsFillInfoCircleFill /> , to : '/notifications' },
      { name : 'Auth Pages'  },
      { name : 'Sign In' , icon : <FaServer /> , to : '/signin' },
      { name : 'Sign Up' , icon : <FaDatabase /> , to : '/signup' }
   ]

   return (
      <section onClick={() => setShowSideBar(false)} className={`h-[100vh] duration-1000 p-5 ${isMobile ?  showSideBar ? "w-80 absolute top-0 left-0 z-10":"hidden"  : 'w-80'}`}>
         <div className="w-full h-full bg-white border-2 border-neutral-200 rounded-lg">
            <Link to={'/'} className='block text-center py-3 my-3  font-semibold text-xl'>Educational Platform</Link>
            <ul className='p-3 flex flex-col gap-3'>
               {allLinks.map((link,index) => (
                  <li className="">
                     {link.to ? 
                        <Link to={link.to} key={index+1211} className={`flex items-center gap-3 py-2 px-3 w-full text-lg font-semibold duration-300  ${link.to===location.pathname ? 'bg-neutral-700 text-white' : 'text-neutral-500 hover:bg-neutral-500 hover:bg-opacity-20'} rounded-lg`} >
                           <span>{link.icon}</span>
                           <span>{link.name}</span>
                        </Link>
                        :
                        <h3 className='text-xl font-semibold mt-3 text-neutral-500'>{link.name}</h3>
                     }
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default Sidebar
