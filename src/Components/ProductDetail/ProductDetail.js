import React, { useEffect } from 'react'

const ProductDetail = ({ activeProduct }) => {


    return (
        <div>
            <h1> {activeProduct.description}</h1>
        </div>
    )
}

export default ProductDetail
