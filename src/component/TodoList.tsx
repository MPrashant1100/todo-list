import axios from "axios";
import React, { useState } from "react";

interface Todo {
  _id: string;
  title: string;
  description: string;
  // Add more properties if there are other fields in your todo object
}

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleSaveTodo = async () => {
    try {
      const todo = { title, description, completed };
      const response = await axios.post("http://localhost:3000/api/todo", todo);
      console.log("Todo saved:", response.data);
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  const handleGetTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todo");
      console.log("Todos response:", response.data);
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div>
      <div className="">
        <div>
          <input
            placeholder="Enter title here"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Enter discription here"
            type="text"
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-black rounded-lg" onClick={handleSaveTodo}>
            Save Todo
          </button>
        </div>
        <div>
          <button onClick={handleGetTodos}>Get Todos</button>
        </div>
      </div>
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              <h1>{todo.title}</h1> 
              <p> {todo.description} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
