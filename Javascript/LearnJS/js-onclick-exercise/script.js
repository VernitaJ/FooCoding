// This is an "event handler"
// It's a simple function that explains "what to do" on a specific event
function clickHandler () {
  alert('Woweee -- You did it!')
}
const btn = document.getElementById('btn1');

btn.addEventListener('click', clickHandler);