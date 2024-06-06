// script.js
function Product(name, price) {
  this.name = name;
  this.price = price;

  this.displayDetails = function() {
    console.log("Product: " + this.name + ", Price: $" + this.price);
  };
}

const createProductButton = document.getElementById('create-product-button');

createProductButton.addEventListener('click', function() {
  const newProduct = new Product("T-Shirt", 19.99);
  newProduct.displayDetails(); // Output: Product: T-Shirt, Price: $19.99
});

//1. Product Class Definition:
function Product(name, price) { ... }: This line defines a constructor function named Product that takes two arguments: name (string) and price (number).
this.name = name;: Inside the constructor function, this.name is assigned the value of the name argument passed when creating a new Product object. This creates a property named name within each Product instance, storing the product name.
this.price = price;: Similar to name, this.price is assigned the value of the price argument, creating a property named price to store the product's price.
this.displayDetails = function() { ... }: This line defines a method named displayDetails within the Product constructor. Methods are functions associated with an object that can operate on its properties. The displayDetails method doesn't take any arguments.
Inside the displayDetails method:
console.log("Product: " + this.name + ", Price: $" + this.price);: This line uses console.log to print a formatted message to the browser's developer console. It uses string concatenation to display the product name, a comma, and then the price with a dollar sign.

 2. Button Element Reference:
const createProductButton = document.getElementById('create-product-button');: This line uses document.getElementById to retrieve the button element with the ID "create-product-button" from the HTML document and stores it in the constant createProductButton.

 3. Event Listener Attachment:
createProductButton.addEventListener('click', function() { ... });: This line adds an event listener to the createProductButton. The event listener listens for the 'click' event (when the button is clicked). When the button is clicked, the anonymous function (the callback function) within the addEventListener method will be executed.

 4. Button Click Functionality:
const newProduct = new Product("T-Shirt", 19.99);: Inside the anonymous function triggered by the button click:
This line creates a new instance (object) of the Product class using the new keyword. It provides two arguments: "T-Shirt" for the name and 19.99 (a number) for the price. This creates a new product object with the specified name and price.
newProduct.displayDetails();: This line calls the displayDetails method on the newly created newProduct object. Since displayDetails is defined within the Product class, this call has access to the name and price properties of the specific newProduct instance.
When displayDetails is executed, it logs the formatted product information to the browser's console, resulting in the output: "Product: T-Shirt, Price: $19.99".
