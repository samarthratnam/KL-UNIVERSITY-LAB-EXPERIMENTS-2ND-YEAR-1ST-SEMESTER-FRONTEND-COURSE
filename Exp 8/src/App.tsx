import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Failed to fetch tasks:", err));
  }, []);

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask = { content: input, completed: false };
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTask)
    });
    const added = await res.json();
    setTasks([...tasks, added]);
    setInput("");
  };

  const toggleTask = async (id: number, completed: boolean) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({completed: !completed})
    });
    setTasks(tasks.map(t => t.id === id ? {...t, completed: !completed} : t));
  };

  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Lab-8 To-Do List
        </h1>

        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <input
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-colors"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            type="submit"
          >
            Add
          </button>
        </form>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              No tasks found
            </div>
          ) : (
            <ul className="space-y-2">
              {tasks.map(task => (
                <li
                  key={task.id}
                  className={`flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors ${
                    task.completed ? "opacity-60" : ""
                  }`}
                >
                  <span
                    onClick={() => toggleTask(task.id, task.completed)}
                    className={`cursor-pointer flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                  >
                    {task.content}
                  </span>
                  <button
                    className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                    onClick={() => deleteTask(task.id)}
                    aria-label="Delete"
                  >
                    <Trash2 size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
