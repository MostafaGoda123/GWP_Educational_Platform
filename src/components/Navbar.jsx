import React, { useContext, useState } from 'react'
import { FaBars, FaBell, FaCreditCard, FaUserCircle } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { IoTime } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import logo_spotify from "../images/logo-spotify.svg"
import team_2 from "../images/team-2.jpg"
import { AllContext } from '../context/AllContext'

const Navbar = ({title}) => {

   let { isMobile , setShowSideBar , showSideBar } = useContext(AllContext);
   const [showNotifications, setShowNotifications] = useState(false);
   let allNotifications = [
      {img: <img src={team_2} alt="" className="w-10 h-10 rounded-full" /> , title : 'New message from Laur' , time : '13 minutes ago'},
      {img: <img src={logo_spotify} alt="" className="w-10 h-10 rounded-full" /> , title : 'New album by Travis Scott' , time : '1 day ago'},
      {img: <div className="w-10 h-10 rounded-full bg-neutral-700 text-white flex items-center justify-center text-xl"><FaCreditCard /></div> , title : 'Payment successfully completed' , time : '2 day ago'}
   ]

   return (
      <nav className="h-[10vh] flex justify-between items-center z-50">
         <p className={`text-neutral-500 text-xl ${isMobile && 'hidden'}`}>
            Dashboard / <span className="font-semibold text-black">{title}</span>
         </p>
         <section className={`flex items-center ${isMobile?'gap-1  w-full':'gap-2'} text-neutral-500`}>
            <input type="text" className={`text-black border-2 border-neutral-200 bg-transparent py-1 px-3 ${isMobile?'w-40 me-auto':'w-60'} rounded-lg focus:border-neutral-500 outline-none duration-300`} placeholder='search' />
            <Link to={"/signin"} >
               <div className={`flex py-2 ${isMobile?"px-2":"px-3"} gap-2 items-center rounded-lg duration-300 hover:bg-neutral-200 hover:text-black cursor-pointer`}>
                     <FaUserCircle />
                     <p className={isMobile && 'hidden'}>Sign In</p>
               </div>
            </Link>
            <div onClick={()=>setShowNotifications(!showNotifications)} className={`relative flex py-2 px-3 gap-2 items-center rounded-lg duration-300 hover:bg-neutral-200 hover:text-black cursor-pointer ${showNotifications && 'bg-neutral-200 text-black'}`}>
               <FaBell />
               {showNotifications &&
                  <ul onClick={()=>setShowNotifications(false)} className={`w-80 bg-white rounded-lg flex flex-col absolute top-12 ${isMobile?'p-3 gap-1 -right-5':'p-5 gap-4 right-0'}`}>
                     {allNotifications.map((n,index) => (
                        <li key={index+7878} className="flex items-center gap-3 text-sm font-semibold duration-300 hover:bg-neutral-200 p-2 rounded-lg">
                           {n.img}
                           <div className="flex flex-col gap-0">
                              {n.title}
                              <span className="flex items-center gap-2 text-neutral-500"><IoTime />{n.time}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
               }
            </div>
            <div className="flex py-2 px-3 gap-2 items-center rounded-lg duration-300 hover:bg-neutral-200 hover:text-black cursor-pointer">
               <FaGear />
            </div>
            <div onClick={()=>setShowSideBar(!showSideBar)} className={`${isMobile?'flex':'hidden'} py-2 px-3 gap-2 items-center rounded-lg duration-300 hover:bg-neutral-200 hover:text-black cursor-pointer`}>
               <FaBars />
            </div>
         </section>
      </nav>
   )
}

export default Navbar
