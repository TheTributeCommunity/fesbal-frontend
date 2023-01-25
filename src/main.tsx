import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewFamilyMember from './pages/NewFamilyMember';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewFamilyMember />
  </React.StrictMode>
);