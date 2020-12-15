import React from 'react'
import { Layout } from 'antd'
import { HeaderStyle } from './style'

const { Header } = Layout

const AppHeader = () => (
  <Header style={HeaderStyle}>
    <h1>
      <strong>Diary</strong>
    </h1>
  </Header>
)

export default AppHeader
