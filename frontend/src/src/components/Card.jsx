import React from 'react';

const Card = ({ title, description, children }) => (
  <div className="bg-white shadow-md rounded p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="text-gray-600 mb-2">{description}</p>
    {children}
  </div>
);

export default Card;
