import React from 'react'
import "../landingPage.css"
import "../css/footer.css"
function Footer() {
  return (
    <div className='footer '> 
    <div className=' box'>
       <ul className='bottom-lines'>
        <li>
        Google Play
        </li>
        <li>
        App Store
        </li>
       </ul>
    </div>
    <div  className=' box'>
        <ul className='bottom-lines'>
            <li>Developer</li>
            <li>Terms & Condition
        </li>
        </ul>
    </div>
    <div  className=' box'>
       <ul className=' bottom-lines-right'>
        <li> Language</li>
       </ul>
    </div>
    </div>
  )
}

export default Footer