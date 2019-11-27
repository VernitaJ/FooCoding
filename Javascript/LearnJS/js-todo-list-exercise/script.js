/*
In order to make things a little easier, I've imported a few
utility functions from previous exercises, and adapted to
the Todo List DOM structure.

I've also set up the event listener that will hide and show
the "ADD" button based on the message status.

You are welcome :-)

With this setup, you can focus on appending the new item
to the list.

Questions:
- what is a good event to use?
- do you still need to validate the message?
*/


/**
 * Utility Functions
 */

const getTodosForm = () =>
  document
    .querySelector('#todos form')

const getTodosInput = () =>
  document
    .querySelector('#todos input[type="text"]')

const getTodosList = () =>
  document
    .querySelector('#todos ul')

const getMessage = () =>
  getTodosInput().value

const messageIsValid = text =>
  text.length > 0

const cancelEvent = (event) => {
  event.preventDefault()
  event.stopPropagation()
}

const resetTodosInput = () => {
  const input = getTodosInput()
  input.value = ''
  input.focus()
}


/**
 * App's Logic
 */

const checkStatus = () => {
  const classList = getTodosForm().classList
  const message = getMessage()

  messageIsValid(message)
    ? classList.add('is-valid')
    : classList.remove('is-valid')
}

const addItem = (message) =>  {
const newItem = document.createElement('li')
const text = document.createTextNode(message)

newItem.appendChild(text)
getTodosList().appendChild(newItem)
}

const onSubmit = (evt) =>  {
 cancelEvent(evt)
  
 const message = getMessage() 
 messageIsValid && addItem(message)
  
  resetTodosInput();
}
// Setup the chat status listener
const inputEl = getTodosInput()
inputEl.addEventListener('input', checkStatus)
inputEl.addEventListener('change', checkStatus)
checkStatus()

// Setup the submit handler and figure out how to
// validate the action and add the item to the list
const submitEl = getTodosForm()
submitEl.addEventListener('submit', onSubmit)