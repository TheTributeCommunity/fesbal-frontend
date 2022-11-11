import React from 'react';
import ReactDOM from 'react-dom/client';
import { StartingPage } from './pages/StartingPage.jsx';
import { LogInRegister } from './pages/LogInRegister.jsx';
import { RegisterLegal } from './pages/RegisterLegal.jsx';
import { RegisterName } from './pages/RegisterName.jsx';
import { RegisterBirthDate } from './pages/RegisterBirthDate.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path = '/'
        element = {<StartingPage/>} />
      <Route
        path = '/home'
        element = {<LogInRegister/>} />
      <Route
        path = '/RegisterTermsConditions'
        element = {<RegisterLegal/>} />
      <Route
        path = '/RegisterName'
        element = {<RegisterName/>} />
      <Route
        path = '/RegisterBirthDate'
        element = {<RegisterBirthDate/>} />
      <Route 
        path = '*'
        element = {<div>Error 404 Page not found</div>}/>
    </Routes>
  </BrowserRouter>
);