import React from 'react'
import Link from 'next/link'
function Navigation() {
  return (
    <div>
        <p>LOGO</p>
        <ul className='grid grid-cols-4 gap-5'>
            <li><Link href='/'> HOME </Link></li>
            <li><Link href='/about'> ABOUT </Link></li>
            <li><Link href='/contact'> CONTACT </Link></li>
            <li><Link href='/products'> PRODUCTS </Link></li>
        </ul>
    </div>
  )
}

export default Navigation