/**
 * You are in full command here!
 * try to use all you did in the last
 * couple of steps.
 */

const todos = [
  'buy milk',
  'clean kitchen',
  'learn js',
]

const renderList = () =>  {
  clearList()
  todos.forEach(appendItem)
}

const clearList = () => {
  document
  .querySelectorAll('#todos ul li')
  .forEach(item => item.remove());
}

const appendItem = (item, index) => {
  const el = document.createElement('li')
  const text = document.createTextNode(item)
  el.appendChild(text)
  el.addEventListener('click', () => {
   todos.splice(index, 1)
    renderList()
  })
  

  document.querySelector('#todos ul').appendChild(el)
 }

const addItem = (element) =>  {
  element.preventDefault()
  element.stopPropagation()
  
  const textInput = element.target[0]
  
  todos.push(textInput.value)
  renderList()
  
  textInput.value = ' '
  textInput.focus()
}

document
.querySelector('#todos form')
.addEventListener('submit', addItem)

renderList()