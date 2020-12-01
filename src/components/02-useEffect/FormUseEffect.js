import React, { useEffect, useState } from 'react'
import '../01-useState/counter.css'
import { Message } from './Message';
export const FormUseEffect = () => {
  return (
    <>
      <h1>Form useEffect</h1>
      <hr/>
      <div className="form-group">
        <input type="text" className="form-control" name="name" value={ name }onChange={ handleInputChange } placeholder="name"/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" name="email" value={ email }onChange={ handleInputChange } placeholder="email"/>
      </div>


      {
        (name === '123') && < Message />
      }
    </>
  )
}
