import React from 'react'
import Impact from './Impact'

function Impacts() {
    const impacts = [
           {
               title:"40+",
               info:"Projects"
           }
           ,
           {
               title:"20+",
               info:"Happy Customers"
           }
           ,
           {
               title:"40+",
               info:"Training Conducted"
           }
           ,
       ]
  return (
    <div className='bg-[#F0DC28]'>
        <h2 className='ml-20 p-[1rem] text-[36px] font-bold border-b-8 border-white w-max'>Our Impacts</h2>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-[5rem] p-[5rem]'>
        
        {
            impacts.map(impact=>(
                <Impact impact={impact} />
            ))
        }
    </div>
    </div>
  )
}

export default Impacts