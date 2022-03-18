import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemCount from '../Counter'

const ItemDetail = ({prod}) => {

  const [cantSeleccionada, setcantSeleccionada] = useState(0)
  

  const onAdd = (cantSeleccionada) => {
    
      toast.success("Sus productos fueron enviados al carrito")
      setcantSeleccionada (cantSeleccionada)
  }


  return (
    <article> 
      <div className="container detalle_orden mt-5 mb-5">
            <img src={prod.img} alt="" />
            <div className="detalle_titulos">
                <h3>{prod.nombre}</h3>
                <b>${prod.precio}</b>
                <p className="detalle_descripcion">{prod.descripcion}</p>
            </div>
      </div>
            {cantSeleccionada === 0 ? (<ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>): (
            <>
            <Link to="/carrito" className='btn btn-warning'>Terminar Compra</Link>
            <button onClick={()=>setcantSeleccionada(0)} className='btn btn-warning'>Reiniciar compra</button>
            </>
            )}
    </article>
  )
}

export default ItemDetail