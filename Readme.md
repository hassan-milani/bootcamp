### **React Introduction**

---

### **1. What is React?**
   - **Overview**: Explain that React is a JavaScript library for building user interfaces.
   - **Why React?**
     - Declarative: Makes it easier to predict UI behavior.
     - Component-Based: Reusable code.
     - Virtual DOM for performance optimization.
   - **Key Concepts**:
     - Components
     - JSX (JavaScript XML)
     - Props and State
     - Event Handling

---

### **2. Setting up React Environment**
   - **Using `create-react-app`:**
     ```bash
     npx create-react-app my-first-react-app
     cd my-first-react-app
     npm start
     ```
   - Briefly explain the folder structure of a React project.

---

### **3. JSX - JavaScript Syntax Extension**
   - JSX allows you to write HTML within JavaScript. Example:
     ```jsx
     function HelloWorld() {
       return <h1>Hello, World!</h1>;
     }
     ```
   - Explain that JSX is syntactic sugar for `React.createElement()` and will be compiled into JavaScript.

---

### **4. Components in React**
   - **Function Components**:
     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
     }

     function App() {
       return (
         <div>
           <Welcome name="John" />
           <Welcome name="Jane" />
         </div>
       );
     }
     export default App;
     ```
   - **Class Components** (optional, explain that this is old practice but good to know):
     ```jsx
     class Welcome extends React.Component {
       render() {
         return <h1>Hello, {this.props.name}</h1>;
       }
     }
     ```
   - **Key Points**:
     - Components can be functions or classes.
     - Always start component names with capital letters.
     - Components can accept props (properties) to pass data.

---

### **5. Props vs. State**
   - **Props**:
     - Used to pass data from parent to child components.
     - Read-only.
   - **State**:
     - Managed inside the component.
     - Mutable, allows you to manage dynamic data.

   Example of using State:
   ```jsx
   import { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);
     
     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   export default Counter;
   ```
   - Explain `useState` hook and how state re-renders the component when updated.

---

### **6. Event Handling in React**
   - Handling events in React is similar to handling DOM events, but the syntax is different:
     ```jsx
     function ButtonClick() {
       const handleClick = () => {
         alert("Button clicked!");
       };
       
       return <button onClick={handleClick}>Click Me!</button>;
     }
     ```
   - Use camelCase for event handlers, and pass functions instead of strings.

---

### **7. Small Project 1: Simple To-Do List**
   - **Objective**: Create a simple to-do list where users can add tasks and see them displayed.
   - **Components**: Input, Button, and List.
   ```jsx
   import { useState } from 'react';

   function TodoApp() {
     const [todos, setTodos] = useState([]);
     const [task, setTask] = useState("");

     const addTodo = () => {
       setTodos([...todos, task]);
       setTask("");  // Reset input after adding
     };

     return (
       <div>
         <input 
           type="text" 
           value={task} 
           onChange={(e) => setTask(e.target.value)} 
           placeholder="Enter task" 
         />
         <button onClick={addTodo}>Add Task</button>

         <ul>
           {todos.map((todo, index) => (
             <li key={index}>{todo}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default TodoApp;
   ```
   **Key Concepts**:
   - Managing form input with state.
   - Rendering lists using `map()`.

---

### **8. Small Project 2: Counter App**
   - **Objective**: Create a counter that increments and decrements.
   ```jsx
   import { useState } from 'react';

   function CounterApp() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <h1>Count: {count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
       </div>
     );
   }

   export default CounterApp;
   ```
   **Key Concepts**:
   - Handling state with buttons.
   - Updating state using `setState`.

---

### **9. Component Communication (Props)**
   - Show how to pass data between components via props:
   ```jsx
   function Greeting({ name }) {
     return <h2>Hello, {name}!</h2>;
   }

   function App() {
     return (
       <div>
         <Greeting name="Alice" />
         <Greeting name="Bob" />
       </div>
     );
   }

   export default App;
   ```

---

### **10. Conditional Rendering**
   - Use conditional rendering in components:
     ```jsx
     function Greeting({ isLoggedIn }) {
       if (isLoggedIn) {
         return <h1>Welcome back!</h1>;
       }
       return <h1>Please sign in.</h1>;
     }
     ```

---

### **11. Small Project 3: Login Form**
   - **Objective**: Create a simple login form with conditional rendering.
   ```jsx
   import { useState } from 'react';

   function LoginForm() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     const handleLogin = () => {
       setIsLoggedIn(true);
     };

     const handleLogout = () => {
       setIsLoggedIn(false);
     };

     return (
       <div>
         {isLoggedIn ? (
           <div>
             <h1>Welcome back!</h1>
             <button onClick={handleLogout}>Logout</button>
           </div>
         ) : (
           <div>
             <h1>Please log in.</h1>
             <button onClick={handleLogin}>Login</button>
           </div>
         )}
       </div>
     );
   }

   export default LoginForm;
   ```
   **Key Concepts**:
   - Conditional rendering with login state.

---

### **12. Q&A / Closing Discussion**
   - Recap the key points.
   - Explain the importance of learning these concepts for more complex applications.
   - Introduce upcoming concepts for future lessons, such as React Router, forms, and API integration.

---

### **Homework: Basic Portfolio Page**
   - Create a portfolio page with a header, some content sections (about me, projects, contact info), and a footer. Use different components to structure the page.

### **1. Important States in React**

React components can have internal states, allowing dynamic behavior. The most common types of states you'll use are:

---

#### **a. String State**
Used for text inputs or string values.
```jsx
import { useState } from 'react';

function TextInput() {
  const [name, setName] = useState(''); // Initial state is an empty string

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state with input value
        placeholder="Enter your name"
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default TextInput;
```

---

#### **b. Number State**
Used for numeric values, such as counters, scores, or other numeric inputs.
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

---

#### **c. Boolean State**
Used for toggling, like turning features on/off or managing visibility.
```jsx
import { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(true); // Initial state is true

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This message is visible!</p>}
    </div>
  );
}

export default ToggleVisibility;
```

---

#### **d. Array State**
Used for handling lists or collections of items like a to-do list or product list.
```jsx
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]); // Initial state is an empty array
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, task]); // Add new task to array
    setTask(''); // Clear input
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

