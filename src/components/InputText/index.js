import React from 'react'
import { Input } from 'antd'

const { TextArea } = Input

const InputText = ({
  inputOnChange,
  inputValue,
  inputPlaceholder = '',
  ...props
}) => (
  <TextArea
    allowClear
    onChange={inputOnChange}
    value={inputValue}
    placeholder={inputPlaceholder}
    {...props}
  />
)

export default InputText
