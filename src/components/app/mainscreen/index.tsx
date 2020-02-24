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
import Preachings from "../../preachings"
import Posts from "../../posts"

export type MainScreenProps = {
  title: string
  subtitle: string
  authInfo: AuthInfo
}

export class MainScreen extends React.Component<MainScreenProps> {
  render() {
    const { title, subtitle, authInfo } = this.props

    return (
      <>
        <header id="header" className={styles.header}>
          <Header title={title} subtitle={subtitle} authInfo={authInfo} />
        </header>
        <div className={classnames(styles.content, 'container')}>
          <Switch>
            <Route exact path="/">
              <img src={logo} className={styles.appLogo} alt="logo" />
              <Status />
              <Posts/>
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
            <Route path="/editor">
              <BlogEntryEditor title="Sample Title" content="<p>fdsfasdajklfdskjla sdaf sdf <b>dsf sdf</b></p>" />
            </Route>
            <Route path="/preachings">
              <Preachings />
            </Route>
            {authInfo.loggedIn && this.renderAdminRoutes()}
          </Switch>
        </div>
      </>
    )
  }

  private renderAdminRoutes() {
    return (
      <>
        <Route path="/admin/users">
          <Users />
        </Route>{' '}
        <Route path="/admin/blogs">
          <Users />
        </Route>{' '}
        <Route path="/admin/pages">
          <Users />
        </Route>{' '}
        <Route path="/admin/categories">
          <Users />
        </Route>
      </>
    )
  }
}

export default MainScreen
