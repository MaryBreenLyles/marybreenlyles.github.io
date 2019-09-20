import React from 'react';
import Sidebar from './components/sidebar.jsx'
import About from './components/about.jsx'
import Introduction from './components/introduction.jsx'

import './App.css';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div  id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
        </div>
      </div>
    </div>
  );
}

export default App;
