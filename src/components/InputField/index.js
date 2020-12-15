import React from 'react'
import { Input } from 'antd'

const InputField = ({
  inputOnChange,
  inputValue,
  inputPlaceholder = '',
  ...props
}) => (
  <Input
    allowClear
    onChange={inputOnChange}
    value={inputValue}
    placeholder={inputPlaceholder}
    {...props}
  />
)

export default InputField
