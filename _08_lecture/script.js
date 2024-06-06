// script.js
const parentList = document.getElementById('parent-list');
const messageEl = document.getElementById('message');
const changeColorButton = document.getElementById('change-color-button');

function changeListItemColors() {
  // Using getElementsByClassName
  const listItems = parentList.getElementsByClassName('list-item');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = 'lightblue';
  }

  // Using childNodes (for educational purposes, consider performance implications)
  // let child = parentList.firstChild;
  // while (child) {
  //   if (child.nodeType === 1) { // Check for element nodes only
  //     child.style.backgroundColor = 'lightgreen';
  //   }
  //   child = child.nextSibling;
  // }

  messageEl.textContent = "List item colors changed using DOM traversal!";
}

changeColorButton.addEventListener('click', changeListItemColors);

//script.js: Uses JavaScript to:
Fetch references to DOM elements.
Defines a function changeListItemColors to manipulate the list items' background color.
Uses getElementsByClassName to retrieve all list items.
Loops through the list items and sets their backgroundColor style property.
(Commented out for efficiency reasons) Alternative approach using childNodes for educational purposes (consider performance implications in real-world scenarios).
Attaches a click event listener to the button that.
