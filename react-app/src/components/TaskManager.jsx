import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
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
