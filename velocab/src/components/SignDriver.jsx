import React from 'react';
import './css/SignDriver.css'; 
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const SignDriver = () => {
    return (
        <>
        <div className="bodys">
            <Navbar/>
        <div className="signup-container">
            <h2>Sign Up as a Driver</h2>
            <form id="driverSignupForm" enctype="multipart/form-data">
                
                <fieldset>
                    <legend>Personal Information</legend>
                    <div className="onein">
                        <div className="onup">
                    <label className='latexts' htmlFor="name">Full Name<span className="required">*</span></label>
                    <input className='insign' type="text" id="name" name="name" required />
                    </div>
                    <div className="oneup">

                    
                    <label className='latexts' htmlFor="email">Email<span className="required">*</span></label>
                    <input className='insign' type="email" id="email" name="email" required />
                    </div>
                    </div>
                    <label className='latexts' htmlFor="phone">Phone Number<span className="required">*</span></label>
                    <input className='insign' type="tel" id="phone" name="phone" required />

                    <label className='latexts' htmlFor="address">Address<span className="required">*</span></label>
                    <input className='insign' type="text" id="address" name="address" required />
                </fieldset>

                <fieldset>
                    <legend>Vehicle Information</legend>

                    <label className='latexts' htmlFor="carModel">Car Model<span className="required">*</span></label>
                    <input className='insign' type="text" id="carModel" name="carModel" required />

                    <label className='latexts' htmlFor="carYear">Year of Manufacture<span className="required">*</span></label>
                    <input className='insign' type="number" id="carYear" name="carYear" min="2000" max="2024" required />

                    <label className='latexts' htmlFor="licensePlate">License Plate Number<span className="required">*</span></label>
                    <input className='insign' type="text" id="licensePlate" name="licensePlate" required />
                </fieldset>

                <fieldset>
                    <legend>License Information</legend>
                    <label className='latexts' htmlFor="licenseNumber">Driver’s License Number<span className="required">*</span></label>
                    <input className='insign' type="text" id="licenseNumber" name="licenseNumber" required />

                    <label className='latexts' htmlFor="licenseExpiry">License Expiration Date<span className="required">*</span></label>
                    <input className='insign' type="date" id="licenseExpiry" name="licenseExpiry" required />
                </fieldset>

                <fieldset>
                    <legend>Upload Documents</legend>
                    <label className='latexts' htmlFor="driverLicense">Driver’s License<span className="required">*</span></label>
                    <input className='insign' type="file" id="driverLicense" name="driverLicense" accept="image/*" required />

                    <label className='latexts' htmlFor="vehicleRegistration">Vehicle Registration<span className="required">*</span></label>
                    <input className='insign' type="file" id="vehicleRegistration" name="vehicleRegistration" accept="image/*" required />

                    <label className='latexts' htmlFor="proofOfInsurance">Proof of Insurance<span className="required">*</span></label>
                    <input className='insign' type="file" id="proofOfInsurance" name="proofOfInsurance" accept="image/*" required />
                </fieldset>

                <fieldset>
                    <legend>Terms and Conditions</legend>
                    <input className='insign' type="checkbox" id="terms" name="terms" required />
                    <label className='latexts' htmlFor="terms">I agree to the <Link to="/terms">terms and conditions</Link><span className="required">*</span></label>
                </fieldset>
                <button type="submit">Sign Up Now</button>
                <div id="message"></div>
            </form>
        </div>
        </div>
        </>
    );
};

export default SignDriver;
