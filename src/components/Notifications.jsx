/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import N_AlertsWithIcons from './N_AlertsWithIcons'
import N_Alerts from './N_Alerts'

const Notifications = () => {

  return (
    <section className="flex flex-col gap-5">
      <Navbar title={"Notifications"} />
      <N_Alerts />
      <N_AlertsWithIcons />
      <Footer />
      </section>
  )
}

export default Notifications
