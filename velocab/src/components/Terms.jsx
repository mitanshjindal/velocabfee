import React from 'react';
import './css/Terms.css'; 
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <p style={{color:'black'}}>Welcome to Velocab! These terms and conditions outline the rules and regulations for the use of our platform. Please read them carefully.</p>

            <h2>1. Eligibility</h2>
            <p>You must be at least 21 years old and possess a valid driver’s license. Your vehicle must be insured and meet all legal requirements for operation in your region.</p>

            <h2>2. Background Check</h2>
            <p>By signing up, you consent to a background check and agree to provide accurate information during the signup process. You understand that false information may result in disqualification or termination.</p>

            <h2>3. Insurance and Liability</h2>
            <p>You are responsible for maintaining valid insurance for your vehicle. Velocab is not liable for accidents or damages while you provide services.</p>

            <h2>4. Conduct</h2>
            <p>Drivers must follow all traffic laws, act professionally, and treat passengers with respect. Any discriminatory behavior or misconduct will result in immediate termination of your driver status.</p>

            <h2>5. Compensation and Payments</h2>
            <p>Compensation will be provided in accordance with the fare structure set by Velocab. Payments are made through our platform, and you agree to the commission structure in place.</p>

            <h2>6. Termination</h2>
            <p>Velocab reserves the right to suspend or terminate your account if you violate these terms, or for any other reason deemed necessary by the platform.</p>

            <h2>7. Data Privacy</h2>
            <p>We take your privacy seriously. By using our platform, you agree to the collection and use of your personal data as outlined in our Privacy Policy.</p>

            <h2>8. Agreement</h2>
            <p>By using our platform and submitting your driver application, you agree to comply with these terms and conditions.</p>

            <p>If you have any questions about these terms, please contact us at +91 9416215792 or velocab@support.com.</p>

            <Link to="/signdriver" className="back-link">Go Back to Sign-Up Page</Link>
        </div>
    );
};

export default Terms;
