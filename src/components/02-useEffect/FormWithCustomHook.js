import React, { useEffect } from 'react';
import { useForm } from '../hook/useForm';
import './effects.css';


export const FormWithCustomHook = () => {

  const [formState, handleInputChange, handlerSubmit] = useForm( {
    name: '',
    email: '',
    password: '',
  } )

  
  const { name, email, password } = formState;

  useEffect(() => {
    console.log('password change')
  }, [ password ] )


  return (
    <form onSubmit={ handlerSubmit } >
      <h1>FormWithCustomHook</h1>
      <hr/>
      <div className="form-group">
        <input 
          type="text"
          name="name"
          className="form-control"
          placeholder="name"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group">
        <input 
          type="text"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group">
        <input 
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          autoComplete="off"
          value={ password }
          onChange={ handleInputChange }
        />
      </div>

      <button type="submit" className="btn btn-primary">Save</button>

    </form>
  )
}
