import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <Router>
        <App />
      </Router>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
