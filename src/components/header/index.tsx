import React, { Component } from 'react'
import Brand from './brand'
import NavBar from './navbar'
import { AuthInfo } from '../../types/common'

type HeaderProps = {
  title: string
  subtitle: string
  authInfo: AuthInfo
}

type HeaderState = {
  sticky: boolean
}

export class Header extends Component<HeaderProps, HeaderState> {
  state = {
    sticky: false,
  }

  constructor(props) {
    super(props)
    // eslint-disable-next-line immutable/no-mutation
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const element = document.getElementById('navbar-brand')
    const elementBottom = element ? element.getBoundingClientRect().bottom : 0

    this.setState({ sticky: elementBottom <= 0 })
  }

  render() {
    const { title, subtitle, authInfo } = this.props
    const { sticky } = this.state
    return (
      <div>
        <Brand title={title} subtitle={subtitle} />
        <NavBar sticky={sticky} authInfo={authInfo} />
      </div>
    )
  }
}

export default Header
