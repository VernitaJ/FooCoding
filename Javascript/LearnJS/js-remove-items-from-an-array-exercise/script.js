// This the initial state of the app
const todos = [
  'buy milk',
  'clean kitchen',
  'learn js',
]

// This helper function will remove the
// item from the Array and trigger a new
// rendering cycle.
const removeItem = (item, index) => {
  todos.splice(index, 1)
  /**
   * EXERCISE:
   * How do you remove an item from an
   * array?
   */
  
  renderList()
}

// This helper function will "render" a new
// DOM item into an HTML list
const appendItem = (item, index) => {
  const el = document.createElement('li')
  const elText = document.createTextNode(item)
  
  /**
   * EXERCISE:
   * Here we need to handle the click so
   * to trigger the "delete" function
   *
   * NOTE: the "removeItem" function 
   * expects an "index"...
   * - what is is?
   * - how do you get it?
   */
  el.addEventListener('click', () => {
    removeItem(item, index)
  })
  
  el.appendChild(elText)
  document.getElementById('list1').appendChild(el)
}

// Yes, DOM APIs often return arrays that
// you can loop through!
// And arrow functions let us write a very
// simple and readable piece of code!
const clearList = () =>
  document
    .querySelectorAll('#list1 *')
    .forEach(item => item.remove())

// This is the main rendering logic, it is
// often a simple 2 steps operation:
// 1. cleanup
// 2. re-create everything
const renderList = () => {
  clearList()
  todos.forEach(appendItem)
}

// Here we write the logic to apply when
// the "Add new item" is pressed:
const addNewItem = () => {
  todos.push(`Item n.${todos.length + 1}`)
  renderList()
}

// Associate the logic to the user action
document
  .querySelector('#btn1')
  .addEventListener('click', addNewItem)


// As soon the app starts, we run the first
// rendering so to show the initial state.
renderList()