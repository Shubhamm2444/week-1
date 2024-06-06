// script.js
const headingEl = document.getElementById('heading');
const changeTextButton = document.getElementById('change-text-button');

function changeHeadingText() {
  headingEl.textContent = "Text Changed!";
}

// Attach event listeners
headingEl.addEventListener('click', changeHeadingText);
changeTextButton.addEventListener('click', changeHeadingText); // Can reuse the same function

//script.js:
Uses getElementById to access the heading and button elements.
Defines a function changeHeadingText that modifies the heading's text content.
Attaches event listeners:
When the 'heading' element is clicked, the changeHeadingText function is called.
When the 'change-text-button' element is clicked, the same changeHeadingText function is called (demonstrates function reusability).
