import React from 'react'
import {useState} from "react"
import { toast, ToastContainer } from 'react-toastify'


const ItemCount = ({stock, initial, onAdd}) => {

    const [estado, setEstado] = useState(initial)

  const Sumar = () => {
      if (estado <stock){
    setEstado(estado +1)}
    if(stock==estado){
      toast.warning("Usted a alcanzado el maximo de stock")
    }
      }
    
    const Restar = () => {
        if(estado> initial){
            setEstado(estado -1)}
    }

    const Resetear = () => {
        setEstado(1)
    }

    const Agregar= () => {
         onAdd(estado)
    }

  return (
      <div>
    <p>Contador: {estado}</p>
    <button onClick={Sumar} type="button" class="btn btn-warning m-1">+</button>
    <button onClick={Restar} type="button" class="btn btn-warning m-1">-</button>
    <button onClick={Resetear} type="button" class="btn btn-warning m-1">Resetear</button>
    <button onClick={Agregar} type="button" class="btn btn-warning m-1">Agregar Carrito</button>
    </div>
  )
}


export default ItemCount