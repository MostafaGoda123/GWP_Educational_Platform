import { createContext, useEffect, useState } from "react";


export let AllContext = createContext();

export default function AllContextProvider({children}) {

   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   const [showSideBar, setShowSideBar] = useState(!isMobile);

   useEffect(() => {
      const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
   };

   window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);
   useEffect(() => {
      isMobile ? setShowSideBar(false) : setShowSideBar(true) ;
   }, [isMobile])

   return <AllContext.Provider value={{isMobile , showSideBar , setShowSideBar}} >
      {children}
   </AllContext.Provider>
}

