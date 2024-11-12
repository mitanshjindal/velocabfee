import React from 'react';
import './css/Home.css'; 
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="top-nav">
            <Link to="/" className="abc">HOME</Link>
            <Link to="/last" className="abc">YOUR RIDES</Link>
            <Link to="/about" className="abc">ABOUT US</Link>
            <Link to="/touch" className="abc">GET IN TOUCH</Link>
            <Link to="/feedback" className="abc">FEEDBACK</Link>
            <button type="submit" style={{ marginLeft: '100px', marginTop: '10px', backgroundColor: 'black' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>SignIn/SignUp</Link>
            </button>
            <button type="submit" style={{ backgroundColor: 'black', marginLeft: '10px' }}>
                <Link to="/signdriver" style={{ textDecoration: 'none', color: 'white' }}>Signup as driver</Link>
            </button>
        </div>
    );
};

export default Navbar;
