import React, { useState } from 'react';
import './css/Feedback.css';
import Navbar from './Navbar';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            alert("Please fill Name Section");
            return;
        }
        if (email === '') {
            alert("Please fill Email Section");
            return;
        }
        if (feedback === '') {
            alert("Please give your Feedback");
            return;
        }
        alert("Form Submitted");
        
    };

    const showFeedbackMessage = (emoji, message) => {
        setFeedbackMessage(`${emoji} ${message}`);
    };

    return (
        <>
            <Navbar/>
        <div className="containerf">
            <h2><u className='feedhead'>Feedback Form</u></h2>
            <form onSubmit={handleFeedbackSubmit}>
                <label htmlFor="name">Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Write Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Write Your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="feedback">Feedback:</label>
                <textarea
                    id="feedback"
                    name="feedback"
                    rows="4"
                    placeholder="Give Your Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                ></textarea>

                <button type="button" onClick={() => showFeedbackMessage('😄', 'Awesome!')}>😄</button>
                <button type="button" onClick={() => showFeedbackMessage('😐', 'Okay')}>😐</button>
                <button type="button" onClick={() => showFeedbackMessage('😢', 'Not Good')}>😢</button>

                <div id="feedback-message" style={{ marginTop: '10px' }}>
                    {feedbackMessage && <p>{feedbackMessage}</p>}
                </div>

                <button type="submit" style={{ color: 'black' }}>SUBMIT FEEDBACK</button>
            </form>
        </div>
        </>
    );
};

export default Feedback;
