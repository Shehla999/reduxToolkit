import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Add Your Task
        </h1>

        <form onSubmit={addTodoHandler} className="flex flex-col gap-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new task..."
            className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-200"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-200"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
