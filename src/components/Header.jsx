import React from 'react';

const Header = ({ welcomeMessage }) => {
  const quotes = ["Stay positive!", "Keep coding!", "You got this!"];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header>
      <h1>Your Name</h1>
      <p>{welcomeMessage || randomQuote}</p>
    </header>
  );
};

export default Header;