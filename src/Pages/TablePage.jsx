import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './TablePage.css'

const TablePage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleData = async () => {
        try {
            const response = await axios.get('https://login-backend-373l.onrender.com/api/allUsers');
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
    };

    return (
        <div>
            <h1>All Users Data</h1>
            <button onClick={handleLogout}>Logout</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Profile Picture</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.pic && <img src={user.pic} alt="Profile" style={{ width: '50px', height: '50px' }} />}
                            </td>
                            <td>{user.DOB}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;