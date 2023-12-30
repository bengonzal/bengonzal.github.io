// get reference to button and label element using their id
var addItemButton = document.getElementById("addItemButton");
var toDoListDiv = document.getElementById("toDoListDiv"); 

function addItem() { 
    // create a new input-wrapper div
    var newInputWrapperDiv = document.createElement("div");
    newInputWrapperDiv.setAttribute("class", "input-wrapper");   

    // create a new input element
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "Enter your task...");
    newInput.setAttribute("name", "text");
    newInput.setAttribute("class", "input"); 

    // create a new label element 
    var newLabel = document.createElement("label");
    newLabel.setAttribute("class", "container");

    // create a new input element for label 
    var newCheckedInput = document.createElement("input"); 
    newCheckedInput.setAttribute("type", "checkbox");

    // create a new checkmark div
    var newCheckmarkDiv = document.createElement("div");
    newCheckmarkDiv.setAttribute("class", "checkmark");

    // create a new deleteItem button
    var newDeleteItemButton = document.createElement("button");
    newDeleteItemButton.setAttribute("class","delete-item-button");
    newDeleteItemButton.setAttribute("id","deleteItemButton");
    newDeleteItemButton.innerHTML = "Delete Item";

    // append the newCheckedInput and newCheckmarkDiv to label
    newLabel.appendChild(newCheckedInput);
    newLabel.appendChild(newCheckmarkDiv);

    // append the input element to the new input-wrapper div
    newInputWrapperDiv.appendChild(newInput);

    // append the label element to the new input-wrapper div
    newInputWrapperDiv.appendChild(newLabel);

    // append the deleteItem button to the new input-wrapper div
    newInputWrapperDiv.appendChild(newDeleteItemButton);

    // append the new div to the target div
    toDoListDiv.appendChild(newInputWrapperDiv);
}

addItemButton.addEventListener("click", addItem); 

function deleteItem(event) {
    // get the parent div (input-wrapper)
    var parentDiv = event.target.parentNode;

    // remove the parent div from the DOM
    parentDiv.remove();
}

toDoListDiv.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-item-button")) {
        deleteItem(event);
    }
});