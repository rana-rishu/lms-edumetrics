import { useEffect, useState } from 'react';
import './Home.css';
import googleLogo from '/assets/images/google.png';
import fireit from '/assets/images/fire-it.png';
import Footer from './Footer';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = ({ setIsLoggedIn }) => {

    const { googleSignIn , user} = UserAuth();
    const navigate = useNavigate()

const handleGoogleSignIn = async () => {
    try{
    await googleSignIn();
    }
    catch (error){
        console.log(error)
    }
};

useEffect( () => {
 if(user != null){
    navigate('/dashboard')
 }

},[user , navigate])

return (
    <div className="home-container">
        <section className="hero-section">
    <div className="hero-split">
        <div className="hero-form">
            <div className="login-container">
                <h2>Welcome Back!</h2>
                <h3>Navigate Your College Journey with Confidence.</h3>
                <p>Sign in Yourself to start the Journey</p>

                <button className='googlesigninbutton' onClick={handleGoogleSignIn}>
         <img src={googleLogo} alt="Google Logo" style={{ width: '20px', marginRight: '8px' }} />
         Sign in with Google
       </button>
            </div>
        </div>
        <div className="hero-video">
            <video autoPlay  muted playsInline>
                <source src="/assets/videos/animatedvedio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
        </div>
    </div>
</section>

<section className="howitworks">     
    <div className="how-it-works">
        <span className="how-it-works-a">  
        <img src={fireit} alt="fire Logo" style={{ width: '20px', marginRight: '8px' }} />
             <p className="how-it-works-text">How it works</p>
        </span>
    </div>

    <div className="features-grid">
                <div className="feature-card">
                    <i className="fas fa-chart-line"></i>
                    <h3>Secure Authentication</h3>
                    <p>Advanced authentication ensures safe access while maintaining anonymity</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-users"></i>
                    <h3>Anonymous Feedback</h3>
                    <p>Share honest college reviews anonymously without revealing your identity</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-brain"></i>
                    <h3>Customizable Rating</h3>
                    <p>Rate colleges on personalized metrics like faculty, infrastructure, and placements</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-shield-alt"></i>
                    <h3>College Comparison</h3>
                    <p>Compare colleges side by side using ratings and detailed reviews</p>
                </div>
            </div>


</section>

        <section className="features-section">
            <h2>Key Features</h2>
            <div className="features-grid">
                <div className="feature-card">
                    <i className="fas fa-chart-line"></i>
                    <h3>Real-time Analytics</h3>
                    <p>Track performance metrics and progress in real-time</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-users"></i>
                    <h3>Collaborative Learning</h3>
                    <p>Foster engagement through interactive tools</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-brain"></i>
                    <h3>Smart Insights</h3>
                    <p>AI-powered recommendations for improvement</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-shield-alt"></i>
                    <h3>Secure Platform</h3>
                    <p>Enterprise-grade security for your data</p>
                </div>
            </div>
        </section>

        <section className="stats-section">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>10k+</h3>
                    <p>Active Users</p>
                </div>
                <div className="stat-card">
                    <h3>95%</h3>
                    <p>Success Rate</p>
                </div>
                <div className="stat-card">
                    <h3>24/7</h3>
                    <p>Support</p>
                </div>
                <div className="stat-card">
                    <h3>50+</h3>
                    <p>Institutions</p>
                </div>
            </div>
        </section>
            <Footer/>
    </div>
);
};

export default Home;

