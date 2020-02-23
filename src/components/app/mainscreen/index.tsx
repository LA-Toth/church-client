import React from 'react'
import { Route, Switch } from 'react-router-dom'
import logo from '../../../logo.svg'
import styles from './index.scss'
import Status from '../../status'
import Login from '../../auth/login'
import SignUp from '../../auth/signup'
import Header from '../../header'
import SplashScreen from '../splashscreen'
import classnames from 'classnames'
import Users from '../../users'
import BlogEntryEditor from '../../blogentryeditor'
import { AuthInfo } from '../../../types/common'

export type MainScreenProps = {
  title: string
  subtitle: string
  authInfo: AuthInfo
}

export class MainScreen extends React.Component<MainScreenProps> {
  render() {
    const { title, subtitle, authInfo } = this.props

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <Header title={title} subtitle={subtitle} authInfo={authInfo} />
        </header>
        <div className={classnames(styles.content, 'container')}>
          <Switch>
            <Route exact path="/">
              <img src={logo} className={styles.appLogo} alt="logo" />
              <p>
                {process.env.REACT_APP_TEST_VAR}
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
              <Status />
            </Route>
            <Route path="/login">
              <Login authInfo={authInfo} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/splash">
              <SplashScreen />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/editor">
              <BlogEntryEditor title="Sample Title" content="<p>fdsfasdajklfdskjla sdaf sdf <b>dsf sdf</b></p>" />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default MainScreen
