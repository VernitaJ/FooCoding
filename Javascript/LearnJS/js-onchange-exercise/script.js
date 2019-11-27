const onChange = (evt) => {
  document
    .getElementById('p1')
    .innerHTML = evt.target.value; // 1. read from the input
  // 2. write into the paragraph
}

const text = document.getElementById('inp1');
text.addEventListener('keyup', onChange)

// setup the event handler