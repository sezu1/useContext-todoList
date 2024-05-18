import React, {useState} from 'react';
import { useTodoContext } from '../context/TodoProvider';

function Todo() {

    const { changeStatus, todos, updateTodos, deleteTodo, value } = useTodoContext();

    const [newTitle, setNewTitle] = useState('');


    return (
        <div>
            {todos.map(todo => (
                <p key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.status}
                        onChange={() => changeStatus(todo.id, !todo.status)}
                    />
                    {todo.status ? <s>{todo.title}</s> : <span>{todo.title}</span>}

                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    <button onClick={() => {
                        setNewTitle(value)
                        updateTodos(todo.id, value)
                    }}>update
                    </button>
                </p>
            ))}
        </div>
    );
}

export default Todo;

























// import React from 'react';
//
//
// function Todo({todo, updateTodos, changeStatus, deleteTodo}) {
//     if (!todo) return null;
//
//
//
//     return (
//         <div>
//             <input
//                 checked={todo.status}
//                 type='checkbox'
//                 onChange={changeStatus}
//                 value={todo.id}/>
//             {todo.status ? <s>{todo.title}</s> : <span>{todo.title}</span>}
//             <button onClick={() => deleteTodo(todo.id)}>delete</button>
//             <button onClick={() => updateTodos(todo.id)}>update</button>
//
//         </div>
//     );
// }
//
// export default Todo;