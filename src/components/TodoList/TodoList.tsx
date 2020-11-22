import React from 'react'
import Todo from '../Todo/Todo';
import '../TodoList/TodoList.css'

export default function TodoList({ todos, changeStatus }: any) {
    return <>
        <h3 className="my-2">Pending Todos...</h3>
        <div className="todos-inner">
            {
                todos.filter((d: any) => !d.finished).map((todo: any) => {
                    return <Todo key={todo.id} todo={todo} changeStatus={changeStatus} />
                })
            }
        </div>

        <br />
        <h3 className="my-2">Commpleted Todos...</h3>
        <div className="todos-inner">
            {
                todos.filter((d: any) => d.finished).map((todo: any) => {
                    return <Todo key={todo.id} todo={todo} changeStatus={changeStatus} />
                })
            }
        </div>

    </>
}
