import React, { useState } from 'react'
import './counter.css'
export const CounterApp = () => {

  const [state, setState] = useState( {
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  })

  const {counter1, counter2} = state;
  return (
    <>
      <h1>CounterApp {counter1}</h1>
      <h1>CounterApp {counter2}</h1>
      <hr/>

      <button className='btn btn-primary'
      //onClick tiene que mandar llamar una funcion, ya que esto sin esto te mandaria un error
      //recordar siempre que es lo que se esta mandando a llamar, arreglo, objeto, string, etc..
      onClick={ () => {
        setState({
          ...state, //tener en cuenta siempre el spread, para traer todos las propiedades sin pisar sus valores
          counter1: counter1 + 1,
        })
      }
       }
      >+1</button>

      <button className='btn btn-secondary'
      onClick={() => {
        setState({
          ...state,
          counter2: counter2 + 1,

        })
      }}
      >
        +1
      </button>

      <button className="btn btn-info"
      onClick={() => {
        setState({
        ...state,
        counter1: counter1 + 1,
        counter2: counter2 + 1,
      })
      }}
      >all + 1</button>
    </>
  )
}
