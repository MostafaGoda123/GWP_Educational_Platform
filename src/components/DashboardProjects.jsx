import React from 'react'
import TableProjects from './TableProjects'
import { FaArrowUp, FaBell, FaCameraRetro, FaCreditCard, FaLockOpen, FaShoppingCart } from 'react-icons/fa'
import { FaCirclePlus } from 'react-icons/fa6'

const DashboardProjects = () => {

   let allOverviews = [
      { icon: <FaBell /> , text: '$2400, Design changes' , time: '22 DEC 7:20 PM' },
      { icon: <FaCirclePlus /> , text: 'New order #1832412' , time: '21 DEC 11 PM' },
      { icon: <FaShoppingCart /> , text: 'Server payments for April' , time: '21 DEC 9:34 PM' },
      { icon: <FaCreditCard /> , text: 'New card added for order #4395133' , time: '20 DEC 2:20 AM' },
      { icon: <FaLockOpen /> , text: 'Unlock packages for development' , time: '18 DEC 4:54 AM' },
      { icon: <FaCameraRetro /> , text: 'New order #9583120' , time: '17 DEC' },
   ]

   return (
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
         <div className="lg:col-span-2">
            <TableProjects />
         </div>
         <div className="bg-white p-5 rounded-lg border-2 border-neutral-200">
            <h1 className="font-semibold text-black text-xl">Orders Overview</h1>
            <p className="flex items-center gap-1 mb-5">
               <FaArrowUp className='text-green-500' />
               24% this month
            </p>
            <ul className="flex flex-col gap-5">
               {allOverviews.map((overView,index) => (
                  <li key={index+4444} className='flex items-center gap-5 font-semibold text-neutral-500'>
                     <p className='text-xl' >{overView.icon}</p>
                     <div>
                        <p className='text-black'>{overView.text}</p>
                        <p>{overView.time}</p>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default DashboardProjects
