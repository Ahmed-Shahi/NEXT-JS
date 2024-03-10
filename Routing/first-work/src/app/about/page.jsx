import React from 'react'

function Aboutpage() {
 
  async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      console.log('ERROR');
    }
   
    return res.json()
  }
async function productlisting(){

  const data = await getData()
  if(!data){
    <h1></h1>
  }
}  

  return (
    <div>
      <button> Increment</button>
      <button> decrement</button>
      <h1>{}</h1>


    </div>
  )
}

export default Aboutpage