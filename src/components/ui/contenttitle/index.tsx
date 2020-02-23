import React from 'react'
import styles from './index.scss'

export type ContentTitleProps = {
  title: string
  superScript?: JSX.Element | string
}

export class ContentTitle extends React.PureComponent<ContentTitleProps> {
  render() {
    const { title, superScript } = this.props

    return (
      <h1 className={styles.header}>
        {title}
        {superScript && <sup>{superScript}</sup>}
      </h1>
    )
  }
}

export default ContentTitle
