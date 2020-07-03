import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TopBar from './Components/Navigation/TopBar/TopBar';
import Header from './Components/Header/Header';
import NavBar from './Components/Navigation/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <NavBar />
    </div>
  );
}

export default App;
