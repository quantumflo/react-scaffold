import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer test="first"/>
    </div>
  );
}

export default App;


