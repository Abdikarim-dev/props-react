import React from 'react'

function Service({service}) {
  return (
    <div className='border border-slate-200 w-[24rem] pl-[5rem] py-3'>
        <i class={`${service.logo} text-9xl`}></i>
        <h1 className='text-[24px] font-bold'>{service.title}</h1>
        <p>{service.content}</p>
    </div>
  )
}

export default Service