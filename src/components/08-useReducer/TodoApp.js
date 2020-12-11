import React, { useReducer } from 'react';
import './todo-style.css';
import { myReducer } from './todoReducer';


const initialState = [{
  id: new Date().getTime(),
  description: 'Learn React Reduce',
  done: false
}]


export const TodoApp = () => {

  const [ todos ] = useReducer(myReducer, initialState)
  console.log(todos)
  return (
    <>
      <h1>TodoApp: { todos.length }</h1>
      <hr/>

        <div className="row">
          <div className="col-7">
            <ul className="list-group list-group-flush">
            {
              todos.map( (list, index) => (
                <li key={ list.id } className="list-group-item">
                  <p className="text-center" >
                    {index + 1}. {list.description}  
                  </p>
                  <button className="btn btn-danger">Delete</button>
                </li>
              ))
            }
            </ul>
          </div>
          
          <div className="col-5">
            <h4>Add Todo</h4>
            <hr/>
            <form>
              <input type="text" 
              className="form-control"
              placeholder="add todo"
              autoComplete="off"
              name="description"
              />
            <button className="btn btn-outline-primary mt-1 btn-block">Add</button>
            </form>
          </div>
        </div>
    </>
  )
}
