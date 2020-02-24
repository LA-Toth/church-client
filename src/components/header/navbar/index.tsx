import React from 'react'
import { Nav, Navbar as BSNavBar } from 'react-bootstrap'
import styles from './index.scss'
import Link from '../link'
import classnames from 'classnames'
import { AuthInfo } from '../../../types/common'

export type NavBarProps = {
  authInfo: AuthInfo
  sticky?: boolean
}

export class NavBar extends React.Component<NavBarProps> {
  render() {
    const { sticky, authInfo } = this.props

    return (
      <div id="navbar" className={classnames(styles.navBarTop, sticky && styles.navBarFixed)}>
        <div className={styles.wrap}>
          <BSNavBar bg="light">
            <BSNavBar.Toggle aria-controls="basic-navbar-nav" />
            <BSNavBar.Collapse id="basic-navbar-nav" className="container">
              <Nav className="mr-auto">
                <Link path="/" label="Home" icon="fa-bars" />
                <Link path="/preachings" label="Preachings" icon="fa-microphone" />
                <Link path="/programs" label="Programs" icon="fa-calendar" />
                <Link path="/contact" label="Contact" icon="fa-map-marker" />
                {authInfo.loggedIn && NavBar.renderAdminMenu()}
                {this.renderUserOrLogin(authInfo)}
              </Nav>
            </BSNavBar.Collapse>
          </BSNavBar>
        </div>
      </div>
    )
  }

  renderUserOrLogin(authInfo: AuthInfo) {
    if (!authInfo.loggedIn) return <Link path="/login" label="Sign in" icon="fa-sign-in" />

    return (
      <div className="nav-item nav-link dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="loggedinDropDown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-user-circle-o menu-row-icon-dn" aria-hidden="true" />
          <div className={styles.navbar_text_lg}>{authInfo.userName}</div>
        </a>
        <div className="dropdown-menu" aria-labelledby="loggedinDropDown">
          <a className="dropdown-item">
            <i className="fa fa-sign-out" aria-hidden="true" /> Logout
          </a>
        </div>
      </div>
    )
  }

  private static renderAdminMenu() {
    return (
      <div className="nav-item nav-link dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="blogMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-cog menu-row-icon-dn" aria-hidden="true" />
          <div className={styles.navbar_text_lg}>Admin &amp; Edit</div>
        </a>
        <div className="dropdown-menu" aria-labelledby="blogMenu">
          <Link path="/admin/users" label="Users" icon="fa-group" />
          <Link path="/admin/blogs" label="Blog Entries" icon="fa-files-o" />
          <Link path="/admin/pages" label="Pages" icon="fa-file-o" />
          <Link path="/admin/categories" label="Categories" icon="fa-tags" />
        </div>
      </div>
    )
  }
}

export default NavBar
