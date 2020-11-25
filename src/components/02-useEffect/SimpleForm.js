import React, { useEffect, useState } from 'react'
import { useForm } from '../hook/useForm'
import './effects.css'
import { Message } from './Message'
export const SimpleForm = () => {

  const { values, useValues } = useForm( {
    name: '',
    email: '',
    password: '',
  } )

  const { name, email, password } = values;

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
    </>
  )
}
