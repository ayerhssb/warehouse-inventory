import React from 'react';

const ItemDetails = ({ item }) => (
    <div>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price}</p>
        <p>Status: {item.status}</p>
        <p>Brand: {item.brand}</p>
        {/* Display other attributes here */}
    </div>
);

export default ItemDetails;
