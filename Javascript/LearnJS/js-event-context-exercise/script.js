// Question:
// - can you associate one single listener function to many elements?
// - if yes, how do you know wich one was clicked?
const button = document.querySelectorAll('.btn')
      
const result = sendToResult =>
sendToResult.addEventListener('click', onClick)

const onClick = (eventContext) => {
  eventContext.target.classList.toggle('btn--clicked')
  // what is "eventContext" ???
}

button.forEach(result)