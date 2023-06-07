// Get the necessary elements
var noteInput = document.getElementById("noteInput");
var addButton = document.getElementById("addButton");
var noteList = document.getElementById("noteList");

// Add note function
function addNote() {
  var noteText = noteInput.value;
  if (noteText.trim() === "") {
    alert("Please enter a note.");
    return;
  }

  var li = document.createElement("li");
  li.innerText = noteText;

  var eraseButton = document.createElement("button");
  eraseButton.innerText = "Erase";
  eraseButton.classList.add("erase-button");
  eraseButton.addEventListener("click", function() {
    noteList.removeChild(li);
  });

  li.appendChild(eraseButton);
  noteList.appendChild(li);

  noteInput.value = "";
}

// Event listener for the add button
addButton.addEventListener("click", addNote);