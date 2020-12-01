import React, { useEffect } from 'react'
import { useForm } from '../../hook/useForm';
import '../01-useState/counter.css';
export const FormCustomHook = () => {
  
  const [inputValue, handleInputChange, handleInputSubmit] = useForm()
  const { name, email, password } = inputValue;

  useEffect(() => {
    console.log('name changed')
  }, [ name ])
  return (
    
    
    <form onSubmit={ handleInputSubmit }>
      <h1>Form Custom Hooks</h1>
      <hr/>
        <div className="form-group">
          <input type="text" className="form-control" name="name" value={ name }onChange={ handleInputChange } placeholder="name"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="email" value={ email }onChange={ handleInputChange } placeholder="email"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" value={ password }onChange={ handleInputChange } placeholder="*****"/>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    
  )
}
