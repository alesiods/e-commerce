import React from 'react'
import {useState} from "react"

const ItemCount = ({maximo}) => {

    const stock = maximo
    const [estado, setEstado] = useState(1)

  const Sumar = () => {
      if (estado <stock){
    setEstado(estado +1)}
    if(stock==estado){
      alert("Usted a alcanzado el maximo de stock")
    }
      }
    
    const Restar = () => {
        if(estado>1){
            setEstado(estado -1)}
    }

    const Resetear = () => {
        setEstado(1)
    }

    const Agregar= () => {
         if(estado<=stock){
           alert("Gracias por su compra")
           console.log(estado)
         }
    }

  return (
      <div>
    <p>Contador: {estado}</p>
    <button onClick={Sumar} type="button" class="btn btn-warning m-1">Sumar</button>
    <button onClick={Restar} type="button" class="btn btn-warning m-1">Restar</button>
    <button onClick={Resetear} type="button" class="btn btn-warning m-1">Resetear</button>
    <button onClick={Agregar} type="button" class="btn btn-warning m-1">Agregar carrito</button>
    </div>
  )
}


export default ItemCount