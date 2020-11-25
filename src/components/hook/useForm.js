import { useState } from "react"

export const useForm = ( initialState = {} ) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ( { target } ) => {
    setValues({
      ...values,
      [ target.name ]: target.value, 
    })
  }


  const handlerSubmit = ( event ) => {
    event.preventDefault();
    console.log( values )
  }

  return [ values, handleInputChange, handlerSubmit ]
}
