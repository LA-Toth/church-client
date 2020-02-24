import React from 'react'
import styles from './index.scss'
import Card from 'react-bootstrap/Card'

type PostProps = {
  post: any
}

export class Post extends React.Component<PostProps> {
  render() {
    const { post } = this.props
    const header = {
      dangerouslySetInnerHTML: { __html: post.title.rendered },
    }
    const content = {
      dangerouslySetInnerHTML: { __html: post.content.rendered },
    }
    return (
      <Card className={styles.blogEntry} style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title {...header} />
          <Card.Text {...content} />
        </Card.Body>
      </Card>
    )
  }
}

export default Post
