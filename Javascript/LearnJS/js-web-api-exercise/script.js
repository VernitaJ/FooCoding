/**
 * You are going to use a few "browser API" to solve this exercise!
 */
const btn = document.getElementById('btn1');

function onClick () {
  btn.classList.toggle('clicked');
  // Step1: get a reference to the button
  // Step2: add the class "clicked"
}

btn.addEventListener('click', onClick);
// Configure the event handler on the/ button