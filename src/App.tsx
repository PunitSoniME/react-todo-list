import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_TODOS = 'stored_todo_list';

function App() {

  const [todos, setTodos] = useState<any>([]);
  const todoRef = useRef<any>();

  //  This will be called only on first reload
  useEffect(() => {

    let getStoredTodos = localStorage.getItem(LOCAL_STORAGE_TODOS);
    if (getStoredTodos) {
      let arrayOfStoredTodos = JSON.parse(getStoredTodos);
      setTodos(arrayOfStoredTodos);
    }
  }, []);

  function generateUniqueId() {
    let date = new Date();
    return `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
  }

  //  This will be called whenever we add any todo to update todo list
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(todos));
  }, [todos])

  //  This will be called whenever we add any todo
  function AddTodo() {
    const value = todoRef.current.value;
    if (value === '') return;

    setTodos((oldTodos: any) => {
      return [...oldTodos, { id: generateUniqueId(), name: value, finished: false }];
    });

    todoRef.current.value = null;
  }

  //  To Change Status Of Todo
  function changeStatus(id: any) {
    const allTodos = [...todos];
    const todo = allTodos.find(d => d.id === id);
    todo.finished = !todo.finished;
    setTodos(allTodos);
  }

  //  Delete Finished Todos
  function DeleteCompletedTodos() {
    const allTodos = [...todos];
    const remainingTodos = allTodos.filter(d => !d.finished);
    setTodos(remainingTodos);
  }

  return (
    <>
      <div className="main">
        <input ref={todoRef} type="text" className="form-control" placeholder="Enter Todo" />
        <button type="submit" onClick={AddTodo} className="btn btn-primary">Add</button>
        <button type="button" onClick={DeleteCompletedTodos} className="btn btn-danger">Delete Completed Todos</button>
        <div>
          <TodoList todos={todos} changeStatus={changeStatus} />
        </div>
      </div>
    </>
  );

}

export default App;
