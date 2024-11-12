import React, { useState } from 'react';
import './css/Login.css'; 
import Navbar from './Navbar';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (name && email && password) {
            try {
                localStorage.setItem(email.toLowerCase(), password);
                alert('Registration successful!');
                setName('');
                setEmail('');
                setPassword('');
                // Redirect or perform any action after registration
            } catch (error) {
                console.error("Error saving to localStorage:", error);
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        if (email && password) {
            try {
                const storedPassword = localStorage.getItem(email.toLowerCase());
                if (storedPassword === password) {
                    alert('Login successful!');
                    // Redirect or perform any action after login
                } else {
                    alert('Invalid email or password');
                }
            } catch (error) {
                console.error("Error retrieving from localStorage:", error);
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <>
        <Navbar/>
        <div className="bodylo">
        <div className={`containerlo ${isSignUp ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form onSubmit={handleSignUp}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form onSubmit={handleSignIn}>
                    <h1>Sign In</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1 style={{color:'white'}}>Welcome</h1>
                        <p style={{color:'white'}}>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={() => setIsSignUp(false)}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1 style={{color:'white'}}>Welcome</h1>
                        <p style={{color:'white'}}>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={() => setIsSignUp(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Login;
