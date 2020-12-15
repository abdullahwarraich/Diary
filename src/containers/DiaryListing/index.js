import React, { useState, useEffect } from 'react'
import { Descriptions, Row, Col } from 'antd'
import {
  CustomTable,
  Button,
  Modal,
  InputText,
  UploadImage,
  InsertSpace,
  InputField,
  DatePicker
} from '../../components'
import { diaryTableColumns } from './DiaryTableColumns'
import { ButtonStyle, dateFilterStyle } from './style'

import { addNote, getNotes } from '../../apis'
import { uniqueId, dateFormat } from '../../helpers'

const DiaryListing = () => {
  const [noteList, setNoteList] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [note, setNote] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')

  useEffect(() => {
    setNoteList(getNotes())
  }, [])

  const showModal = () => {
    setNote('')
    setImage('')
    setVideo('')
    setIsModalVisible(true)
  }
  const handleCancel = () => setIsModalVisible(false)
  const handleOk = () => {
    setIsModalVisible(false)
    addNewNote()
  }

  const addNewNote = async () => {
    if (note) {
      const updatedNotes = [
        ...noteList,
        {
          key: uniqueId('noteId-'),
          note: note,
          imageLink: image,
          videoLink: video,
          timeAdded: new Date()
        }
      ]
      setNoteList(updatedNotes)
      await addNote(updatedNotes)
    }
  }

  const filterNotes = (date, dateString) => {
    if (dateString) {
      const selectedNotes =
        dateString &&
        noteList.filter(
          noteInfo => dateString === dateFormat(noteInfo.timeAdded)
        )
      setNoteList(selectedNotes)
    } else {
      setNoteList(getNotes())
    }
  }

  return (
    <>
      <Row align='middle' justify='center'>
        <Col span={12}>
          <Row align='middle' justify='center' style={dateFilterStyle}>
            <Descriptions
              label='Filter Notes By Date Added'
              layout='horizontal'
            >
              <Descriptions.Item label='Filter Notes By Date Added' >
                <DatePicker dateOnChange={filterNotes} />
              </Descriptions.Item>
            </Descriptions>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='end'>
            <Button buttonClick={showModal} type='primary' style={ButtonStyle}>
              Add New Note
            </Button>
          </Row>
        </Col>
      </Row>
      <CustomTable header={diaryTableColumns} data={noteList} />
      {isModalVisible && (
        <Modal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        >
          <InsertSpace direction='vertical' align='center' size='large'>
            <Descriptions label='Notes' layout='horizontal'>
              <Descriptions.Item label='Add Note'>
                <InputText
                  inputValue={note}
                  inputPlaceholder='Add note'
                  rows={2}
                  inputOnChange={e => setNote(e.target.value)}
                />
              </Descriptions.Item>
            </Descriptions>
            <Descriptions label='Notes' layout='horizontal'>
              <Descriptions.Item label='Video Link'>
                <InputField
                  inputValue={video}
                  inputPlaceholder='Add video link'
                  inputOnChange={e => setVideo(e.target.value)}
                />
              </Descriptions.Item>
            </Descriptions>
            <Descriptions label='Notes' layout='horizontal'>
              <Descriptions.Item label='Select Image'>
                <UploadImage setImageUrl={setImage} />
              </Descriptions.Item>
            </Descriptions>
          </InsertSpace>
        </Modal>
      )}
    </>
  )
}

export default DiaryListing
