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
            <Link path="/" label="Home" icon="fa-bar-chart" />
            <Link path="/login" label="Login" icon="fa-sign-in" />
            <Link path="/splash" label="SPLASH" icon="fa-superpowers" />
            <Link path="/users" label="Users" icon="fa-superpowers" />
          </Nav>
        </BSNavBar.Collapse>
      </BSNavBar>
    )
  }
}

export default NavBar
