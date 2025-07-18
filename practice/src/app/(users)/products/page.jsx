'use client'
import React from 'react'
import { use,useState,useEffect } from 'react';

function products(props) {
    const searchParam =  use(props.searchParams);
    console.log(searchParam.ID)
   
    const [item , setItem] = useState([])
    const [reviews , setReviews] = useState([])
    
    useEffect( ()=>{
        const getData = async () =>{
        const result = await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {
            setItem(data.products[searchParam.ID -1])
            setReviews(data.products[searchParam.ID -1].reviews)
        })
        .catch(error => console.error('Error fetching data:', error));
        return result;
    }
    getData();
},[])
// console.log(item.reviews);
// console.log(reviews);

    return (
    <div>
    <ul >
        <li> 
           <strong> <strong>PRODUCT NAME : </strong> {item.title}</strong><br /><br />
           <strong><strong>PRODUCT DETAILS : </strong> {item.description}</strong><br />
        </li> <br />
        <strong>COMMENTS : </strong>
        {reviews.map((data,index)=>(
            <li key={index}><strong>{data.reviewerName}-- </strong>{data.comment} <br /> <strong>RATING : </strong>{data.rating} </li>
        ))}
    </ul>
    </div>
  )
}

export default products
