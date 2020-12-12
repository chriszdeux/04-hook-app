import React from 'react'
import { useForm } from '../../hook/useForm';

export const TodoForm = ( { handleAddTodo } ) => {

  const [ { description }, handleInputChange, resetForm ] = useForm({
    description: ''
  }); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if( description.trim().length <=  1) {
      return
    }

    
    const newAdd = {
      id: new Date().getTime(),
      description: description,
      done: false
    };


    handleAddTodo(newAdd);
    resetForm();
  }

  return (
    <>
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
    </>
  )
}
