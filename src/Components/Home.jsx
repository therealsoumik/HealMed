import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import Navbar from './Navbar';
import './Home.css';

import rg from 'C:/Users/godli/OneDrive/Desktop/HELPMED/healmed/src/depression.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="hero-quote">Your health is your wealth. <br /> Invest in it wisely.</h2>
          <p className="hero-description">Remember, healing is a process, and with time, patience, and resilience, you can overcome the shadows of anxiety and depression, rediscovering the light within you.</p>
        </div>
        <img src={rg} alt="Background" className='hero-image' />
        <Link to="/chatnow"> {/* Use Link component to navigate to "/chatnow" */}
          <button>Chat Now</button>
        </Link>
      </div>
      <div className="bottom-section">
        <div className="social-handles">
          <a href="https://www.instagram.com/healmed_app" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/healmed_app" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/healmed_app" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt="Twitter" />
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Soumik Chakraborty. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
