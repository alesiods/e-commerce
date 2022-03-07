import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div className='container'>
        <ul className='row'>
            {data.map((prod)=>{
                return <Item key={prod.id} product={prod}/>
            })}
        </ul>
    </div>
  )
}

export default ItemList