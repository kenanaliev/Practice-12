import React from "react";
import "./index.scss";

const RegisterSection = () => {
  return (
    <div>
      <section id="register">
        <div className="left-part">
          <h2>Register now and get a discount 50% discount until 1 January</h2>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
          <button>REGISTER NOW</button>
        </div>

        <div className="right-part">
          <h2>Search for your course</h2>
          <div className="input-elements">
           
            <input type="text" placeholder="course name" />
            <input type="text" placeholder="category" />
            <input type="text" placeholder="degree" />
          </div>

          <button>search course</button>
        </div>
      </section>
    </div>
  );
};

export default RegisterSection;
