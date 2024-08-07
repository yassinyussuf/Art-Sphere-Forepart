import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>What makes our platform amazing?</h3>
            <p>
           Welcome to Art-Sphere platform whereby, when people ask us what our work is about, We can only answer “everything!”
            </p>
            <p>
               Get yoursself a chance to interact with our platform and view what our artists have in store for you!
            </p>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
