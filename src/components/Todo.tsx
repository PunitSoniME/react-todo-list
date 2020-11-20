import React from 'react'

const styles = {
    pl_1: {
        paddingLeft: "0.5rem"
    }
}

export default function Todo({ todo, changeStatus }: any) {

    function changeTodoStatus() {
        changeStatus(todo.id);
    }

    return (
        <div>
            <input type="checkbox" id={todo.id} checked={todo.finished} onChange={changeTodoStatus} />
            <label htmlFor={todo.id}
                style={Object.assign({ textDecoration: todo.finished ? 'line-through' : 'none' }, styles.pl_1)}>
                {todo.name}
            </label >
        </div >
    )
}
