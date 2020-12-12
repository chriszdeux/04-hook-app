import { useState } from "react";

export const useForm = ( initialState = {} ) => {
  const [inputValue, setInputValue] = useState( initialState );

  const resetForm = () => {
    setInputValue( initialState )
  }
  const handleInputChange = ( { target } ) => {
    setInputValue({
      ...inputValue,
      // remember to compute the name with the value
      [target.name]:target.value,
    })
  }

  // const handleInputSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log( inputValue )
  //   // return event;
  //   // debugger
  // }

  return [ inputValue, handleInputChange, resetForm]
}
