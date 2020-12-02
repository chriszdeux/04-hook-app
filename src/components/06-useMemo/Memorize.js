import React, { useState } from 'react'
import { useCounter } from '../../hook/useCounter'
import '../01-useState/counter.css'
import { Small } from './Small'
export const Memorize = () => {

  const [show, setShow] = useState(true)
  
  const {counter, increment} = useCounter( )
  return (
    <>
      <h1>Memorize: <Small value={ counter } /> </h1>
      <hr/>

      <button 
        className="btn btn-outline-primary"
        onClick={ increment }
      > + 1</button>

      <button 
      className="btn btn-outline-primary"
      onClick={() => setShow(!show)}
      >
      Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
}
