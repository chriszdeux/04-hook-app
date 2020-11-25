import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'
export const SimpleForm = () => {

  const [formState, setFormState] = useState( {
    name: '',
    email: '',
  } )

  const handleInputChange = (  { target }  ) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }
  const { name, email } = formState;

  // useEffect(() => {
  //   console.log('form change')
  // }, [formState])

  useEffect(() => {
    // console.log('name change :)')
  }, [/** name */])
  useEffect(() => {
    // console.log('email change :)')
  }, [/** email */])
  return (
    <>
      <h1>UseEffect</h1>
      <hr/>
      {/* <p>Bienvenido { name }, veo que tu email { email } es algo peculiar diria yo :) </p> */}
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

      {
        (name === '123') && <Message />
      }
    </>
  )
}
