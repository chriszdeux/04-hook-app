import React, { useEffect, useState } from 'react'

export const Message = () => {
  
  
  
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  })

  const {x, y} = coords;
  


  useEffect(() => {

    const myMouseMove = ( event ) => {
      const coords = { x:event.x, y:event.y }
      setCoords(coords)
      // console.log(coords)
    }
  

    window.addEventListener('mousemove', myMouseMove)

    return ( ) => {
      window.removeEventListener('mousemove', myMouseMove)
    }
  }, []) 
  return (
    <>
      <h3>You found the secret message</h3>
      <p>
        coord x: { x }, coord y: { y }
      </p>
    </>
  )
}