---

#### **e. Object State**
Used when managing multiple related values like form data, user profiles, or settings.
```jsx
import { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Dynamically set name and age
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
        placeholder="Enter age"
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

export default UserProfile;
```

---

### **2. Project Folder Structure Example**

When creating a React project, it's important to have a clear, maintainable structure, especially as your project grows. Here's a typical folder structure for a simple project:

```
my-react-app/
├── node_modules/             // Dependencies installed by npm or yarn
├── public/                   // Static files such as index.html and images
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/                      // Source code for your React application
│   ├── assets/               // Images, fonts, etc.
│   │   └── logo.png
│   ├── components/           // Reusable components
│   │   ├── Header.js         // Example component
│   │   ├── Footer.js         // Example component
│   │   └── Button.js         // Example component
│   ├── pages/                // Pages or views of the app
│   │   ├── Home.js           // Homepage
│   │   └── About.js          // About page
│   ├── App.js                // Main app component
│   ├── App.css               // Global CSS
│   ├── index.js              // Entry point for the app, rendering App.js
│   ├── index.css             // Global CSS for index
│   └── serviceWorker.js      // Optional service worker for offline support
├── .gitignore                // Git ignore file
├── package.json              // npm/yarn configuration file
├── README.md                 // Project documentation
└── yarn.lock / package-lock.json // Dependency lock file
```

### **Explanation:**
- **`public/`**: Contains static files like `index.html`, where the React app is injected. It also includes favicons, logos, etc.
- **`src/`**: Where all the React code resides.
  - **`assets/`**: A folder to store images, fonts, or static files used by the components.
  - **`components/`**: Reusable UI components like buttons, headers, etc.
  - **`pages/`**: The different views or pages of your application.
  - **`App.js`**: The root component that renders other components.
  - **`index.js`**: The entry point of the app, rendering the `App` component into the DOM.
  - **`index.css`**: Global styles.
- **`package.json`**: Contains the metadata about the project, dependencies, and scripts.
- **`.gitignore`**: Specifies files that Git should ignore, like `node_modules`.

