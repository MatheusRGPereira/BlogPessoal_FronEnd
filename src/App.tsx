import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Navbar from './components/estaticos/Navbar/Navbar';
import Footer from './components/estaticos/Footer/Footer'
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        
    
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
