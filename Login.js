import React, { useState } from 'react';
import '../App.css'; 

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false); // Toggle for sign-up

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (email && password) {
            if (isSignUp) {
                // Handle sign-up logic here
                console.log('Signing up:', { email, password });
                // Example: Call your sign-up API here
            } else {
                // Handle login logic
                console.log('Logging in:', { email, password });
                onLogin(); 
            }
        }
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic here
        console.log('Signing in with Google...');
        onLogin(); // Call onLogin after successful sign-in
    };

    return (
        
        <div className="login-container">
            
            <div className="image-side">
                
                <h1>Welcome to E-Kebele</h1>
                <p>Your all-in-one solution for digital workspace</p>
                <img src="photo.jpg" alt="Welcome" />
            </div>
            <div className="form-side">
                <header className="header">
                    <div className="logo">
                        <h1>E-Kebele</h1>
                    </div>
                </header>
                <h2>{isSignUp ? 'Create an Account' : 'Welcome back'}</h2>
                <p>{isSignUp ? 'Please enter your details to sign up' : 'Please enter your details to log in'}</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <p className="forgot-password"><a href="#">Forgot password?</a></p>
                    <button type="submit" className="login-button">{isSignUp ? 'Sign Up' : 'Log In'}</button>
                    <div className="social-login">
                        <p>or continue with<br /></p>
                        <button type="button" className="social-button google" onClick={handleGoogleSignIn}>Google</button>
                    </div>
                    <p className="footer-text">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"} 
                        <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
                            {isSignUp ? ' Log in' : ' Sign up'}
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;