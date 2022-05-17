import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import Bubble from '../Bubble/Bubble';
import './Item.css';

function Item({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <div className='card'>
        <div className='header'>{ item?.title }</div>
        <div className='content'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
            <Link to={'/item/' + item?.id}>
              <button>Ver Detalle</button>
            </Link>
            <div className='bubble-add'>
              <Bubble isButton onBubbleClick={() => cartCtx.addProduct({quantity: 1, ...item})}>+</Bubble>
            </div>
        </div>
        <div className='footer'>${ item?.price }</div>
    </div>
  )
}

export default Item