import React from 'react'
import { Route, Switch } from 'react-router-dom'
import logo from '../../../logo.svg'
import styles from './index.scss'
import Status from '../../status'
import Login from '../../auth/login'
import SignUp from '../../auth/signup'
import MainMenu from '../../mainmenu'
import SplashScreen from '../splashscreen'
import classnames from 'classnames'
import Users from '../../users'

export type MainScreenProps = {
  title: string
  subtitle: string
}

export class MainScreen extends React.Component<MainScreenProps> {
  render() {
    const { title, subtitle } = this.props

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <MainMenu title={title} subtitle={subtitle} />
        </header>
        <div className={classnames(styles.content, 'container')}>
          <Switch>
            <Route exact path="/">
              <img src={logo} className={styles.appLogo} alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
              <Status />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/splash">
              <SplashScreen />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default MainScreen
