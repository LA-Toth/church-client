import React, { Component } from 'react'
import styles from './index.scss'
import classnames from 'classnames'
import Form from 'react-bootstrap/Form'

export type LoginProps = {}

type LoginState = {}

export class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {}

  render() {
    return (
      <div className="login">
        <Form>
          <h3>Sign In</h3>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control autoFocus type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control autoFocus type="password" placeholder="Enter Password" />
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
}

export default Login
