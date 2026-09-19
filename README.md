# Todo App

A lightweight browser-based todo application built with HTML, CSS, and vanilla JavaScript. Tasks are stored in browser local storage, so the list persists across page reloads.

![Todo App Screenshot](/screenshots/preview1.png)
![Todo App Screenshot](/screenshots/preview2.png)

## Features

- Add, edit, and delete todo items
- Assign a due date to each task
- Prevent duplicate task-and-date combinations
- Persist tasks with the browser LocalStorage API
- Format due dates for display
- Responsive browser UI
- Inline edit/cancel workflow

## Tech

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage API

## Run locally

No build step or package installation is required.

```bash
git clone https://github.com/adityasupag1/Todo-App.git
cd Todo-App
```

Then open `index.html` in a browser.

## Project structure

```text
Todo-App/
├── index.html
├── todo.css
├── todo.js
└── screenshots/
```

## Main JavaScript flow

`AddItems()` validates the form, prevents duplicates, writes new or edited tasks to local storage, and refreshes the rendered list.

`displayTodoItems()` rebuilds the visible task list from the in-memory data.

`startEditing()` loads an existing task back into the form and switches the Add button to Save.

`deleteTodo()` removes a confirmed task and persists the updated list.

`formatDate()` formats stored dates for display.

## Storage format

Tasks are stored under the `todo-items` LocalStorage key as JSON:

```json
[
  {
    "item": "Example task",
    "dueDate": "2026-09-19"
  }
]
```

## Possible next improvements

- Priority levels
- Categories or tags
- Drag-and-drop ordering
- Dark mode
- Automated browser tests
