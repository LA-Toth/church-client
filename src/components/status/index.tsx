import React from 'react'
import styles from './index.scss'

type StatusState = {
  success: boolean | undefined
}

export class Status extends React.Component<{}, StatusState> {
  state = {
    success: undefined,
  }

  componentDidMount() {
    const url = location.hostname.includes('.lvh.me') ? 'http://api.lvh.me:3000' : 'http://api.laszloattilatoth.me/'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ success: data.success }))
  }

  render() {
    return <div className={styles.status}>Status: {this.renderStatus()}</div>
  }

  renderStatus() {
    const { success } = this.state
    if (success === undefined) {
      return <span>Who knows</span>
    } else if (success === true) {
      return <span>SuCeSs! Yeah</span>
    } else {
      return <span>Oh no></span>
    }
  }
}

export default Status
