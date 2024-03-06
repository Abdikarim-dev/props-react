import React from 'react'

function Impact({impact}) {
  return (
    <div className='bg-white w-[300px] h-[200px] p-[1rem] rounded-md flex justify-center items-center flex-col'>
        <h1 className='text-[36px] font-bold'>
            {impact.title}
        </h1>
        <p className='text-xl'>
            {impact.info}
        </p>
    </div>
  )
}

export default Impact