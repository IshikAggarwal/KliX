import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const tasks = [
  { id: 1, title: "Instagram Story Promo", description: "Promote a local cafe via a story" },
  { id: 2, title: "Product Review Reel", description: "Review new skincare product" },
  { id: 3, title: "Visit & Post", description: "Visit store and post on social media" },
];

const TaskFeed = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Available Tasks</h1>
      {tasks.map(task => (
        <Card key={task.id} title={task.title} description={task.description}>
          <Button text="Accept Task" onClick={() => alert(`Accepted task ${task.id}`)} />
        </Card>
      ))}
    </div>
  );
};

export default TaskFeed;
