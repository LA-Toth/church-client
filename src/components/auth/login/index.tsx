import React, { Component } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import styles from './index.scss'
import classnames from 'classnames'

export type LoginProps = {}

type LoginState = {}

export class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {}

  render() {
    return (
      <div className="login">
        <form>
          <h3>Sign In</h3>

          <FormGroup controlId="email">
            <FormLabel>Email address</FormLabel>
            <FormControl autoFocus type="email" placeholder="Enter Email" />
          </FormGroup>

          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl autoFocus type="email" placeholder="Enter Password" />
          </FormGroup>

          <FormGroup controlId="email">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="rememberMe" />
              <FormLabel
                className={classnames('custom-control-label', styles.custom_control_label)}
                htmlFor="rememberMe"
              >
                Remember me
              </FormLabel>
            </div>
          </FormGroup>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    )
  }
}

export default Login
