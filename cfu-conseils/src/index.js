import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import reportWebVitals from './reportWebVitals.js';
import Header from './components/Header.jsx';
import HeaderMobile from './components/HeaderMobile.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ComptaGestion from './pages/ComptaGestion.jsx';
import ComptaSociete from './pages/ComptaSociete.jsx';
import Conseil from './pages/Conseil.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeaderMobile />
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/comptabilite-gestion" element={<ComptaGestion />}/>
        <Route path = "/comptabilite-societe" element={<ComptaSociete/>}/>
        <Route path="/conseil" element={<Conseil/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
