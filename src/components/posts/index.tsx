import React from 'react'
import Post from './post'

type UsersState = {
  data: any
}

export class Posts extends React.Component<{}, UsersState> {
  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'https://www.erdievangelikus.eu/wp-json/wp/v2/posts'

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  }

  render() {
    const { data } = this.state
    return (
      <>
        {data.map(p => (
          <Post post={p} key={p.id} />
        ))}
      </>
    )
  }
}

export default Posts
