import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard';
import Profile from './Profile';
import Tables from './Tables';
import Notifications from './Notifications';
import SignIn from './SignIn';
import SignUp from './SignUp';

const MainBar = () => {
   return (
      <section className="flex-1 h-[100vh] overflow-y-scroll p-5">
         <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/tables' element={<Tables />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
         </Routes>
      </section>
   )
}

export default MainBar
