// get reference to the button and label elements using their id
var clickButton = document.getElementById("clickButton");
var clickCountLabel = document.getElementById("clickCountLabel");
var resetButton = document.getElementById("resetButton");

// variable to keep track of the clickCount
var clickCount = 0;

// There are two ways to define/implement functions. 
// The first way can be inline, defined/implemented in the parameter(s) of a function.
// - This is common practice for simple or one-time-use functions.
// The second way can be separate, defined/implemented separately and referenced in the arg param of a function
// - This is common practice for more complex functions/reusability.

// Add a click event listener to the button
clickButton.addEventListener("click", function(){
    // increment clickCount
    clickCount++;

    // update the content of label with new click count
    clickCountLabel.textContent = "Click count: " + clickCount;
}); 

function resetClickCount() {
    clickCount = 0;
    clickCountLabel.textContent = "Click count: " + clickCount;
}

resetButton.addEventListener("click", resetClickCount);

// Dynamic Element Creation
var createParagraphButton = document.getElementById("createParagraphButton");
var targetDiv = document.getElementById("dynamicElementCreation");

function createParagraph() {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a dynamically created paragraph."
    targetDiv.appendChild(newParagraph);
}

createParagraphButton.addEventListener("click", createParagraph);

// Getting time the blog post was accessed according to the user
var currentDate = new Date();
var currentDateLabel = document.getElementById("currentDate");

document.addEventListener("DOMContentLoaded", function() {
    currentDateLabel.textContent = currentDate;
});

// removing the header on a button click
var removeHeaderStylesheetButton = document.getElementById("removeHeaderStylesheet");
var toBeRemoved = document.getElementById("toBeRemoved")

removeHeaderStylesheetButton.addEventListener("click", function() {
    // check to see if element to be removed exists
    if(toBeRemoved) {
        //remove the element
        toBeRemoved.parentNode.removeChild(toBeRemoved);
    }
});