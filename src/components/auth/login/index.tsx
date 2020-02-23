import React, { Component } from 'react'
import styles from './index.scss'
import classnames from 'classnames'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import AuthService from '../../../services/AuthService'
import { Redirect } from 'react-router'
import { AuthInfo } from '../../../types/common'

export type LoginProps = {
  authInfo: AuthInfo
}

type LoginState = {
  loggedIn: boolean
  password: string
  email: string
  message?: string
}

export class Login extends Component<LoginProps, LoginState> {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: this.props.authInfo.loggedIn,
      email: '',
      password: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return this.state.loggedIn ? <Redirect to="/" /> : this.renderx()
  }

  renderx() {
    const { message } = this.state
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>

          {message && <Alert variant="danger">{message}</Alert>}
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoFocus
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="rememberMe">
            <div className="custom-control custom-checkbox">
              <Form.Control type="checkbox" className="custom-control-input" />
              <Form.Label className={classnames('custom-control-label', styles.custom_control_label)}>
                Remember me
              </Form.Label>
            </div>
          </Form.Group>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </Form>
      </div>
    )
  }

  handleEmailChange(event) {
    event.persist()
    event.preventDefault()

    this.setState(oldState => ({ ...oldState, email: event.target.value || '' }))
  }

  handlePasswordChange(event) {
    event.persist()
    event.preventDefault()
    this.setState(oldState => ({ ...oldState, password: event.target.value }))
  }

  handleSubmit(event) {
    event.preventDefault()

    AuthService.logIn({ email: this.state.email, password: this.state.password })
      .done(data => {
        this.setState(oldState => ({ ...oldState, message: undefined, loggedIn: true }))
        localStorage.setItem('userInfo', JSON.stringify({ token: data.auth_token }))
        this.props.authInfo.reload!()
      })
      .fail(data => {
        const resp = data.responseJSON
        const message = resp ? (resp.error ? resp.error.user_authentication : undefined) : undefined
        this.setState(oldState => ({
          ...oldState,
          loggedIn: false,
          message: message || 'Authentication Failed',
        }))
      })
  }
}

export default Login
