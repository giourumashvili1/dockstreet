import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import MenuPage from './Pages/MenuPage';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/' element={<App />} />
      </Routes>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
