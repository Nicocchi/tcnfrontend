import React from 'react';
import './App.scss';
import TopBar from './Components/Navigation/TopBar';
import Header from './Components/Header';
import NavBar from './Components/Navigation/NavBar';
import HeaderBox from './Components/HeaderBox';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <NavBar />
      <HeaderBox value="Recents" />
    </div>
  );
}

export default App;
