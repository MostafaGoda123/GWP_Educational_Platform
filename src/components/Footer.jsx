import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import { AllContext } from '../context/AllContext'

const Footer = () => {

   let { isMobile } = useContext(AllContext);

   return (
      <footer className={`flex justify-center items-center font-semibold h-[10vh] text-neutral-500 `}>
         © 2025, made with <FaHeart className="text-red-600 mx-1 text-sm" /> by <span className="text-black mx-1">Eng\ Mostafa ElSayed</span> <span className={isMobile?'hidden':''}>for a better web</span>.
      </footer>
   )
}

export default Footer
