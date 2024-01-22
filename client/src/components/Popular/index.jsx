import React, { useEffect, useState } from 'react'
import "./index.scss"

const Popular = () => {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/");
      setdata(res.data);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
     <section id='popular-section'>
     <div className="top-title">
        <h2>Popular Courses</h2>
     </div>

     <div className="images">
        <div className="left-side">
            <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="" />
            <h4>A complete guide to design</h4>
        </div>
        <div className="between-point">
            <img src="https://preview.colorlib.com/theme/course/images/course_2.jpg" alt="" />
            <h4>Beginners guide to HTML</h4>
        </div>

        <div className="rigth-side">
            <img src="https://preview.colorlib.com/theme/course/images/course_3.jpg" alt="" />
            <h4>Advanced Photoshop</h4>
        </div>
     </div>


     </section>
  )
}

export default Popular