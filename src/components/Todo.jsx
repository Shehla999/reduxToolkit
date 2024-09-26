import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Todo List
        </h2>

        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos yet!</p>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <span className="text-lg text-gray-800">{todo.text}</span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-500 font-semibold hover:text-red-700 transition duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todo;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo } from "../features/todo/todoSlice";
// const Todo = () => {
//   const todos = useSelector((state) => state.todo.todos);

//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
//           <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
//             Todo List
//           </h2>

//           {todos.length === 0 ? (
//             <p className="text-center text-gray-500">No todos yet!</p>
//           ) : (
//             <ul className="space-y-4">
//               {todos.map((todo) => (
//                 <li
//                   key={todo.id}
//                   className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
//                 >
//                   <span className="text-lg text-gray-800">{todo.text}</span>
//                   <button
//                     onClick={() => dispatch(removeTodo(todo.id))}
//                     className="text-red-500 font-semibold hover:text-red-700 transition duration-200"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Todo;
