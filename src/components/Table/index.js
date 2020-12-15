import React from 'react'
import { Table } from 'antd'

const CustomTable = ({ header, data }) => (
  <Table bordered dataSource={data} columns={header} />
)

export default CustomTable
