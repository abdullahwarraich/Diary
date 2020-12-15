import { openImage, dateFormat } from '../../../helpers'

export const diaryTableColumns = [
  {
    title: 'Note',
    dataIndex: 'note'
  },
  {
    title: 'Time Added',
    dataIndex: 'timeAdded',
    render: date => dateFormat(date)
  },
  {
    title: 'Image Link',
    dataIndex: 'imageLink',
    render: imageLink =>
      (imageLink && (
        <a href='/#' onClick={() => openImage(imageLink)}>
          Open Image
        </a>
      )) ||
      '-'
  },
  {
    title: 'Video Link',
    dataIndex: 'videoLink',
    render: videoLink =>
      (videoLink && (
        <a href={videoLink} target='_blank' rel='noopener noreferrer'>
          Open Video
        </a>
      )) ||
      '-'
  }
]
