import React from 'react'
import { Button as AntButton } from 'antd'

const Button = ({buttonClick, ...props }) => (
  <AntButton
    onClick={buttonClick}
    {...props}
  />
)

export default Button