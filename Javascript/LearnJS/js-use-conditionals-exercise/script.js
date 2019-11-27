// Tip:
// you may need to use functions like "prompt" and "alert"
//
// - https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
// - https://developer.mozilla.org/en-US/docs/Web/API/Document/write
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//

const password = prompt('What is the password, biiiaatch?!')  

  if (password === "friend")  {
    document.write('<img src="https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif" />');
  } else {
    document.write('<img src="http://giphygifs.s3.amazonaws.com/media/njYrp176NQsHS/giphy.gif" />')
    alert('Nah brah!')
  }