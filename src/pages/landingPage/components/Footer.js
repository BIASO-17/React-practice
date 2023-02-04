import React from 'react'
import "../landingPage.css"
import "../css/footer.css"
function Footer() {
  return (
    <div className='footer border'> 
    <div className='border box'>
       <ul className='bottom-lines'>
        <li>
        Google Play
        </li>
        <li>
        App Store
        </li>
       </ul>
    </div>
    <div  className='border box'>
        <ul className='bottom-lines'>
            <li>Developer</li>
            <li>Terms & Condition
        </li>
        </ul>
    </div>
    <div  className='border box'>
       <ul className='bottom-lines'>
        <li> Language</li>
       </ul>
    </div>
    </div>
  )
}

export default Footer