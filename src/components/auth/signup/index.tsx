import React, { Component } from 'react'

export type LoginProps = {}

type LoginState = {}

export class SignUp extends Component<LoginProps, LoginState> {
  state: LoginState = {}

  render() {
    return (
      <div className="signup">
        <h3>SignUp</h3>
      </div>
    )
  }
}

export default SignUp
