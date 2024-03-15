import axios from "axios";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [DOB, setDOB] = useState('');
    const [password, setPassword] = useState('');
    const [picLink, setPicLink] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://login-backend-373l.onrender.com/api/register", {
                name,
                email,
                DOB,
                password,
                picLink
            });

            // Reset form fields
            setName('');
            setEmail('');
            setDOB('');
            setPassword('');
            setPicLink('');

            // Show success toast and navigate to login page
            toast.success(response.data.message);
            navigate('/');
        } catch (error) {
            // Handle error
            if (error.response) {
                // Server responded with an error
                toast.error(error.response.data.message);
            } else {
                // Network error or other issues
                toast.error('Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Enter your date of birth"
                        value={DOB}
                        onChange={(e) => setDOB(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Profile Picture Link</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Paste your profile picture link"
                        value={picLink}
                        onChange={(e) => setPicLink(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Register
                </button>
                <Link to='/'>Already have an account? Login here!</Link>
            </form>
        </div>
    );
};

export default RegisterForm;