/*
Here is an array, an array is a sorted list of values:
https://www.javascripttutorial.net/javascript-array/
*/
const todos = [
  'buy milk',
  'clean kitchen',
  'learn js',
]

/*
Here is a simple function that will append any kind
of text as new `LI` into the list.

Use this so you can focus on looping through the array.
*/
const appendItem = (item) => {
  const el = document.createElement('li')
  const elText = document.createTextNode(item)
  el.appendChild(elText)
  document.getElementById('list1').appendChild(el)
}

/*
Write here the code so to add all the items of the array
into the `UL`:
*/
todos.forEach(appendItem)