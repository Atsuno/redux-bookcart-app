import React from 'react'
import Example from '../Example'
import logo from './assets/logo.svg'
import './assets/style.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <Example />
    </div>
  </div>
)

export default App
