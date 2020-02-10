import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './components/app'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
