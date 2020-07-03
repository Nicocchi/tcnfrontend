import React from 'react';
import './App.scss';
import TopBar from './Components/Navigation/TopBar';
import Header from './Components/Header';
import NavBar from './Components/Navigation/NavBar';
import HeaderBox from './Components/HeaderBox';
import MediaBox from './Components/MediaBox';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <NavBar />
      <div className="App-content">
      <HeaderBox value="Recents" />
      <MediaBox width="300px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
      </div>
    </div>
  );
}

export default App;
