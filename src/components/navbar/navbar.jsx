import { useState } from 'react'
import './navbar.css'
export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu(){
        setShowMenu(!showMenu)
    }
  return (

    <>
    <div className="navbar-container">
    
    <div className="logo">Logo</div>

     <ul className={showMenu ? "items-container active": 'items-container'}>

        <li><a href="/">Home</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><a href="/">Contact</a> </li>
    </ul>

     <i onClick={toggleMenu} className={showMenu ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>

    </div>
    </>
  )
}
