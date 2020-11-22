import React from 'react'
import './Todo.css';

export default function Todo({ todo, changeStatus }: any) {

    function changeTodoStatus() {
        changeStatus(todo.id);
    }

    return (
        <div className="todo">
            <input type="checkbox" id={todo.id} checked={todo.finished} onChange={changeTodoStatus} />
            <label htmlFor={todo.id} className="pl_1" dangerouslySetInnerHTML={{ __html: todo.name }}
                style={Object.assign({ textDecoration: todo.finished ? 'line-through' : 'none' })}>
            </label>
        </div>
    )
}
