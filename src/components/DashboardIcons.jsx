import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNetworkBars } from 'react-icons/gi'
import { HiMiniUserPlus, HiMiniUsers } from 'react-icons/hi2'

const DashboardIcons = () => {

   let allIcons = [
      { icon:<FaCameraRetro />  , desc:"Today's Money" , number:"$53k"     , percent:55 , percentDesc:"than last week" }, 
      { icon:<HiMiniUsers />    , desc:"Today's Users" , number:"2,300"    , percent:3  , percentDesc:"than last month" }, 
      { icon:<HiMiniUserPlus /> , desc:"New Clients"   , number:"3,462"    , percent:-2 , percentDesc:"than yesterday" }, 
      { icon:<GiNetworkBars />  , desc:"Sales"         , number:"$103,430" , percent:5  , percentDesc:"than yesterday" }, 
   ]

   return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
         {allIcons.map((icon,index) => (
            <li key={182+index} className="bg-white rounded-lg border-2 border-neutral-200">
               <div className="flex justify-between items-center p-5">
                  <p className="flex justify-center items-center bg-neutral-700 text-white w-12 h-12 text-2xl rounded-lg">{icon.icon}</p>
                  <p className="text-center text-base text-neutral-500">{icon.desc}<br /><span className="text-black font-semibold text-xl">{icon.number}</span></p>
               </div>
               <div className="font-semibold p-5 border-t border-t-neutral-200 text-neutral-500">
                  <span className={`${icon.percent>0 ?'text-green-600':'text-red-600'} me-1`}>{icon.percent>0 ? `+${icon.percent}%`:`${icon.percent}%` }</span>
                  {icon.percentDesc}
               </div>
            </li>
         ))}
      </ul>
   )
}

export default DashboardIcons
