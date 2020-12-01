import { useState } from "react";

export const useForm = () => {
  const [inputValue, setInputValue] = useState( {
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = ( { target } ) => {
    setInputValue({
      ...inputValue,
      // remember to compute the nave with the value
      [target.name]:target.value,
    })
  }

  const handleInputSubmit = (event) => {
    event.preventDefault();
    console.log( inputValue )
    // return event;
    // debugger
  }

  return [ inputValue, handleInputChange, handleInputSubmit]
}
