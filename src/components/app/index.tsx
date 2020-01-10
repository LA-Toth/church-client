import React from 'react'
import logo from '../../logo.svg'
import styles from './index.scss'
import Status from '../status'

export class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Status />
        </header>
      </div>
    )
  }
}

export default App
