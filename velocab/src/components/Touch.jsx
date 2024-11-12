import React from 'react';
import './css/Touch.css'; 
import { Link } from 'react-router-dom';

const Touch = () => {
    return (
        <div className='bodyto' style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
            <h1 style={{ fontWeight: 850, fontSize: '40px', color:'white' }}>GET IN TOUCH</h1>
            <div className="containert">
                <div>
                    <p style={{ color: 'red' }}>Mailing Address</p>
                    <p style={{color:'white'}}>26 N Block, Rajpura</p>
                    <p style={{color:'white'}}>Punjab, India 12345</p>
                </div>
                <div style={{ marginLeft: '50%' }}>
                    <p style={{ color: 'red' }}>Give us your Feedback</p>
                    <p>
                        <Link to="/feedback" style={{ color: 'white' }}>Click Here</Link>
                    </p>
                </div>
            </div>
            <br />
            <div>
                <p style={{ color: 'red' }}>Phone Number</p>
                <p style={{color:'white'}}>8058713000</p>
            </div>
            <br />
            <p style={{ color: 'red' }}>Email Address</p>
            <p style={{color:'white'}}>velocab@support.com</p>
            <br />
            <p style={{ color: 'red' }}>Socials</p>
            <p style={{color:'white'}}>@velocab <i className="fa-brands fa-instagram"></i></p>
            <p style={{color:'white'}}>@velocab <i className="fa-brands fa-facebook"></i></p>
            <p style={{color:'white'}}>@velocab <i className="fa-brands fa-x-twitter"></i></p>
        </div>
    );
};

export default Touch;
