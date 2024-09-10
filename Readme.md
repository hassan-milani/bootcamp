# Introduction to JavaScript for Web Development

Welcome to the JavaScript section of our coding bootcamp! In this lecture, we'll dive deep into JavaScript (JS), the versatile programming language that brings interactivity to web pages. By the end of this session, you'll understand how to integrate JavaScript with HTML, manipulate the Document Object Model (DOM), and create dynamic web experiences.

## Table of Contents

1. [What is JavaScript?](#what-is-javascript)
2. [Including JavaScript in HTML](#including-javascript-in-html)
3. [JavaScript Basics](#javascript-basics)
   - Variables and Data Types
   - Operators
   - Control Structures
   - Functions
4. [Working with the DOM](#working-with-the-dom)
   - Selecting Elements
   - Modifying Elements
   - Creating and Removing Elements
5. [Event Handling](#event-handling)
6. [Practical Examples](#practical-examples)
   - Example 1: Interactive To-Do List
   - Example 2: Dynamic Content Update
7. [Best Practices](#best-practices)
8. [Resources](#resources)

---

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web development alongside HTML and CSS. While HTML structures the content and CSS styles it, JavaScript adds behavior and interactivity.

### Key Features:

- **Client-Side Execution**: Runs in the user's browser, enabling dynamic content without server interaction.
- **Versatile**: Used for web development, server-side applications (Node.js), mobile apps, and more.
- **Event-Driven**: Responds to user interactions like clicks, inputs, and page loads.

---

## Including JavaScript in HTML

There are three primary ways to add JavaScript to your HTML files:

1. **Inline JavaScript**: Using the `onclick` or other event attributes directly in HTML elements.
2. **Internal JavaScript**: Placing JavaScript code within `<script>` tags inside the HTML file.
3. **External JavaScript**: Linking to a separate `.js` file using the `<script>` tag.

### Example: External JavaScript

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Introduction</title>
</head>
<body>
    <h1 id="greeting">Hello, World!</h1>
    <button id="changeTextBtn">Change Text</button>

    <!-- Linking External JS -->
    <script src="script.js"></script>
</body>
</html>
```

**JavaScript (`script.js`):**

```javascript
// Selecting the button and greeting elements
const button = document.getElementById('changeTextBtn');
const greeting = document.getElementById('greeting');

// Adding a click event listener to the button
button.addEventListener('click', () => {
    greeting.textContent = 'Hello, JavaScript!';
});
```

---

## JavaScript Basics

### 1. Variables and Data Types

Variables store data values. JavaScript uses `var`, `let`, and `const` to declare variables.

- **`var`**: Function-scoped (older, less recommended)
- **`let`**: Block-scoped
- **`const`**: Block-scoped and read-only

**Data Types:**

- **Primitive**: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
- **Object**: `Object`, `Array`, `Function`, etc.

**Example:**

```javascript
// Variable Declaration
let name = 'Alice'; // String
const age = 25; // Number
var isStudent = true; // Boolean

// Data Types
let score = 99.5; // Number
let greeting = "Hello"; // String
let isActive = false; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
```

### 2. Operators

Operators perform operations on variables and values.

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment Operators**: `=`, `+=`, `-=`, etc.
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&`, `||`, `!`

**Example:**

```javascript
let a = 10;
let b = 5;

// Arithmetic
let sum = a + b; // 15
let product = a * b; // 50

// Assignment
a += 2; // a = 12

// Comparison
let isEqual = a === b; // false

// Logical
let result = (a > b) && (b > 0); // true
```

### 3. Control Structures

Control structures determine the flow of the program.

#### Conditional Statements

- **`if` Statement**

```javascript
let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else {
    console.log('Grade: C');
}
```

- **`switch` Statement**

```javascript
let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Start of the week');
        break;
    case 'Friday':
        console.log('End of the week');
        break;
    default:
        console.log('Midweek day');
}
```

#### Loops

- **`for` Loop**

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Number: ${i}`);
}
```

- **`while` Loop**

```javascript
let count = 0;

while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}
```

- **`for...of` and `for...in`**

```javascript
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

const person = { name: 'Alice', age: 25 };

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### 4. Functions

Functions are reusable blocks of code that perform specific tasks.

- **Function Declaration**

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Bob')); // Hello, Bob!
```

- **Function Expression**

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(3, 4)); // 7
```

- **Arrow Functions**

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(2, 5)); // 10
```

- **Parameters and Return Values**

```javascript
function calculateArea(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
}

let area = calculateArea(5);
console.log(`Area: ${area}`); // Area: 78.53975
```

---

## Working with the DOM

The Document Object Model (DOM) represents the HTML structure of a webpage. JavaScript interacts with the DOM to manipulate elements dynamically.

### 1. Selecting Elements

You can select HTML elements using various methods:

- **`getElementById`**

```javascript
const header = document.getElementById('main-header');
```

- **`getElementsByClassName`**

```javascript
const items = document.getElementsByClassName('item');
```

- **`getElementsByTagName`**

```javascript
const paragraphs = document.getElementsByTagName('p');
```

- **`querySelector` and `querySelectorAll`**

```javascript
const firstButton = document.querySelector('.btn');
const allButtons = document.querySelectorAll('.btn');
```

### 2. Modifying Elements

Once you've selected elements, you can modify their properties, styles, and content.

- **Changing Text Content**

```javascript
const title = document.getElementById('title');
title.textContent = 'New Title';
```

- **Changing HTML Content**

```javascript
const container = document.querySelector('.container');
container.innerHTML = '<p>New paragraph</p>';
```

- **Changing Styles**

```javascript
const box = document.getElementById('box');
box.style.backgroundColor = 'lightblue';
box.style.width = '200px';
```

- **Adding and Removing Classes**

```javascript
const element = document.querySelector('.element');

// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('hidden');

// Toggle a class
element.classList.toggle('visible');
```

### 3. Creating and Removing Elements

- **Creating Elements**

```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div!';
newDiv.classList.add('new-div');

const parent = document.getElementById('parent');
parent.appendChild(newDiv);
```

- **Removing Elements**

```javascript
const child = document.getElementById('child');
child.remove();
```

---

## Event Handling

Events are actions that occur in the browser, such as clicks, key presses, or page loads. Handling events allows your web pages to respond to user interactions.

### Adding Event Listeners

Use `addEventListener` to listen for events.

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    alert('Button was clicked!');
});
```

### Common Events

- **Click**: `click`
- **Mouse Over**: `mouseover`
- **Key Press**: `keypress`
- **Form Submission**: `submit`
- **Page Load**: `load`

### Example: Form Validation

**HTML:**

```html
<form id="myForm">
    <input type="text" id="username" placeholder="Enter username" required>
    <button type="submit">Submit</button>
</form>
<p id="message"></p>
```

**JavaScript:**

```javascript
const form = document.getElementById('myForm');
const username = document.getElementById('username');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    if (username.value.trim() === '') {
        message.textContent = 'Username cannot be empty.';
        message.style.color = 'red';
    } else {
        message.textContent = `Welcome, ${username.value}!`;
        message.style.color = 'green';
    }
});
```

---

## Practical Examples

Let's apply what we've learned with some hands-on examples.

### Example 1: Interactive To-Do List

**HTML (`todo.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>To-Do List</title>
    <style>
        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>
<body>
    <h1>My To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button id="addTaskBtn">Add Task</button>
    <ul id="taskList"></ul>

    <script src="todo.js"></script>
</body>
</html>
```

**JavaScript (`todo.js`):**

```javascript
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task Event
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add click event to toggle completion
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add double-click event to remove task
        li.addEventListener('dblclick', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }
});

// Optional: Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
```

**Features:**

- **Add Tasks**: Enter a task and click "Add Task" to add it to the list.
- **Mark as Completed**: Click on a task to toggle its completion status.
- **Remove Tasks**: Double-click on a task to remove it from the list.

### Example 2: Dynamic Content Update

**HTML (`dynamic.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dynamic Content</title>
</head>
<body>
    <h1>Dynamic Content Example</h1>
    <button id="changeColorBtn">Change Background Color</button>
    <button id="addParagraphBtn">Add Paragraph</button>
    <div id="content"></div>

    <script src="dynamic.js"></script>
</body>
</html>
```

**JavaScript (`dynamic.js`):**

```javascript
const changeColorBtn = document.getElementById('changeColorBtn');
const addParagraphBtn = document.getElementById('addParagraphBtn');
const contentDiv = document.getElementById('content');

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change Background Color Event
changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

// Add Paragraph Event
addParagraphBtn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = 'This is a new paragraph added dynamically.';
    contentDiv.appendChild(p);
});
```

**Features:**

- **Change Background Color**: Click the button to change the page's background to a random color.
- **Add Paragraph**: Click the button to add a new paragraph to the content area.

---

## Best Practices

1. **Use `const` and `let` Appropriately**: Prefer `const` for variables that won’t be reassigned and `let` for those that will. Avoid using `var` to prevent scope-related issues.

2. **Keep JavaScript Separate**: Use external `.js` files instead of inline scripts to maintain clean and manageable code.

3. **Use Meaningful Variable Names**: Choose descriptive names that convey the purpose of the variable.

4. **Comment Your Code**: Provide comments to explain complex logic or important sections.

5. **Handle Errors Gracefully**: Use `try...catch` blocks and validate user inputs to prevent unexpected behavior.

6. **Optimize Performance**: Minimize DOM manipulations and use efficient selectors to enhance performance.

7. **Follow Consistent Coding Style**: Maintain consistency in indentation, naming conventions, and code structure for readability.

---

## Resources

- **Mozilla Developer Network (MDN) JavaScript Guide**: [MDN JS Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- **JavaScript.info**: [The Modern JavaScript Tutorial](https://javascript.info/)
- **Eloquent JavaScript** by Marijn Haverbeke: [Online Book](https://eloquentjavascript.net/)
- **W3Schools JavaScript Tutorial**: [W3Schools JS](https://www.w3schools.com/js/)

---

## Summary

In this lecture, we've covered the fundamentals of JavaScript, including how to integrate it with HTML, basic syntax, working with the DOM, and handling events. We've also explored practical examples to solidify your understanding. JavaScript is a powerful tool in web development, and mastering it will enable you to create dynamic and interactive web applications.

### Next Steps:

1. **Practice**: Implement the examples discussed and try creating your own projects.
2. **Explore**: Dive deeper into advanced topics like asynchronous JavaScript, APIs, and frameworks (e.g., React, Vue).
3. **Build Projects**: Apply your knowledge by building real-world applications to reinforce your skills.

Happy coding!