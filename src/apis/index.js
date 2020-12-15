export const addNote = async noteList =>
  localStorage.setItem('notes', JSON.stringify(noteList))

export const getNotes = () => JSON.parse(localStorage.getItem('notes'))
