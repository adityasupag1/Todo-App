# Todo App 🚀

![Todo App Screenshot](/screenshots/preview1.png) 
![Todo App Screenshot](/screenshots/preview2.png)  
*A clean, functional todo application with due dates and local storage*

## Features ✨

- ✅ **Add, edit, and delete** todos
- 📅 **Due date tracking** with automatic formatting (e.g., "25 May 2023")
- 🔍 **Duplicate prevention** - won't allow identical todos
- 💾 **Local storage** - todos persist after closing browser
- 🎨 **Responsive design** with clean UI
- ✏️ **Inline editing** - click edit to modify existing todos

## Technologies Used 🛠️

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Storage**: Browser LocalStorage API
- **Date Handling**: JavaScript Date API

## Installation 💻

No installation needed! Just open `index.html` in any modern browser.

```bash
# Or clone and run locally:
git clone https://github.com/your-username/todo-app.git
cd todo-app
open index.html

```



## How to Use 📝

1. **Add a todo**:
   - Type your task in the input field
   - Select a due date (or leave blank for today)
   - Click "Add"

2. **Edit a todo**:
   - Click the blue "Edit" button
   - Modify the text or date
   - Click "Save"

3. **Delete a todo**:
   - Click the red "Delete" button
   - Confirm deletion

## Code Structure 📂

```
todo-app/
├── index.html      # Main HTML structure
├── todo.css        # Styling
└── todo.js         # Core functionality
```

## Key Functions 🔑

- `AddItems()` - Handles adding/updating todos
- `displayTodoItems()` - Renders todos to the DOM
- `startEditing()` - Enables todo modification
- `deleteTodo()` - Removes todos with confirmation

## Future Improvements 🔮

- [ ] Add priority levels (High/Medium/Low)
- [ ] Implement task categories/tags
- [ ] Add dark mode toggle
- [ ] Enable drag-and-drop reordering

## Contributing 🤝

Pull requests are welcome! For major changes, please open an issue first.

## License 📜

[MIT](https://choosealicense.com/licenses/mit/)

---

**Enjoy staying organized!** ✨
```

