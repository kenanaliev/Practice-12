import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav id='nav'>
            <div className="left">
                <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
                <h3>COURSE</h3>
            </div>
            <div className="between">
                <ul>
                    <li> <NavLink to={"/"}>Home</NavLink></li>
                    <li>ABOUT US</li>
                    <li>COURSES</li>
                    <li>ELEMENTS</li>
                    <li>NEWS</li>
                    <li>CONTACT</li>
                    <li> <NavLink to={"/Add"}>ADD</NavLink></li>
                    <li>DETAIL</li>
                </ul>
            </div>
            <div className="right">
            <i class="fa-solid fa-phone-volume"></i>
            <p>+43 4566 7788 2457</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar