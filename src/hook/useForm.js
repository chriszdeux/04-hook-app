import { useState } from "react";

export const useForm = () => {
  const [inputValue, setInputValue] = useState( {
    name: '',
    email: '',
  });

  const handleInputChange = ( { target } ) => {
    setInputValue({
      ...inputValue,
      [target.name]:target.value,
    })
  }

  return [ inputValue, handleInputChange]
}
