import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import logo from '../../logo.svg'
import styles from './index.scss'
import Status from '../status'
import Login from '../auth/login'
import SignUp from '../auth/signup'

export class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign Up</Link>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Status />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </header>
      </div>
    )
  }
}

export default App
