import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import productosIniciales from './productos'


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState (true)
  const [productos, setProductos] = useState ([])

  const {idProducto} = useParams()

    useEffect (() => {
      toast.info("Trayendo la informacion...",{theme: "dark"}
    )
      const pedido = new Promise ((res,rej)=>{
        setTimeout(() => {
          const detalle = productosIniciales.find(function(element){ 
            return element.id == idProducto; 
          });
          return res(detalle)
        }
        , 500);
      })

      pedido
      .then((resultado)=>{
        toast.dismiss()
        setProductos(resultado)
        console.log ("Carga exitosa")
      })

      .catch((error)=>{
        toast.error ("Error al cargar la informacion")
      })
      .finally (()=>{
        setLoading(false)
      })

    }, [idProducto])

    if(loading){
      return <h4>Cargando Detalle</h4>
    } else{
  return (
    <section> 
    <ItemDetail prod={productos}/>   
    </section>
  )
}}

export default ItemDetailContainer