import React, { memo } from 'react'

export const Small = memo (({ value }) => {
  console.log('you call me again')
  return (
    <>
      <small>{ value }</small>
    </>
  )
})
