import React from 'react'
import ItemCount from "./ItemCount"

const ItemListContainer = ({usuario}) => {
  
  return (
    <div>
    <h2>Bienvenido {usuario}</h2>
    <ItemCount maximo={14}/>
    </div>
  )
}

export default ItemListContainer