import React from 'react'

function Product({product}) {
  return (
    <div className=' flex gap-6'>
    <img className='h-[200px] w-[300px] rounded-md' src={product.img} alt="" />
    <div className='flex flex-col gap-5'>
        <h2 className='font-semibold text-3xl'>{product.name}</h2>
        <p className='font-light text-xl'>{product.type}</p>
        <p className='text-extralight font-bold'>{product.price}</p>
        <button className={`${product.color} px-6 py-3 text-white font-semibold text-xl rounded-lg`}>Order Now</button>
    </div>
</div>
  )
}

export default Product