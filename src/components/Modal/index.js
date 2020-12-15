import React from 'react'
import { Modal as AntdModal } from 'antd'

const Modal = ({ isModalVisible, handleOk, handleCancel, ...props }) => (
  <AntdModal
    title='Add New Note'
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    {...props}
  />
)

export default Modal
