import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const Button = ({ className, ...rest }) => {

  return (
    <div
      className={`button ${className}`}
      {...rest}
    >asd</div>
  )
}

Button.propTypes = {

}

Button.defaultProps = {

}

export default Button