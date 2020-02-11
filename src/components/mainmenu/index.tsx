import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styles from './index.scss'

type MainMenuProps = {
  title: string
  subtitle: string
}

export class MainMenu extends Component<MainMenuProps> {
  render() {
    const { title, subtitle } = this.props
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>
            <div>{title}</div>
            <div>{subtitle}</div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link data-keybinding="1">
                <i className="fa fa-bar-chart menu-row-icon" aria-hidden="true" />
                <div className={styles.navbar_text_lg}>Home</div>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Sign up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/splash">
              <Nav.Link>SPL</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainMenu
