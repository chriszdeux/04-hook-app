import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
  const [show, setShow] = useState( false )
  return (
    <>
      <h1>Real example Ref</h1>
      <hr/>
      <div>
        { show && <  MultipleCustomHooks /> }
      </div>
      <button className="btn btn-outline-primary"
      onClick={() => {
        setShow(!show)
      }}
      >Show/Hide</button>
    </>
  )
}
