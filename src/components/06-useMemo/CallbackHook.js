import React, { useCallback, useState } from 'react'
import '../01-useState/counter.css'
import { ShowIncrement } from './ShowIncrement';
export const CallbackHook = () => {

  const [state, setState] = useState( 10 );

  // const increment = () => {
  //   setstate( state + 1 );
  // }

  const increment = useCallback( ( num ) => {
    setState( state => state + num )
  }, [ setState])
  return (
    <>
      <h1>UseCallback Hook: { state }</h1>
      <hr/>
      <ShowIncrement increment={ increment }/>
    </>
  )
}
