import React from 'react'

const Card = ({nombre, ciudad}) => {

  return (
    <div>
         <h3>Hola {nombre}! Tu ciudad favorita es: {ciudad}</h3>
         
    </div>
  )
}

export default Card