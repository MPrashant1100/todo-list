import axios from "axios";
import React, { useState } from "react";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDiscription] = useState('');
    const [completed, setCompleted] = useState(false)

    const handleSaveTodo = async () => {
        try {
            const todo = {title, description, completed }
            const response = await axios.post('http://localhost:3000/api/todo', todo)
            console.log("Todo saved:", response.data);
        } catch (error) {
            // Handle any errors that occur during the POST request
            console.error("Error saving todo:", error);
        }       
    }
  return (
    <div>
      <div className="">
        <div>
          <input placeholder="Enter title here"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <input placeholder="Enter discription here" 
          type="text"
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <div>
            <button 
            className="bg-black rounded-lg"
            onClick={handleSaveTodo}>
                Save Todo
            </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
