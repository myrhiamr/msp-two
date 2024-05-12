import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Head from "./Components/Head";
import Bouquets from "./Components/Bouquets";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
     <h1>MILESTONE PROJECT 2 </h1>
     <Navbar />
      <Head />
      <Bouquets />
      <Reviews />
      <Footer />
     
    </div>
  );
}


export default App;