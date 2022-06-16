import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
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
     <Portfolio></  Portfolio>
     <Testimonials></Testimonials>
     
     <footer></footer> 
     <Services></Services>
     <Contact></Contact>
    </div>
  );
}

export default App;
