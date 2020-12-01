import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState( { x:0, y:0 } )
  const { x, y } = coords;

  const mouseMove = (event) => {
    const coords = { x: event.x, y:event.y };
    setCoords(coords);
  }

  useEffect(() => {  
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('')

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
    
  }, [])

  return (
    <>
      <h2>Secret message</h2>
      <h3>Coords x: {x} y: {y}</h3>
    </>
  )
}
