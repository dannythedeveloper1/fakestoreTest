import React, { useEffect } from 'react'

const Product = ({ setActiveProduct, product, image, id, title }) => {

    useEffect(() => {
        console.log("data is fasho ===>", product)
    }, []);
    return (
        <div>
            <h1>{product.title}</h1>
            <button onClick={() => setActiveProduct(product)}>Choose</button>
        </div>
    )
}

export default Product
