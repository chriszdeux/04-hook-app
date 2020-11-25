import React, { useState } from 'react';
import './effects.css';


export const FormWithCustomHook = () => {

  const [formState, setFormState] = useState( {
    name: '',
    email: '',
    password: '',
  } )

  const handleInputChange = (  { target }  ) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }
  const { name, email, password } = formState;

  return (
    <>
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

    </>
  )
}
