import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, changeStatus }: any) {
    return (
        todos.map((todo: any) => {
            return <Todo key={todo.id} todo={todo} changeStatus={changeStatus} />
        })
    )
}
