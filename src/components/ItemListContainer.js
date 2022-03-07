import React from 'react'
import ItemCount from "./ItemCount"
import ItemList from './ItemList'
import {useState, useEffect} from "react"

let productosIniciales = [
  {
      id: 1,
      nombre: "Samsung A12",
      precio: 30000,
      img:"assets/A12.jpg"
  },
  {
      id: 2,
      nombre: "Samsung A52",
      precio: 65000,
      img:"assets/A12.jpg"   
  },
  {
      id: 3,
      nombre: "Samsung S20",
      precio: 84000,
      img:"assets/A12.jpg"     
  },
  {
    id: 4,
    nombre: "Samsung M12",
    precio: 39000,
    img:"assets/A12.jpg"     
}
  
  ]

const ItemListContainer = ({usuario}) => {
  const [productos, setProductos] = useState ([])

    useEffect (() => {
      const pedido = new Promise ((res,rej)=>{
        setTimeout(() => {
            res(productosIniciales)
        }, 2000);
      })

      pedido
      .then((resultado)=>{
        setProductos(resultado)
        console.log ("Carga exitosa")
      })

      .catch((error)=>{
        console.error ("error al cargar la informacion")
      })

    }, [])

  
  return (
    <div>
    <h2>Bienvenido {usuario}</h2>
    <>
      <ItemList data={productos}/>
      <ItemCount maximo={14}/>
    </>
    </div>
  )
}

export default ItemListContainer