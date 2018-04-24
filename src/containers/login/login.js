import React, { Component } from 'react'

import Textfield from 'components/textfield'
import Button from 'components/button'

import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='login-wrapper'>
        <div className='image-wrapper'>
          <img
            src='https://www.logaster.com/static/images/not_allowed.png'
          />
        </div>
        <div className='content-wrapper'>

          <Textfield
            placeholder='CPF'
          />
          <Textfield
            type='password'
            placeholder='senha'
          />
          <Button

          />


        </div>
      </div>
    )
  }
}

export default Login