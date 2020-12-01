import React from 'react'
import { useForm } from '../../hook/useForm';
import '../01-useState/counter.css';
export const FormCustomHook = () => {
  
  const [inputValue, handleInputChange] = useForm()
  const { name, email } = inputValue;
  return (
    <>
      <h1>Form Custom Hooks</h1>
      <hr/>

      <div className="form-group">
        <input type="text" className="form-control" name="name" value={ name }onChange={ handleInputChange } placeholder="name"/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" name="email" value={ email }onChange={ handleInputChange } placeholder="email"/>
      </div>
    </>
  )
}
