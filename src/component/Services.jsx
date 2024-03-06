import React from 'react'
import Service from './Service'

function Services() {
    const services = [
         {
            logo:"fa-solid fa-shapes",
            title:"Software development",
            content:"Tell us what you like and we'll show your top job opportunities"
         },
         {
            logo:"fa-solid fa-mobile",
            title:"Mobile Application",
            content:"Tell us what you like and we'll show your top job opportunities"
         },
         {
            logo:"fa-solid fa-address-card",
            title:"Training developmebntt",
            content:"Tell us what you like and we'll show your top job opportunities"
         },
    ]
  return (
    <div>
        <h2 className='m-[5rem] text-[36px] font-bold w-max border-b-8 border-[#F0DC28]'>What We Offer</h2>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-[5rem] m-[5rem]'>
        
        {
            services.map(service=>(
                <Service service={service} />
            ))
        }
    </div>
    </div>
  )
}

export default Services