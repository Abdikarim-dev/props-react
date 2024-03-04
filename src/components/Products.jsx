import React from 'react'
import Product from './Product'

function Products() {
    let products = [
        {
            img:"https://img.freepik.com/free-photo/clay-plate-full-appetizers-including-goldy-chicken-nuggets-with-chrispy-crust-delicious-canapes-with-herring-cherry-tomatoes-served-with-garlic-sauce-decorated-with-salad-leaves-cheese_132075-13068.jpg?t=st=1709576179~exp=1709579779~hmac=64f8e116f016dccf1ca659efa297b7978c4225d26cb8d7c8591c389570b1a791&w=900",
            name:"Australian Meat",
            type:"Paid Delivery",
            price:"$23",
            color:"bg-cyan-500"
        },
        {
            img:"https://img.freepik.com/free-photo/meatballs-with-vegetables-tomato-sauce_1220-7420.jpg?t=st=1709575120~exp=1709578720~hmac=96ba8973ae57304066cc6765e5ec958111205a8f22b4d75695c36b2deae8b0d0&w=900",
            name:"Pizzeria",
            type:"Paid Delivery",
            price:"$123",
            color:"bg-slate-500"
        },
        {
            img:"https://img.freepik.com/free-photo/high-angle-tasty-pakistani-dish_23-2148825123.jpg?t=st=1709576245~exp=1709579845~hmac=2f82c7b79c6c2d22684b717e10be30ad1752a93306fde101e5b5088d3f126f1f&w=996",
            name:"Meat with Bread",
            type:"Paid Delivery",
            price:"$13",
            color:"bg-red-500"
        },
        {
            img:"https://img.freepik.com/free-photo/top-view-delicious-meat-cutlets-with-fresh-salad_140725-57443.jpg?t=st=1709576280~exp=1709579880~hmac=52d8d45276b1a63a9e64d4633719386776d9dbf157fd8ad89ac041c547710cd0&w=900",
            name:"Somalian food",
            type:"Paid Delivery",
            price:"$213",
            color:"bg-blue-500"
        }
    ]
  return (
    <div className=' mx-[150px] my-[50px] grid grid-cols-2 justify-between gap-x-5 gap-y-6 '>
        {
            products.map(product=>(
                <Product product={product}  />
            ))
        }
    </div>
  )
}

export default Products