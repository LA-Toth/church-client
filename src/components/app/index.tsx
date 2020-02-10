import React from 'react'
import { Route, Switch } from 'react-router-dom'
import logo from '../../logo.svg'
import styles from './index.scss'
import Status from '../status'
import Login from '../auth/login'
import SignUp from '../auth/signup'
import MainMenu from '../mainmenu'

export class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <MainMenu />
        <div className="container">
          <header className={styles.appHeader}>
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
      </div>
    )
  }
}

export default App
