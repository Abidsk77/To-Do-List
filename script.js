const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for the "x" mark
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Event delegation for checking/deleting tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load data from local storage on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Initialize the app
showTask();