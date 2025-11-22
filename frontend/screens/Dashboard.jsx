import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Create Campaign" description="Start a new campaign for local influencers">
          <Button text="Create" onClick={() => navigate('/campaign-create')} />
        </Card>

        <Card title="View Tasks" description="Check out tasks available for influencers">
          <Button text="Tasks" onClick={() => navigate('/tasks')} />
        </Card>

        <Card title="Wallet" description="Check your balance and payouts">
          <Button text="Wallet" onClick={() => navigate('/wallet')} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
