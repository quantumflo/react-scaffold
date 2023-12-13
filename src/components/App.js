import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import "../App.css";
import { Provider } from 'react-redux';
import appStore from '../utils/redux/AppStore';

const App = () => {
  const isOnline = useOnlineStatus();

  return (
    <Provider store={appStore} >
    <div className='app'>
      <div style={isOnline? {backgroundColor:"green", height: "5px"}: {backgroundColor:"red", height: "5px"}}></div>
      <Header />
      <Outlet />
      <Footer test="first"/>
    </div>
    </Provider>
  );
}

export default App;


