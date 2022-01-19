import React, { useEffect, useState } from 'react'
import { productsData } from '../../utils/utils';
import Product from '../Product/Product';

const Products = ({ setActiveProduct }) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        productsData().then(res => {
            setAllProducts(res)
        })
    }, []);
    console.log(allProducts);

    return (
        <div>
            {allProducts.map(product =>
                <div key={product.id}>
                    <Product setActiveProduct={setActiveProduct} product={product} id={product.id} image={product.image} title={product.title} />
                </div>
            )}
        </div>
    )
}

export default Products
