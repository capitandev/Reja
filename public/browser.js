// This function generates HTML template for each item in the list
const itemTemplate = (item) => {
  return `
  <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
      <span class="item-text">${item.reja}</span> 
      <div>
          <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
          <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
      </div>
  </li>
  `;
};

// Get the input field and attach event listener to the form submission
let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents default form submission behavior

  // Send a POST request to the server to create a new item
  axios
      .post("/create-item", { reja: createField.value })
      .then((response) => {
          // Append the new item to the list after successful response from server
          document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
          createField.value = ""; // Clear the input field
          createField.focus(); // Focus back on the input field
      })
      .catch((err) => {
          console.log("Please try again!"); // Log an error if request fails
      });
});

// Listen for click events on the document
document.addEventListener("click", function (e) {
  // Delete operation
  if (e.target.classList.contains("delete-me")) {
      if (confirm("Are you sure you want to delete?")) {
          // Send a POST request to delete the item by its ID
          axios
              .post("/delete-item", { id: e.target.getAttribute("data-id") })
              .then((response) => {
                  console.log(response.data); // Log response from server
                  e.target.parentElement.parentElement.remove(); // Remove the item from the list
              })
              .catch((err) => {
                  console.log("Please try again!"); // Log an error if request fails
              });
      }
  }
  // Edit operation

  if (e.target.classList.contains("edit-me")) {
      let userInput = prompt("o'zgartirish", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
      if (userInput) {
          axios
              .post("/edit-item", { 
                id: e.target.getAttribute("data-id"), 
              new_input: userInput, })
              .then((response) => {
                  console.log(response.data); // Log response from server
                  e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput; // Update the item text
              })
              .catch((err) => {
                  console.log("Please try again!"); // Log an error if request fails
              });
      }
  }
});

// Listen for click events on the "clean-all" button
document.getElementById("clean-all").addEventListener("click", function () {
  // Send a POST request to the server to delete all items
  axios
      .post("/delete-all", { delete_all: true })
      .then(response => {
          alert(response.data.state); // Alert the response message from server
          console.log(response.data); // Log response from server
          document.location.reload(); // Refresh the page after deleting all items
      })
      .catch(err => {
          console.error("An error occurred", err); // Log an error if request fails
      });
});
