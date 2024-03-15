import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://login-backend-373l.onrender.com/api/login", {
                email,
                password
            });
            const token = response.data.token; // Assuming the token is returned in the response

            // Store token in local storage
            localStorage.setItem('token', token);

            // Redirect to '/table'
            navigate('/table');

            // Show success toast
            toast.success('Welcome', {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong :(");
        }
    };

    return (
        <div className='fullpage'>
            
       
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
                <Link to='/register'>New User? Register Here!!!</Link>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;