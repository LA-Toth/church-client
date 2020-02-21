import React from 'react'
import { Nav, Navbar as BSNavBar } from 'react-bootstrap'
import styles from './index.scss'
import Link from '../link'
import classnames from 'classnames'

export type NavBarProps = {
  sticky?: boolean
}

export class NavBar extends React.Component<NavBarProps> {
  render() {
    const { sticky } = this.props

    return (
      <BSNavBar bg="light" className={classnames(styles.navBarTop, sticky && styles.navBarFixed)}>
        <BSNavBar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavBar.Collapse id="basic-navbar-nav" className="container">
          <Nav className="mr-auto">
            <Link path="/" label="Home" icon="fa-bars" />
            <Link path="/preachings" label="Preachings" icon="fa-microphone" />
            <Link path="/programs" label="Programs" icon="fa-calendar" />
            <Link path="/contact" label="Contact" icon="fa-map-marker" />
          </Nav>
        </BSNavBar.Collapse>
      </BSNavBar>
    )
  }
}

export default NavBar
