import React from 'react'
import Header from '../_Compoents/Header/Header'
import Footer from '../_Compoents/Footer/Footer'

function layout({children}) {
  return (
    <div>
        <Header/>
        <h1>About</h1>
        <h1>{children}</h1>
        <Footer/>
    </div>
  )
}

export default layout