import React from 'react';
import "../styles/index.css";  // Ensure the CSS file is correctly linked

const Topics = () => {
  // Array of topics that will be dynamically rendered
  const topics = [
    'Website', 'Javascript', 'CSS', 'Mongo DB', 'Azure',
    'Docker', 'GitHub', 'React JS', 'Python'
  ];

  return (
    <div className="topics">
      <h1 className="topics__title">Topics recommended for you</h1>
      <div className="topics__container">
        {topics.map((topic, index) => (
          <p key={index}>{topic}</p>  // Dynamically render each topic
        ))}
      </div>
    </div>
  );
};

export default Topics;
