// By: Tufael Ahmed
// Description: JavaScript code for incrementing and decrementing a number on a web page
// Date: 03/13/2023


// Get references to the increase, decrease, and result elements in the HTML
let inc = document.getElementById("increase");
let dec = document.getElementById("decrease");
let result = document.getElementById("result");

// Define the initial count value
let count = 1;

// Define the event listeners for the increase and decrease buttons
inc.addEventListener("click", () => {
  // Increment the count by 1
  count++;

  // Update the text content of the result element with the new count value
  result.textContent = count;
});

dec.addEventListener("click", () => {
  // Decrement the count by 1
  count--;

  // Update the text content of the result element with the new count value
  result.textContent = count;
});

// Set the initial value of the result element to 0
result.textContent = "0";
