import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import "./i18n/i18n";
import { BoosterClient } from './services/booster-service';
import { ApolloProvider } from '@apollo/client';
import { AuthService } from "./services/auth-service";

AuthService.initialize()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={BoosterClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
