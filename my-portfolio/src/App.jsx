import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header welcomeMessage="Welcome to my portfolio!" />
      <Profile photo="your_photo_url.jpg" title="Frontend Developer" bio="Short bio about yourself." />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;