import React from 'react'

const ItemDetail = ({prod}) => {
  return (
    <article className="container detalle_orden mt-5 mb-5">
            <img src={prod.img} alt="" />
            <div className="detalle_titulos">
                <h3>{prod.nombre}</h3>
                <b>${prod.precio}</b>
                <p className="detalle_descripcion">{prod.descripcion}</p>
            </div>
    </article>
  )
}

export default ItemDetail