import React from 'react'
import logo from '../../../logo.svg'
import styles from './index.scss'

export class SplashScreen extends React.PureComponent {
  render() {
    return (
      <div className={styles.splashScreen}>
        <img src={logo} className={styles.splashScreenImg} alt="logo" />
      </div>
    )
  }
}

export default SplashScreen
