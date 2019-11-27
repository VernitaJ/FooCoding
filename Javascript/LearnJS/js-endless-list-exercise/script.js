let counter = 2

const addItem = () =>  {
  counter += 1
  const text = "Item n." + counter
  
  const list = document.getElementById('list1')
  const newItem = document.createElement('li')
  const textAdd = document.createTextNode(text)
  
  newItem.appendChild(textAdd)
  list.appendChild(newItem)
}
// button > onClick > add item to list with counter
document
.getElementById('btn1')
.addEventListener('click', addItem)