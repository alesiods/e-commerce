import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import productosIniciales from '../productos'

const ItemListContainer = () => {
  const [loading, setLoading] = useState (true)
  const [productos, setProductos] = useState ([])

  const {idCategoria} = useParams()

  
  
  useEffect (() => {
    toast.info("Trayendo la informacion...",{theme: "dark"}
    )
    const pedido = new Promise ((res,rej)=>{
      setTimeout(() => {
          console.log (idCategoria)
            if (idCategoria == undefined) {
              return res(productosIniciales)
            }else if(idCategoria !=null){ 
              const filtered = productosIniciales.filter(function(element){ 
                return element.marca == idCategoria; 
              });
              return res(filtered)
            }
        }, 2000);
      })

      pedido
      .then((resultado)=>{
        toast.dismiss()
        setProductos(resultado)
      })

      .catch((error)=>{
        toast.error ("Error al cargar la informacion")
      })
      .finally (()=>{
        setLoading(false)
      })

    }, [idCategoria])
    
    if(loading){
      return <h4>Cargando Articulos</h4>
    } else{
  return(
    <div>
    <>
      <ItemList data={productos}/>
    </>
    </div>)
}}

export default ItemListContainer