import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({ item }) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
    }
  return (
    <div className='item-detail'>
        <div className='left'>
            <div className='img-detail-container'>
                <img src={ item?.imageUrl } alt='Imagen del producto' />
            </div>
        </div>
        <div className='right'>
            <div className='info-container'>
                <h2>{ item?.title }</h2>
                <p>{ item?.price }</p>
                <div className='count-container'>
                    {cantidadDeProductos ?
                         <button><Link to='/cart'>Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                         <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail