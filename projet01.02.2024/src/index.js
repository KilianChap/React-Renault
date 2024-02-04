import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Alert1 from './alert.js';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import voitures from './voitures.json';
import Navbar from './Navbar.js';
import VoitureListe from './Voitures.js';
import YoutubeComponent from './Youtube.js';
import Cars from './Cars';


console.log(voitures);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Alert1 />
    <Cars />
    <YoutubeComponent />
  </React.StrictMode>

);
reportWebVitals();
