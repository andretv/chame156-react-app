import React from 'react'
import PropTypes from 'prop-types'

import './textfield.scss'

const Textfield = ({ type, errorMessage, ...rest }) => {

  console.log(errorMessage)

  return (
    <div className='textfield-wrapper'>
      <input
        type={type}
        className={`textfield${errorMessage ? ' error' : ''}`}
        {...rest}
      />
      {
        errorMessage
          ? <div className='error-message'>asdasd</div>
          : null
      }
    </div>
  )
}

Textfield.propTypes = {
  type: PropTypes.string,
}

Textfield.defaultProps = {
  type: 'text',
}

export default Textfield