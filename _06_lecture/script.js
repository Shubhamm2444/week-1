// script.js
const messageEl = document.getElementById('message');
const changeMessageButton = document.getElementById('change-message-button');

function changeMessage() {
  const newMessage = "You've learned some JavaScript basics!";
  messageEl.textContent = newMessage; // Set the paragraph's text content
}

changeMessageButton.addEventListener('click', changeMessage); // Call the function on button click

changeMessage(); // Display the initial message on page load

// script.js: Contains the JavaScript code:
Fetches references to the DOM elements (messageEl and changeMessageButton).
Defines a function changeMessage that updates the paragraph's text content with a new message.
Adds an event listener to the button that calls the changeMessage function when the button is clicked.
Calls changeMessage initially to display the message upon page load.
