import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
  ];

  return (
    <footer>
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url}>{link.name}</a>
      ))}
      <p>© {new Date().getFullYear()} Your Name</p>
    </footer>
  );
};

export default Footer;