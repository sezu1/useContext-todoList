import React from 'react';
import { useTodoContext } from '../context/TodoProvider';


export function TodosPage() {
    const { addTodo, todos, value, setValue } = useTodoContext();

    function changeValue(event) {
        const { value } = event.target;
        setValue(value);
    }

    function addNewTodo(event) {
        event.preventDefault();
        const todo = {
            id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
            title: value,
            status: false
        };
        addTodo(todo);
        setValue('');
    }

    return (
        <div>
            <div>
                <h1>Todos page</h1>
                <form onSubmit={addNewTodo}>
                    <input type='text' onChange={changeValue} value={value} placeholder='name' name='name'/>
                    <button>add todo</button>
                </form>
                {todos.map(todo => (
                    <p key={todo.id}></p>
                ))}
            </div>
        </div>
    );
}


















// import React, {useState} from 'react';
// import {useTodoContext} from "../context/TodoProvider";
// import Todo from "./Todo";
//
// export function TodosPage() {
//
//     const {setUserInfo} = useTodoContext();
//
//     const [value, setValue] = useState('')
//
//     const [todos, setTodos] = useState([]);
//
//
//     function changeValue (event){
//         const {value} = event.target // const value = event.target.value;
//         setValue(value)
//     }
//
//     function addTodo(event){
//         event.preventDefault()
//         let todo = {}
//         if (todos.length === 0){
//             todo = {
//                 id: 1,
//                 title: value,
//                 status: false
//             }
//         }
//         else {
//             todo = {
//                 id: todos[todos.length -1].id + 1,
//                 title: value,
//                 status: false
//             }
//         }
//         setTodos([...todos, todo])
//         setValue('')
//     }
//
//     function deleteTodo(id){
//         const filteredTodos = todos.filter(todo => todo.id !== id)
//         setTodos(filteredTodos)
//     }
//
//     function changeStatus(event){
//         // console.dir(event.target)
//         const {checked, value} = event.target
//         // console.log(checked)
//         const id = +value
//         const newTodos = todos.map(todo => {
//             if (todo.id === id){
//                 return {
//                     ...todo,
//                     status: checked
//                 }
//             }else{
//                 return todo
//             }
//         })
//         setTodos(newTodos)
//     }
//
//     function updateTodos(id){
//         const newArr = todos.map(todo => {
//             if (todo.id === id){
//                 return {
//                     ...todo,
//                     title: value
//
//                 }
//             }
//             else{
//                 return todo
//             }
//         })
//         setTodos(newArr)
//         setValue('')
//     }
//
//
//
//
//     return (
//         <div>
//             <h1>Todos page</h1>
//
//             <form onSubmit={addTodo}>
//                 <input type='text' onChange={changeValue} value={value} placeholder='name' name='name'/>
//                 <button>add todo</button>
//             </form>
//
//
//
//             {
//                 todos.map(todo => <Todo key={todo.id}
//                                         todo = {todo}
//                                         updateTodos={updateTodos}
//                                         changeStatus={changeStatus}
//                                         deleteTodo={deleteTodo}
//
//                 />)
//             }
//
//
//         </div>
//     );
// }
//
