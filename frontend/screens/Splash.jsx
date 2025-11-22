import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-50 p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Klikz / InfluenceHub</h1>
      <p className="mb-6 text-center text-gray-700">
        Hyperlocal micro-influencer marketplace
      </p>
      <Button text="Get Started" onClick={() => navigate('/dashboard')} />
    </div>
  );
};

export default Splash;
