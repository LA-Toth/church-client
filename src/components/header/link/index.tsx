import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styles from './index.scss'

export type LinkProps = {
  path: string
  label: string
  icon: string
}

export class Link extends Component<LinkProps> {
  render() {
    const { path, label, icon } = this.props
    return (
      <LinkContainer to={path} className={styles.link}>
        <Nav.Link data-keybinding="1">
          <i className={'fa  menu-row-icon ' + icon} aria-hidden="true" />
          <div className={styles.navbar_text_lg}>{label}</div>
        </Nav.Link>
      </LinkContainer>
    )
  }
}

export default Link
