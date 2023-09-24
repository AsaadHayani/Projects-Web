let input = document.querySelector(".input"),
  submit = document.querySelector(".add"),
  items = document.querySelector(".items");

// Empty Array To Store The Items
let arrayOfItems = [];

input.focus();

// Check if Theres Items In Local Storage
if (localStorage.getItem("items")) {
  arrayOfItems = JSON.parse(localStorage.getItem("items"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Item
submit.onclick = () => {
  if (input.value !== "") {
    addItemToArray(input.value); // Add Item To Array Of Items
    input.value = ""; // Empty Input Field
  }
  input.focus();
};

// Click On item Element
items.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove item From Local Storage
    deleteitemWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  // item Element
  if (e.target.classList.contains("item")) {
    // Toggle Completed For The item
    toggleStatusitemWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

function addItemToArray(itemText) {
  // Item Data
  const item = {
    id: Date.now(),
    title: itemText,
    completed: false,
  };
  // Push Item To Array Of Items
  arrayOfItems.push(item);
  // console.log(arrayOfItems);
  // Add Items To Page
  addElementsToPageFrom(arrayOfItems);
  // Add Items To Local Storage
  addDataToLocalStorageFrom(arrayOfItems);
}

function addElementsToPageFrom(arrayOfItems) {
  // Empty Items Div
  items.innerHTML = "";
  // Looping On Array Of Items
  arrayOfItems.forEach((item) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "item";
    // Check If Item is Done
    if (item.completed) {
      div.className = "Item done";
    }
    div.setAttribute("data-id", item.id);
    div.appendChild(document.createTextNode(item.title));
    // Create Delete Button
    let btn = document.createElement("button");
    btn.className = "del";
    // Create Trash Element
    let i = document.createElement("i");
    i.className = "fas fa-trash-can";
    // Append Trash Element To Button
    btn.appendChild(document.createTextNode("Delete"));
    // btn.appendChild(i);
    // Append Button To Main Div
    div.appendChild(btn);
    // console.log(div);
    // Add Item Div To Items Content
    items.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfItems) {
  localStorage.setItem("items", JSON.stringify(arrayOfItems));
}

function getDataFromLocalStorage(arrayOfItems) {
  let data = localStorage.getItem("items");
  // console.log(data); //printasstringify
  if (data) {
    let items = JSON.parse(data); //converttoarray
    // console.log(items);
    addElementsToPageFrom(items);
  }
}

function deleteitemWith(itemId) {
  // For Explain Only
  // for (let i = 0; i < arrayOfItems.length; i++) {
  //   console.log(`${arrayOfItems[i].id} === ${itemId}`);
  // }
  arrayOfItems = arrayOfItems.filter((item) => item.id != itemId);
  addDataToLocalStorageFrom(arrayOfItems);
}

function toggleStatusitemWith(itemId) {
  for (let i = 0; i < arrayOfItems.length; i++) {
    if (arrayOfItems[i].id == itemId) {
      arrayOfItems[i].completed == false ?
        (arrayOfItems[i].completed = true) :
        (arrayOfItems[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfItems);
}