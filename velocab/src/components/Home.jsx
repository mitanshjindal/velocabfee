import React from 'react';
import './css/Home.css'; 
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            backgroundImage: 'url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/07/route-marked-on-a-map.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            margin: 0,
            padding: 0,
        }}>
            
            <Navbar/>
            <h1 id="where">WHERE TO GO?</h1>
            <h1 id="search">SEARCH HERE:</h1>
            <Link to="/book" style={{ marginLeft: '75%', marginBottom: '20px' }} target="_blank" rel="noopener noreferrer">
                <button style={{ backgroundColor: 'red', borderRadius: '15px' }}>Book Here <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
        </div>
    );
};

export default Home;
