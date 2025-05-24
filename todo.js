// todo.js
let todoList = JSON.parse(localStorage.getItem('todo-items')) || [];
let currentlyEditing = null; // Track which todo is being edited

displayTodoItems();

function AddItems() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let inputValue = inputElement.value.trim();
  let dateValue = dateElement.value || new Date().toISOString().slice(0, 10);

  if (!inputValue) return;

  // Check for duplicate (excluding the currently edited item)
  const isDuplicate = todoList.some((todo, index) => 
    todo.item === inputValue && 
    todo.dueDate === dateValue && 
    index !== currentlyEditing
  );
  
  if(isDuplicate){
    alert('This todo already exists!');
    return;
  }

  if (currentlyEditing !== null) {
    // Update existing todo
    todoList[currentlyEditing] = { item: inputValue, dueDate: dateValue };
    currentlyEditing = null;
  } else {
    // Add new todo
    todoList.push({ item: inputValue, dueDate: dateValue });
  }

  localStorage.setItem('todo-items', JSON.stringify(todoList));
  resetForm();
  displayTodoItems();
}

function displayTodoItems() {
  let newHtml = '';
  if (todoList.length === 0) {
    newHtml = `<p class="no-todos">No todos yet. Add one above!</p>`;
  } else {
    for (let i = 0; i < todoList.length; i++) {
      let item = todoList[i].item;
      let dueDate = formatDate(todoList[i].dueDate);
      
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <div class="edit-delete-btn">
          <button class="edit-btn" onclick="startEditing(${i})">
            ${currentlyEditing === i ? 'Cancel' : 'Edit'}
          </button>
          <button class="delete-btn" onclick="deleteTodo(${i})">
            Delete
          </button>
        </div>
      `;
    }
  }
  document.querySelector('.todo-container').innerHTML = newHtml;
}

function formatDate(dateString) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
}

function startEditing(index) {
  if (currentlyEditing === index) {
    // Cancel editing if clicking edit button again
    currentlyEditing = null;
    resetForm();
  } else {
    // Start editing
    currentlyEditing = index;
    const todo = todoList[index];
    document.querySelector('#todo-input').value = todo.item;
    document.querySelector('#todo-date').value = todo.dueDate;
    document.querySelector('.todo-add').textContent = 'Save';
  }
  displayTodoItems();
}

function deleteTodo(index) {
  if(confirm('Delete this todo?')) {
    todoList.splice(index, 1);
    if (currentlyEditing === index) {
      currentlyEditing = null;
      resetForm();
    }
    localStorage.setItem('todo-items', JSON.stringify(todoList));
    displayTodoItems();
  }
}

function resetForm() {
  document.querySelector('#todo-input').value = '';
  document.querySelector('#todo-date').value = '';
  document.querySelector('.todo-add').textContent = 'Add';
}

function showNotification(title, body) {
  if (window.Notification) {
    new Notification(title, { body })
  }
}

// Use after adding/editing todos:
showNotification('Todo Updated', 'Your todo was saved successfully!')