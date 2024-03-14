import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {
  return (
    <div>
      <div style={{ width: 'auto', height: '50px', backgroundColor: 'black', display:'flex',justifyContent:'space-around' }}>
        <div>
          <img style={{ width: '200px', height: '200px' }} src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2Fd2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png&tbnid=-_fmJRiUuVS9EM&vet=12ahUKEwjUqZitpvCEAxVFbKQEHWixBHsQMygDegQIARB3..i&imgrefurl=https%3A%2F%2Fwww.wix.com%2Fapp-market%2Famazon&docid=44BfZ7LJzWrCRM&w=1080&h=1080&q=amazon&ved=2ahUKEwjUqZitpvCEAxVFbKQEHWixBHsQMygDegQIARB3" alt="logo" />
        </div>
        <div style={{color:'white'}}>
          <span>
          <i class="fa-solid fa-location-dot"></i>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" bounce style={{color: "#ffffff",}} />
          </span>
          <h1 style={{fontSize:'14px'}}> 
            Deliver to <br /> Pakistan</h1>
          <h1></h1>
        </div>
      </div>

    </div>
  )
}

export default Home