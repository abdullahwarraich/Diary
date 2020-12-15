import React from 'react'
import { Result } from 'antd'
import { useHistory } from 'react-router-dom'
import { Button } from '../../components'

const NotFound = () => {
  const history = useHistory()
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' buttonClick={() => history.goBack()}>
          Go Back
        </Button>
      }
    />
  )
}

export default NotFound