'use client'
import React from 'react'
import { use,useState,useEffect } from 'react';

function products(props) {
    const searchParam =  use(props.searchParams);
    console.log(searchParam.ID)
   
    const [item , setItem] = useState([])

    useEffect( ()=>{
        const getData = async () =>{
        const result = await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setItem(data.products[searchParam.ID -1]))
        .catch(error => console.error('Error fetching data:', error));
        return result;
    }
    getData();
},[])
console.log(item.title);

    return (
    <div>
    <ul >
        <li> 
           <strong> {item.title}</strong><br />
           <strong> {item.description}</strong>
          
        </li>
    </ul>
    </div>
  )
}

export default products
