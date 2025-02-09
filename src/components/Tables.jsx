import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import TableAuthors from './TableAuthors'
import TableProjects from './TableProjects'

const Tables = () => {
  return (
    <section className="flex flex-col gap-5">
      <Navbar title={"Tables"} />
      <div className="p-5 rounded-lg shadow-lg m-5 bg-neutral-700 text-white font-semibold text-xl -mb-14 z-20">Authors Table</div>
      <TableAuthors />
      <div className="p-5 rounded-lg shadow-lg m-5 bg-neutral-700 text-white font-semibold text-xl -mb-14 z-20">Projects Table</div>
      <TableProjects notDashboard={true} />
      <Footer />
      </section>
  )
}

export default Tables
