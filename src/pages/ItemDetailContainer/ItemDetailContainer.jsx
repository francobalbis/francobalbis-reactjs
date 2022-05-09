import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
                id: 1,
                title: 'Zapatillas Adidas',
                price: '$10040',
                stock: 7,
                imageUrl:"data:image/jpeg;base64,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"
            },
            {
                id: 2,
                title: 'Remera Boca Juniors',
                price: '$15000',
                stock: 5,
                imageUrl: "data:image/jpeg;base64,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"
            },
            {
                id: 3,
                title: 'Remera River Plate',
                price: '$15000',
                stock: 5,
                imageUrl: "data:image/jpeg;base64,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"
            }
        ];
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer