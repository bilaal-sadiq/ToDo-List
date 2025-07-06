// let btn = document.getElementById("addBtn")
// let taskInput = document.getElementById("taskInput")
// let taskList = document.getElementById("taskList")

function addBtn() {
    const input = document.getElementById('taskInput');      // Get the input box
    const taskList = document.getElementById('taskList');    // Get the <ul> container
    const taskText = input.value.trim();                     // Clean the user's input
  
    if (taskText === '') return;                             // Ignore empty input
  
    const li = document.createElement('li');                 // Create a new <li> element
    li.textContent = taskText;                               // Set the task text
  
    const deleteBtn = document.createElement('button');      // Create delete button
    deleteBtn.className = 'delete-btn';                      // Match your existing button class
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Add trash icon
  
    // Remove task on click
    deleteBtn.addEventListener('click', function () {
      taskList.removeChild(li);
    });
  
    li.appendChild(deleteBtn);           // Add delete button to the <li>
    taskList.appendChild(li);           // Add <li> to the task list
  
    input.value = '';                   // Clear input field
  }
  

