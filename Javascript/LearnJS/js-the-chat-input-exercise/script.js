/*
Questions:
- what happens if you remove the event listener, run the exercise, then click "POST"?
- what does "preventDefault()" do?
- what does "stopPropagation()" do?
*/
const onFormSubmit = (event) => {
  event.preventDefault()
  event.stopPropagation()

  const text = document.querySelector('#chat input[type="text"]')
  
 const textInput = text.value
 
 if(textInput.length === 0) {
   text.value = " "
   text.focus()
   alert('Type summin sweetcheeks')
 } else {
   text.focus()
   alert(textInput)
}
}

document
  .getElementById('chat')
  .addEventListener('submit', onFormSubmit)