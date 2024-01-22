import React from 'react'
import "./index.scss"
const Footer = () => {
  return (
    <footer id='footer'>
     <div className="course">
        <div className="logo">
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h2>COURSE</h2>
        </div>
        
        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
     </div>
     <div className="menu">
        <h3>Menu</h3>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>News</li>
            <li>Contact</li>
            
        </ul>
     </div>

     <div className="usefull">
        <h3>Usefull Links</h3>
        <ul>
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Community</li>
            <li>Campus Pictures</li>
            <li>Tuitions</li>
        </ul>
     </div>

     <div className="contact">
        <h3>Contact</h3>
        <ul>
            <li><p>Blvd Libertad, 34 m05200 Arévalo</p></li>
            <li><p> 0034 37483 2445 322</p></li>
            <li><p>hello@company.com</p></li>
        </ul>
     </div>
    </footer>
  )
}

export default Footer