### **Example: Simple Counter App Structure**
```
counter-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Counter.js     // Counter component
│   ├── App.js             // Main App component
│   ├── index.js           // ReactDOM render entry point
│   ├── App.css            // CSS for the app
│   └── index.css          // CSS for index
├── .gitignore
├── package.json
└── README.md
```

### **Explanation of App Structure**:
- **App.js**: Your main component that can include the `Counter` component.
- **Counter.js**: This component will handle the counter logic (states, event handling).
- **CSS files**: For styling the components.

This structure is scalable and easy to maintain as the project grows. You can add more folders like `services/` (for API calls), `hooks/`, and `store/` (for state management using Redux or Context API) as the project complexity increases.

To create a **React** app with **TailwindCSS** using **Vite**, I’ll guide you through the process of setting up the project, configuring TailwindCSS, and creating a basic app with a clean UI. The project will be a **Task Manager App**, which allows users to create, view, and delete tasks.

### 1. **Setting up the Project**

#### Step 1: Create a Vite React project
Open your terminal and run the following command to create a new Vite project:

```bash
npm create vite@latest my-task-manager-app --template react
cd my-task-manager-app
```

#### Step 2: Install TailwindCSS
Next, install **TailwindCSS** along with its peer dependencies, and generate the Tailwind configuration files:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Step 3: Configure Tailwind
In the `tailwind.config.js` file, add the `src` directory to the `content` array to enable Tailwind to remove unused styles in production:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Step 4: Add Tailwind to your CSS
In `src/index.css`, replace everything with the Tailwind base styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Step 5: Start the development server
Run the following command to start the development server and ensure everything works:

```bash
npm run dev
```

---

### 2. **Building the Task Manager App**

#### **Features**:
- Add new tasks
- View tasks in a list
- Delete tasks

#### **Project Folder Structure**:
```
my-task-manager-app/
├── public/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Pages (e.g., Home page)
│   ├── App.jsx           # Main app component
│   ├── index.css         # TailwindCSS setup
│   └── main.jsx          # Entry point
├── tailwind.config.js    # Tailwind configuration
├── package.json          # Project dependencies
└── README.md
```

---

### 3. **Creating Components**

#### **a. `App.jsx` (Main Component)**

This is the entry point for your app. It will render the `TaskManager` component.

```jsx
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <TaskManager />
    </div>
  );
}

export default App;
```

---

#### **b. `TaskManager.jsx` (Main Task Management Component)**

This component will handle adding, displaying, and deleting tasks.

```jsx
import { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Task Manager</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
          >
            <span>{task}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-gray-500 text-sm mt-4">No tasks added yet.</p>
      )}
    </div>
  );
}

export default TaskManager;
```

---

### 4. **Styling with TailwindCSS**

The app uses **TailwindCSS** utility classes for styling:

- `bg-white`, `p-8`, `rounded-lg`, and `shadow-md` for a clean card-style container.
- `text-2xl`, `font-bold`, and `text-gray-800` for the header to make it stand out.
- The input uses `border`, `p-2`, `rounded-md` for a clean look, with focus states like `focus:outline-none` and `focus:border-blue-500`.
- Task items are styled using `flex`, `bg-gray-100`, `p-2`, and `rounded-md` for a minimalist and responsive look.

---

### 5. **Run the Project**

After setting up the components and TailwindCSS, run the project:

```bash
npm run dev
```

You should see a **Task Manager App** where users can:
- Add tasks via an input field and button.
- See tasks displayed in a list below.
- Delete tasks by clicking the delete button next to each task.

---

### 6. **Additional Ideas for Enhancement**
- **Local Storage**: Save tasks to the browser's local storage so they persist after refreshing the page.
- **Task Completion**: Add a feature where tasks can be marked as completed or active.
- **Responsiveness**: Ensure the app looks great on mobile by testing with small screens.

### **Final Project Preview**
- Clean UI with task management functionality.
- Responsive and styled with TailwindCSS.
  
This small but complete project will help you practice important React and Tailwind concepts like state management, event handling, and Tailwind's utility classes.
