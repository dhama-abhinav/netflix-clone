import React from 'react';
import './App.css';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { RowMovie } from './RowMovie';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <RowMovie />
      <Footer />
     </div>
  );
}

export default App;

//  fetchUrl={}