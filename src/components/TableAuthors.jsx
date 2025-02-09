import React, { useContext } from 'react'
import team_1 from '../images/team-1.jpeg'
import team_2 from '../images/team-2.jpg'
import team_3 from '../images/team-3.jpeg'
import team_4 from '../images/team-4.jpeg'
import team_5 from '../images/team-5.jpeg'
import { AllContext } from '../context/AllContext'

const TableAuthors = () => {

   let {isMobile} = useContext(AllContext);
   let allAuthors = [
      { image : team_2 , name : 'John Michael'    , email : 'john@creative-tim.com'      , function : 'Manager'     , functionDesc : 'Organization' , status : 'Online'  , employedData : '23/04/18' },
      { image : team_1 , name : 'Alexa Liras'     , email : 'alexa@creative-tim.com'     , function : 'Programator' , functionDesc : 'Developer'    , status : 'Offline' , employedData : '11/01/19' },
      { image : team_4 , name : 'Laurent Perrier' , email : 'laurent@creative-tim.com'   , function : 'Executive'   , functionDesc : 'Projects'     , status : 'Online'  , employedData : '19/09/17' },
      { image : team_3 , name : 'Michael Levi'    , email : 'michael@creative-tim.com'   , function : 'Programator' , functionDesc : 'Developer'    , status : 'Online'  , employedData : '24/12/08' },
      { image : team_5 , name : 'Bruce Mars'      , email : 'bruce@creative-tim.com'     , function : 'Manager'     , functionDesc : 'Executive'    , status : 'Offline' , employedData : '04/10/21' },
      { image : team_2 , name : 'Alexander'       , email : 'alexander@creative-tim.com' , function : 'Programator' , functionDesc : 'Developer'    , status : 'Offline' , employedData : '14/09/20' },
   ]

   return (
      <section className={`overflow-x-auto pt-20  p-5 ${isMobile&&'text-sm'} bg-white rounded-lg border-2 border-neutral-200 text-neutral-500 shadow-lg`}>
         <table className='w-full' >
            <thead>
               <tr className='border-b border-b-neutral-200 font-semibold'>
                  <td className='pb-4'>Author</td>
                  <td>Function</td>
                  <td>Status</td>
                  <td>Employed</td>
                  <td>Button</td>
               </tr>
            </thead>
            <tbody>
               {allAuthors.map((author,index) => (
                  <tr key={index+565652} className={`border-b border-b-neutral-200 ${allAuthors.length === index+1 && 'border-none'}`}>
                     <td className='flex items-center gap-2 my-4'>
                        <img src={author.image} alt="" className='w-10 h-10 rounded-lg' />
                        <div className="flex flex-col items-start">
                           <h3 className="font-semibold text-black">{author.name}</h3>
                           <p className="">{author.email}</p>
                        </div>
                     </td>
                     <td ><div className={isMobile&&'ms-5'}><p className="font-semibold">{author.function}</p><p>{author.functionDesc}</p></div></td>
                     <td><p className={`${isMobile&&'ms-5 me-3'} text-white px-3 py-1 w-fit rounded-lg ${author.status === 'Online' ? "bg-green-600" : "bg-neutral-600"}`}>{author.status}</p></td>
                     <td>{author.employedData}</td>
                     <td><p className='cursor-pointer duration-300 px-3 py-1 rounded-lg hover:text-black hover:bg-neutral-200 w-fit'>Edit</p></td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   )
}

export default TableAuthors
