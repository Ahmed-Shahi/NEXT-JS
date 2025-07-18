'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [item , setItem] = useState([])
  useEffect( ()=>{
    const getData = async () =>{
    const result = await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setItem(data.products))
    .catch(error => console.error('Error fetching data:', error));
    console.log(item);
    return result;
    }
    getData();
  },[])
  
  return (
   <div>
    <ul className="grid grid-cols-3 gap-5">
      {item.map((data,index)=>(
        <li key={index}>
          <Link href={`/products/?ID=${data.id}`}>
          {data.title}
          </Link>
          
          </li>
      ))}
    </ul>
   </div>
  );
}