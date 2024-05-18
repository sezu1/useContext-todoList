import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function useTodoContext (){
   return useContext(TodoContext);
}

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    const updateTodos = (id, newTitle) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: newTitle };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const changeStatus = (id, newStatus) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, status: newStatus };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const values = {
     todos,
        addTodo,
        deleteTodo,
        updateTodos,
        changeStatus,
        value,
        setValue
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
};


