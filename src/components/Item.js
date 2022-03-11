import React from 'react'

const Item = ({product}) => {
  return (
    <li className='col-xl-4 col-6 vinietas_card'>
      <div className="card mt-4">
      <img src={product.img} class="card-img-top" alt="telefonos"/>
        <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">Precio: ${product.precio}</p>
        <a href="#" className="btn btn-warning">Ver mas</a>
        </div>
      </div>
    </li>
  )
}

export default Item