import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     

import 'bootstrap/dist/css/bootstrap.min.css';
//core
import "primereact/resources/primereact.min.css";                                       
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MentorPage from './components/MentorPage';
import Student from './components/Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create-mentor" element={<MentorPage />} />
      <Route path="/create-student" element={<Student />} />

      </Routes>
      </BrowserRouter>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
