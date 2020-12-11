import { useState } from "react";

export const useCounter = ( initialState = 0 ) => {
  const [counter, setCounter] = useState(initialState)

  const increment = () => {
    setCounter(counter + 1)
    
  }
  
  const decrement = () => {
    // (undefined)
    //   ? setCounter(initialState)
    //   : setCounter(counter - 1)
    setCounter(counter - 1)
  }

  const initialPosition = () => {
    setCounter(initialState)
  }

  const reset = () => {
    setCounter(initialState)
  }

  return {
    counter,
    increment,
    decrement,
    reset,
    initialPosition,
  }
}
