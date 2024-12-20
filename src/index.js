import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Header/>
      <App/> 
      <Footer/>
      </BrowserRouter>
  );


