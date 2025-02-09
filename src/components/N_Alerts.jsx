import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

const N_Alerts = () => {

   const [nots, setNots] = useState([
      { message : 'A simple gray alert with an example link. Give it a click if you like.' , color : "#212121" , show : false , delete : false  },
      { message : 'A simple green alert with an example link. Give it a click if you like.' , color : "#4CAF50" , show : false , delete : false  },
      { message : 'A simple orange alert with an example link. Give it a click if you like.' , color : "#FF9800" , show : false , delete : false  },
      { message : 'A simple red alert with an example link. Give it a click if you like.' , color : "#F44336" , show : false , delete : false  },
   ]);
   function handleShow(message) {
      let newNots = nots.map((not) => {
         if (not.message === message) {
            not.show = !not.show ;
         }
         return not;
      })
      setNots(newNots);
   }
   function handleDelete(message) {
      let newNots = nots.map((not) => {
         if (not.message === message) {
            not.delete = true ;
         }
         return not;
      })
      setNots(newNots);
   }

   return (
   <section className="bg-white border-2 border-neutral-200 shadow-lg p-4 md:p-8 rounded-lg">
      <h1 className="font-semibold text-xl mb-5">Alerts</h1>
      <ul className="flex flex-col gap-3">
         {nots.map((not,index) => (
               <li key={index+78} className={`${not.delete && 'hidden'} ${not.show && 'opacity-50'} flex justify-between items-center gap-4 p-3 md:p-5 rounded-lg `} style={{background:not.color}}>
               <p className="text-white">{not.message}</p>
               <div className="text-white text-2xl cursor-pointer flex gap-3">
                  {not.show ? <FaEyeSlash onClick={()=>handleShow(not.message)} className='cursor-pointer duration-300 hover:scale-110' /> : <FaEye onClick={()=>handleShow(not.message)} className='cursor-pointer duration-300 hover:scale-110' />}
                  <IoCloseSharp onClick={()=>handleDelete(not.message)} className='cursor-pointer duration-300 hover:scale-110' />
               </div>
            </li>
         ))}
      </ul>
   </section>
   )
}

export default N_Alerts
