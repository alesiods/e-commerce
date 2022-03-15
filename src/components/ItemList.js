import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import Navbar2 from './Navbar2'

const ItemList = ({data}) => {
  return (
    <section>
    <Navbar2/>
    <div className='container'>
        <ul className='row'>
            {data.map((prod)=>{
                return <Item key={prod.id} product={prod}/>
            })}
        </ul>
    </div>
    </section>
  )
}

export default ItemList