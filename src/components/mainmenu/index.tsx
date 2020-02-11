import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Link from './link'
import styles from './index.scss'
import classnames from 'classnames'
import Brand from './brand'

type MainMenuProps = {
  title: string
  subtitle: string
}

type MainMenuState = {
  sticky: boolean
}

export class MainMenu extends Component<MainMenuProps, MainMenuState> {
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
    const { title, subtitle } = this.props
    const { sticky } = this.state
    return (
      <div>
        <Brand title={title} subtitle={subtitle} />
        <Navbar bg="light" className={classnames(styles.navBarTop, sticky && styles.navBarFixed)}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="container">
            <Nav className="mr-auto">
              <Link path="/" label="Home" icon="fa-bar-chart" />
              <Link path="/login" label="Login" icon="fa-sign-in" />
              <Link path="/splash" label="SPLASH" icon="fa-superpowers" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MainMenu
