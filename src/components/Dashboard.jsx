import React from 'react'
import Navbar from './Navbar'
import DashboardIcons from './DashboardIcons';
import Footer from './Footer';
import DashboardCharts from './DashboardCharts';
import DashboardProjects from './DashboardProjects';

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-5">
      <Navbar title={"Home"} />
      <DashboardIcons />
      <DashboardCharts />
      <DashboardProjects />
      <Footer />
    </section>
  )
}

export default Dashboard
