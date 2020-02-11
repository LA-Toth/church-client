import React from 'react'
import { CSSTransition } from 'react-transition-group'
import SplashScreen from './splashscreen'
import MainScreen from './mainscreen'
import styles from './index.scss'

type AppProps = {}

type AppState = {
  loaded: boolean
  title?: string
  subtitle?: string
}

const transition = {
  appear: styles.mainScreenAppear,
  appearActive: styles.mainScreenAppearActive,
}

const splashTransition = {
  exit: styles.splashScreenExit,
  exitActive: styles.mainScreenExitActive,
}


export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    loaded: false,
  }

  componentDidMount() {
    const url = location.hostname.includes('.lvh.me') ? 'http://api.lvh.me:3000' : 'http://api.laszloattilatoth.me/'
    fetch(url + '/site-props')
      .then(response => response.json())
      .then(data => this.setState({ loaded: true, title: data.title, subtitle: data.subtitle }))
  }

  render() {
    const { loaded, title, subtitle } = this.state

    return (
      <div>
        {loaded && (
          <CSSTransition in appear timeout={1000} classNames={transition}>
            <MainScreen title={title!} subtitle={subtitle!} />
          </CSSTransition>
        )}
        <CSSTransition in={!loaded} exit unmountOnExit timeout={400} classNames={splashTransition}>
          <SplashScreen />
        </CSSTransition>
      </div>
    )
  }
}

export default App
