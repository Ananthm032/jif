import React from 'react'
import "./Topbar.css"
import Img from "../Image/image 5.png"
import {Box} from "@mui/material"
function Topbar() {
  return (
  
  <div className='top'> 
   <div className='top-contain'>
     <div className='top-right'>
      <div className='img'>
        <img src={Img} alt='inocyx' />
        <h1>INOCYX</h1>
      </div>
      <div className='admin'>
      <p>Admin</p>
      </div>
    </div>
    <div className='top-left'>
    <img src="https://thumbs.dreamstime.com/b/preference-icon-website-design-desktop-envelopment-apps-development-premium-pack-preference-vector-glyph-flat-icon-163390853.jpg" width='40px' height='40px'/>
    </div>
   </div>
  </div>
  
  )
}

export default Topbar