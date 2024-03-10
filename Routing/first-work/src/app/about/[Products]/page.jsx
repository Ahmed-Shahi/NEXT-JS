import React from 'react'

//   export async function generateMetadata({ params }) {
//     return {
//     title :  `${params.Products}`

//     }
//   }


function Products({ params }) {
    console.log(params.Products);

    

    return (
        <div>
            <h1> {params.Products}</h1>
        </div>
    )
}

export default Products