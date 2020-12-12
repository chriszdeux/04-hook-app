import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hook/useForm';
import './todo-style.css';
import { myReducer } from './todoReducer';


const init = () => {

  return JSON.parse( localStorage.getItem('todos') ) || []
  // return [{
  //   id: new Date().getTime(),
  //   description: 'Learn React Reduce',
  //   done: false
  // }]
}


export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(myReducer, [], init);

  const [ { description }, handleInputChange, resetForm ] = useForm({
    description: ''
  });
  console.log(description);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleSubmit = ( event ) => {
    
    if (description.trim().length <= 1) {
      return 
    }

    event.preventDefault();
    console.log('new task');


    const newAdd = {
      id: new Date().getTime(),
      description: description,
      done: false
    };

    const addAction = {
      type: 'add',
      payload: newAdd
    };

    dispatch(addAction);
    resetForm();


  }


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
            <form onSubmit={ handleSubmit }>
              <input type="text" 
              className="form-control"
              placeholder="add todo"
              autoComplete="off"
              name="description"
              value={ description }
              onChange={ handleInputChange }
              />
            <button className="btn btn-outline-primary mt-1 btn-block">Add</button>
            </form>
          </div>
        </div>
    </>
  )
}
