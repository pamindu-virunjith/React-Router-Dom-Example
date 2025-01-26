import React from 'react'
import Items from './Items'

function Nav() {
  return (
    <>
    <div className="nav-bar">
        <Items url = '/' text= 'Home'/>
        <Items url = '/about' text= 'About'/>
        <Items url = '/gallery' text= 'Gallery'/>
        <Items url = '/contactus' text= 'Contact Us'/>
    </div>
    </>
  )
}

export default Nav