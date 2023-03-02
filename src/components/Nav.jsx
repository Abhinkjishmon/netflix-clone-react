import React, { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.screenY>500){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  },[])
  console.log('show',show);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img  className='nav_logo'
        src="https://andrewjamesspooner.com/wp-content/uploads/2019/06/netflix-logo-e1536243210766-1024x284.png" alt="netflix logo" />
    </div>
  )
}

export default Nav