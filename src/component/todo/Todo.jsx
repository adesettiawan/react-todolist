import React, { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Eat",
        },
        {
            id: 2,
            title: "Sleep",
        },
        {
            id: 3,
            title: "Code",
        },
    ]);

    const handleCreateTodos = (todo) => {
        setTodos(todos.concat(todo));
    };

    console.log(todos);

    return (
        <div className="container mt-5">
            <h4>Todo List</h4>
            <TodoCreate onCreateTodos={handleCreateTodos} />
            <TodoList dataTodos={todos} />
        </div>
    );
};

export default Todo;
