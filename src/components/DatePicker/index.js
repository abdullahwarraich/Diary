import React from 'react'
import { DatePicker as AntDatePicker } from 'antd'

const DatePicker = ({dateOnChange}) => (
  <AntDatePicker onChange={dateOnChange} />
)

export default DatePicker
