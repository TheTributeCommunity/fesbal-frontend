import ReactDOM from 'react-dom/client';
import { StartingPage } from './pages/StartingPage';
import { LogInRegister } from './pages/LogInRegister';
import { RegisterLegal } from './pages/RegisterLegal';
import { RegisterName } from './pages/RegisterName';
import { RegisterBirthDate } from './pages/RegisterBirthDate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
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