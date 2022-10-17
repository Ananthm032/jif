import React,{useState,useEffect} from 'react'

function Body() {
    const [load, setLoad] = useState(false);
  
  useEffect(()=>{
    setLoad(true)
    setTimeout(()=>{
      setLoad(false)
    },4300)
  },[])

  return (
    <div>
        <div>
 {
  load? '' : <div className='div'>

<img src="https://i.ytimg.com/vi/k0qMsu8x4Tk/maxresdefault.jpg" alt='765' className='img'/>

 </div>}
    </div>
    </div>
  )
}

export default Body