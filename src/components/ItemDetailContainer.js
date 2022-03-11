import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from "react"


let productoInicial = {
        id: 1,
        nombre: "Samsung A12",
        precio: 30000,
        img:"assets/A12.jpg",
        descripcion: [
          <ul key={1}>
          <li>Pantalla Infinity-V Display 6.4" HD+ (720x1600) TFT</li>
          <li>Procesador S5E3830(Exynos 850) Octa-core 2Ghz</li>
          <li>Memoria RAM 4GB</li>
          <li>Memoria Interna 64GB</li>
          <li>Expandible con MicroSD hasta 1TB</li>
          <li>Cámara Trasera Quad 45MP + 5MP (UW) + 2MP (M) + 2MP (D)</li>
          <li>Cámara Frontal 8MP</li>
          <li>Resolución de Video FHD (1920x1080) @30fps</li>
          <li>Batería 5000mAh para mayor duración y 15W Fast charging</li>
          <li>Medidas: 164x75.8x8.9mm</li>
          <li>Peso: 205gr</li>
          </ul>
      ],
    }


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState ({})

    useEffect (() => {
      const pedido = new Promise ((res,rej)=>{
        setTimeout(() => {
            res(productoInicial)
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

    }, {})
  return (
    <section> 
    <ItemDetail prod={productos}/>   
    </section>
  )
}

export default ItemDetailContainer