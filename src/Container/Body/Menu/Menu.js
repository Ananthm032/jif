import React,{useEffect,useState} from 'react'
import "./Menu.css"

function Menu() {
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  
return(

<div class="slider">
  {loading? <div class="slide active">
    <div class="panel">
      <div class="top" ></div>
      <div class="bottom"></div>
    </div>
    <div class="center">
    <div id="loader">
  <div id="shadow"></div>
  <div id="box"></div>
</div>
    </div>
  </div>:
   <div class="slide">
   <div class="panel">
     <div class="top" ></div>
     <div class="bottom"></div>
   </div>
   
 </div>}

 </div>
  )
}

export default Menu