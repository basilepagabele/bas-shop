import React from 'react';
// Importez les styles Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importez Popper.js
import Popper from 'popper.js';

// Importez Bootstrap et réglez Popper pour Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom' ;
import NAV from './PRODUITS/nav';

import Rechercher from './PRODUITS/rechercher';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    <NAV />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
