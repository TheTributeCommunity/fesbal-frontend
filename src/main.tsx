import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import './i18n/i18n'
import { BoosterClient } from './services/booster-service'
import { ApolloProvider } from '@apollo/client'
import { AuthService } from './services/auth-service'
import { BrowserRouter as Router } from 'react-router-dom'

AuthService.initialize()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={BoosterClient}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
)
