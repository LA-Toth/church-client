import React from 'react'
import Table, { Row } from '../ui/table'
import styles from './index.scss'
import classnames from 'classnames'

type User = {
  id: string
  date_d: string
  preacher_name: string
  book_id: string
  chapter_or_verse: string
  remaining_location: string
  filename: string
}
type UsersState = {
  users: User[]
  books: any
}

export class Preachings extends React.Component<{}, UsersState> {
  state = {
    users: [],
    books: [],
  }

  componentDidMount() {
    fetch('https://www.erdievangelikus.eu/wp-json/erdiev/v2/books')
      .then(response => response.json())
      .then(data => {
        const books = []
        data.forEach(book => {
          books[book.id] = book
        })
        this.setState(oldState => ({ ...oldState, books: books }))
        fetch('https://www.erdievangelikus.eu/wp-json/erdiev/v2/preachings')
          .then(response => response.json())
          .then(data => this.setState(oldState => ({ ...oldState, users: data })))
      })
  }

  render() {
    const { users } = this.state
    return (
      <Table
        header={[{ content: 'Date' }, { content: 'Play' }, { content: 'Preacher' }, { content: 'Title' }]}
        rows={this.usersToRows(users)}
      />
    )
  }

  usersToRows(users: User[]): Row[] {
    const { books } = this.state
    return users.map(u => ({
      cells: [
        { content: u.date_d },
        {
          content: (
            <a href={`https://erd.lutheran.hu/igehirdetesmp3/${u.date_d.substring(0, 4)}/${u.filename}`}>
              <i className={classnames('fa fa-play-circle', styles.playIcon)} />
            </a>
          ),
        },
        { content: u.preacher_name },
        { content: books[u.book_id].abbrev + ' ' + u.chapter_or_verse + u.remaining_location },
      ],
    }))
  }
}

export default Preachings
