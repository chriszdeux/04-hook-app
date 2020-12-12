import React, { useEffect, useReducer } from 'react';
import './todo-style.css';
import { TodoForm } from './AddTodo';
import { TodoList } from './TodoList';
import { myReducer } from './todoReducer';


const init = () => {

  return JSON.parse( localStorage.getItem('todos') ) || []
}


export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(myReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleDelete = (todoId) => {
    console.log(todoId)

    const delAction = {
      type: 'del',
      payload: todoId
    }

    dispatch(delAction)

  }


  const handleToggle = ( todoId ) => {
    const actionToggle = {
      type: 'toggle',
      payload: todoId
    }

    dispatch(actionToggle)
  }

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    })
  }

  return (
    <>
      <h1>TodoApp: { todos.length }</h1>
      <hr/>

        <div className="row">
          <div className="col-7">
            < TodoList 
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }/>
          </div>
          
          <div className="col-5">
            <TodoForm 
            handleAddTodo={ handleAddTodo }
            />
          </div>
        </div>
    </>
  )
}
