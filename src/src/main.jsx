import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './assets/styles/normalize.css'
import './assets/styles/scroll-design.css'

import { LanguageContextProvider } from './context/Language.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>,
)
