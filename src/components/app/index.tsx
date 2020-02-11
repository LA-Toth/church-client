import React from 'react'
import SplashScreen from './splashscreen'
import MainScreen from './mainscreen'

type AppProps = {}

type AppState = {
  loaded: boolean
}

export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    loaded: true,
  }

  render() {
    const { loaded } = this.state
    return loaded ? <MainScreen /> : <SplashScreen />
  }
}

export default App
