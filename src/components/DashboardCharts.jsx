import React from 'react'
import { IoTime } from 'react-icons/io5';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from "recharts";

const DashboardCharts = () => {

   const barData = [
      { name: 'M', v: 50 },
      { name: 'T', v: 20 },
      { name: 'W', v: 10 },
      { name: 'T', v: 22 },
      { name: 'F', v: 50 },
      { name: 'S', v: 10 },
      { name: 'S', v: 40 },
   ];

   const lineData1 = [
      { name: 'Apr', uv: 50  },
      { name: 'May', uv: 40  },
      { name: 'Jun', uv: 300  },
      { name: 'Jul', uv: 320  },
      { name: 'Aug', uv: 500  },
      { name: 'Sep', uv: 350  },
      { name: 'Oct', uv: 200  },
      { name: 'Nov', uv: 230  },
      { name: 'Dec', uv: 500  },
   ];


   return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

         <div className="bg-white rounded-lg border-2 border-neutral-200 p-5 h-96">
            <ResponsiveContainer width="100%" height="60%">
               <BarChart width={`100%`} height={'100%'} data={barData}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" />
               <YAxis domain={[0,50]} tickCount={6}   />
               <Bar dataKey="v" fill="#16A34A" barSize={7} radius={[10 , 1 , 0 , 0]} />
               </BarChart>
            </ResponsiveContainer>
            <h3 className="font-semibold text-lg mt-4">Website View</h3>
            <p className='text-neutral-500 text-lg mb-4'>Last Campaign Performance</p>
            <p className="pt-4 text-lg border-t-2 border-t-neutral-200 text-neutral-500 flex gap-2 items-center"><IoTime /> campaign sent 2 days ago</p>
         </div>

         <div className="bg-white rounded-lg border-2 border-neutral-200 p-5 h-96">
            <ResponsiveContainer width="100%" height="60%">
               <LineChart
                  width={'100%'}
                  height={'100%'}
                  data={lineData1}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0,600]} tickCount={7}/>
                  <Tooltip />
                  <Legend />
                  <Line type="linear" dataKey="uv" stroke="#0286CF" strokeWidth={4} dot={{ r: 5, fill: "#0286CF" , stroke: "white", strokeWidth: 2 }} />
            </LineChart>
            </ResponsiveContainer>
            <h3 className="font-semibold text-lg mt-4">Daily Sales</h3>
            <p className='text-neutral-500 text-lg mb-4'>15% increase in today sales</p>
            <p className="pt-4 text-lg border-t-2 border-t-neutral-200 text-neutral-500 flex gap-2 items-center"><IoTime /> updated 4 min ago</p>
         </div>

         <div className="bg-white rounded-lg border-2 border-neutral-200 p-5 h-96">
            <ResponsiveContainer width="100%" height="60%">
               <LineChart
                  width={'100%'}
                  height={'100%'}
                  data={lineData1}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0,600]} tickCount={7}/>
                  <Tooltip />
                  <Legend />
                  <Line type="linear" dataKey="uv" stroke="#16A34A" strokeWidth={4} dot={{ r: 5, fill: "#16A34A" , stroke: "white", strokeWidth: 2 }} />
            </LineChart>
            </ResponsiveContainer>
            <h3 className="font-semibold text-lg mt-4">Completed Tasks</h3>
            <p className='text-neutral-500 text-lg mb-4'>Last Campaign Performance</p>
            <p className="pt-4 text-lg border-t-2 border-t-neutral-200 text-neutral-500 flex gap-2 items-center"><IoTime />  just updated</p>
         </div>

      </section>
   )
}

export default DashboardCharts
