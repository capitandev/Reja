// Log to the console to verify that browser.js is working
console.log("Browserjs is working!");

// Define a function to generate the HTML template for each item
function itemTemplate(item) {
    return `
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button data-id="${item.reja}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
      <button data-id="${item.reja}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
    </div>
  </li>`;
}

// Get the create-field element from the DOM
let createField = document.getElementById("create-field");

// Add an event listener to the create-form element to handle form submission
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Make an AJAX POST request to the server endpoint "/create-item" using Axios
    axios.post("/create-item", { reja: createField.value })
    .then((response) => {
        // Handle the response if the request was successful
        // Insert the newly created item into the HTML list
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = ""; // Clear the input field
        createField.focus(); // Set focus back to the input field for user convenience
    })
    .catch((err) => {
        // Handle errors if the request fails
        console.error(err); // Log the error to the console for debugging
        console.log("Please try again"); // Provide a message to the user
    });
});
