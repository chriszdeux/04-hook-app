import React from 'react'
import './counter.css'
import { useCounter } from '../../hook/useCounter';


export const CounterWithCustomHook = () => {
  const {counter, increment, decrement, reset} = useCounter()
  return (
    <>
      <h1>Counter With Custom Hook { counter } </h1>
      <hr/>
      <button className="btn btn-success" onClick={ () => increment(5) }>+1</button>
      <button className="btn btn-primary" onClick={ reset }>reset</button>
      <button className="btn btn-info" onClick={ () => decrement(2) }>-1</button>
    </>
  )
}
