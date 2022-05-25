import React,{ useEffect } from 'react'
import { Footer, Features, About, Header, Team } from './containers';
import { Navbar } from './components';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (

    <div className='App'>
    <div className='gradient_bg'>
    <Navbar/>
    <Header/>
    </div>
    <About/>
    <Team/>
    <Features/>
    <Footer/>
    </div>
  )
}

export default App