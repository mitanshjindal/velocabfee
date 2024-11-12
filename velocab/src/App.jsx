
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'; 
import SignDriver from './components/SignDriver';
import Feedback from './components/Feedback';
import Touch from './components/Touch';
import Login from './components/Login';
import Terms from './components/Terms';
import Payment from './components/Payment';
import Book from './components/Book';
import Last from './components/Last';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />  
          <Route path="about" element={<About />} />
          <Route path="signdriver" element={<SignDriver />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="touch" element={<Touch />} />
          <Route path="login" element={<Login />} />
          <Route path="terms" element={<Terms />} />
          <Route path="payment" element={<Payment />} />
          <Route path="last" element={<Last />} />
          <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
