import React from 'react'

export default function Todo({ todo, changeStatus }: any) {

    function changeTodoStatus() {
        changeStatus(todo.id);
    }

    return (
        <div>
            <input type="checkbox" checked={todo.finished} onChange={changeTodoStatus} />
            <label>
                {todo.name}
            </label>
        </div>
    )
}
