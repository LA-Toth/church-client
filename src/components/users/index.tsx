import React from 'react'
import Table, { Row } from '../ui/table'
import AuthService from '../../services/AuthService'

type User = {
  id: int
  email: string
}
type UsersState = {
  users: User[]
}

export class Users extends React.Component<{}, UsersState> {
  state = {
    users: [],
  }

  componentDidMount() {
    const url = location.hostname.includes('.lvh.me') ? 'http://api.lvh.me:3000' : 'http://api.laszloattilatoth.me/'
    fetch(url + '/users', AuthService.getAuthHeader())
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render() {
    const { users } = this.state
    return <Table header={[{ content: '#' }, { content: 'Email' }]} rows={this.usersToRows(users)} />
  }

  usersToRows(users: User[]): Row[] {
    return users.map(u => ({
      cells: [{ content: u.id }, { content: u.email }],
    }))
  }
}

export default Users
