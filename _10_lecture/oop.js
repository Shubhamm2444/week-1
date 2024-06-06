1. Class (Function as Blueprint):
The Product function acts as a class (blueprint) for creating product objects.
It defines the properties (name and price) and a method (displayDetails) that will be shared by all product instances.

2. Objects (Instances):
Using the new keyword with Product("T-Shirt", 19.99), you create a new instance (object) of the Product class.
This object has its own copies of the properties (name and price) with the specified values.

3. Encapsulation:
While JavaScript doesn't have strict private properties, the properties and methods are defined within the Product function, promoting some level of encapsulation. You would typically access and modify data through the displayDetails method, providing some control.

 
4. Inheritance (Not directly implemented):
This example doesn't explicitly show inheritance, but you could create subclasses of Product (e.g., ClothingProduct, ElectronicsProduct) to inherit properties and methods from Product and add specific functionalities for different product types.
Overall, the code leverages key OOP concepts in JavaScript for organizing code and creating reusable product objects with properties and behavior.


# Naming Convention:
While not strictly enforced, it's customary to start constructor function names with a capital letter (e.g., Product) to indicate a class-like behavior.
Here's the code again, with the naming convention suggestion:

JavaScript
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
