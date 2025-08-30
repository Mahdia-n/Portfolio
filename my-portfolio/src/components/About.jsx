import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const funFacts = [
    "I love hiking.",
    "I'm a coffee enthusiast.",
    "I enjoy coding at night."
  ];

  return (
    <div>
      <h2>About Me</h2>
      <p>I'm learning React and aiming to become a full-stack developer.</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
      {showMore && (
        <ul>
          {funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default About;