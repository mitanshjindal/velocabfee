import React from 'react';
import './css/About.css'; 
// import Navbar from './Navbar';
import a1 from "../assets/images/2nd.png"
import a2 from "../assets/images/1st.png"
import a3 from "../assets/images/3rd.png"
import a4 from "../assets/images/about.jpeg"

const About = () => {
    return (
        <section id="about-us" className="about-section">
            {/* <Navbar/> */}
            <div className="hero-image">
                <img style={{borderRadius:'0%'}} src={a4} alt="About Us" />
            </div>
            <div className="content">
                <h1>About Us</h1>
                <p>Global mobility ecosystem driving communities forward</p>
                <div className="stats">
                    <div className="stat-item">
                        <img src={a2} alt="100+ cities" />
                        <h3>100+ cities</h3>
                        <p>Across India</p>
                    </div>
                    <div className="stat-item">
                        <img src={a1} alt="5 lacs+ yearly rides" />
                        <h3>5 lacs+ yearly rides</h3>
                        <p>Booked by our riders every year</p>
                    </div>
                    <div className="stat-item">
                        <img src={a3} alt="7 crore+ KM covered" />
                        <h3>7 crore+ KM covered</h3>
                        <p>Distance covered till this year since our launch</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
