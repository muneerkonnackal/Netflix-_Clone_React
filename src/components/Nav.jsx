import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show ,setShow] =useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img style={{background:"none"}} width={"150px"} src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="no-image" />
    </div>
  )
}

export default Nav