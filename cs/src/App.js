import React from 'react'
import { Footer, Features, About, Header, Team } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
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