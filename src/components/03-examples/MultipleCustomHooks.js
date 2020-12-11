import React, { useEffect, useState } from 'react'
import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch'
import '../01-useState/counter.css'
export const MultipleCustomHooks = () => {

  const { counter, increment, decrement} = useCounter(1);
  
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  console.log(data)
  // debugger
  // const { quote, author } = data[0];
  const { quote, author } = !!data && data[0];
  // debugger
  // console.log(state)
  // let myData = data.map(item => {
  //     (item)
  //       ? myData.push(item)
  //       : console.log('not exits')
  //   })
  // debugger
  return (
    <>
      <h1>Braking Bad Quotes</h1>
      <hr/>
      {
        
        loading
          ? 
            (
              <div className="alert alert-info text-center">
                loading...
              </div>
            )
          
          : 
            (
              <blockquote className="blockqoute text-right">
                <p className="mb-0"> { quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
              </blockquote>
            )
        
      }

      <button className="btn btn-primary" onClick={ decrement }>Previous</button>
      <button className="btn btn-primary" onClick={ increment }>Next</button>

    </>
  )
}
