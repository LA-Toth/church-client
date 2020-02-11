import React, { Component } from 'react'
import styles from './index.scss'

export type BrandProps = {
  title: string
  subtitle: string
}

export class Brand extends Component<BrandProps> {
  render() {
    const { title, subtitle } = this.props
    return (
      <div id="navbar-brand" className={styles.brand}>
        <div className="container">
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subTitle}>{subtitle}</div>
        </div>
      </div>
    )
  }
}

export default Brand
