// script.js
const headingEl = document.getElementById('h1'); // Assuming you renamed the heading tag to 'h1'
const messageEl = document.getElementById('message');
const changeButton = document.getElementById('change-button');

function changeContent() {
  headingEl.textContent = "Title Changed!";
  messageEl.textContent = "This text has been updated using DOM manipulation.";
}

changeButton.addEventListener('click', changeContent);

//script.js: Uses JavaScript to:
Fetch references to DOM elements.
Defines a function changeContent that modifies the text content of the heading and paragraph.
Attaches a click event listener to the button that calls changeContent when clicked.
