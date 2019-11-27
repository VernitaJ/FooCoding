/*
Questions:
- do you remember "querySelectorAll"?
- and the ".forEach()" API?

https://codepen.io/marcopeg/pen/bGbxbjK
*/
const removal = (evt) => evt.target.remove()

addListener = (element) => element.addEventListener('click', removal)

const item = document.querySelectorAll('li');
item.forEach(addListener)