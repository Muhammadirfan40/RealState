import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const res = await axios.get('http://localhost:5000/api/properties');
            setProperties(res.data);
        };
        fetchProperties();
    }, []);

    return (
        <div>
            <h2>Property Listings</h2>
            <ul>
                {properties.map(property => (
                    <li key={property._id}>{property.title} - ${property.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
