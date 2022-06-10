import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import portfolio from './components/portfolio/portfolio';
import testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/Contact';
import footer from './components/footer/footer';
import Services from './components/services/Services';


function App() {
  return (
    <div>
     <Header></Header>
    <Nav></Nav>
     <About></About>
     <Experience></Experience>
     <portfolio></portfolio>
     <testimonials></testimonials>
     <Contact></Contact>
     <footer></footer> 
     <Services></Services>
    </div>
  );
}

export default App;
