import React from 'react'

const ItemDetail = ({prod}) => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <article className='col-xl-4 col-6 vinietas_card'>
        <img src={prod.img} class="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">{prod.precio}</p>
            <div>
              {prod.descripcion}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ItemDetail