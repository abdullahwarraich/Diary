export const uniqueId = (prefix = '') =>
  prefix.concat([Math.random().toString(32)].join(''))

export const openImage = base64Image => {
  let newTab = window.open()
  newTab.document.body.innerHTML = `<img src="${base64Image}">`
}

export const dateFormat = date => {
  const newdate = new Date(date)
  return newdate && newdate.toLocaleDateString('en-CA')
}
