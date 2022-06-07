import './App.css';
import React from 'react';
import Header from './components/header/Header';
import nav from './components/nav/nav';
import about from './components/about/about';
import experience from './components/experience/experience';
import portfolio from './components/portfolio/portfolio';
import testimonials from './components/testimonials/testimonials';
import contact from './components/contact/contact';
import footer from './components/footer/footer';

function App() {
  return (
    <div>
     <Header></Header>
     {/* <nav/>
     <about></about>
     <experience></experience>
     <portfolio></portfolio>
     <testimonials></testimonials>
     <contact></contact>
     <footer></footer> */}
    </div>
  );
}

export default App;
