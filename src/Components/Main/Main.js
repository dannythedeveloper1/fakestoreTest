import React, { useState, useEffect } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import Products from '../Products/Products'

const Main = () => {
    const [activeProduct, setActiveProduct] = useState(null);
    return (
        <div>
            <Products setActiveProduct={setActiveProduct}/>
            {activeProduct && <ProductDetail activeProduct={activeProduct} />}
        </div>
    )
}

export default Main
