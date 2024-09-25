// src/components/AddProperty.js
import React, { useState } from 'react';
import axios from 'axios';


const AddProperty = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        try {
            await axios.post('http://localhost:5000/api/properties',
                { title, description, price, location },
                { headers: { Authorization: `Bearer ${token}` } } // Include token in headers
            );
            history.push('/'); // Redirect to property list after adding
        } catch (error) {
            console.error("Error adding property:", error);
        }
    };

    return (
        <div>
            <h2>Add Property</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Property</button>
            </form>
        </div>
    );
};

export default AddProperty;
