import React, { useEffect, useState } from 'react'

const Product = ({ setActiveProduct, product, image, id, title }) => {
    const [items, setItems] = useState([
        { id: 1, title: "Back Pack" },
        { id: 2, title: "Slim Fit T-Shirts" },
        { id: 3, title: "Cotton Jacket" },
        { id: 4, title: "Slim Fit Sweater" },
        { id: 5, title: "Chain Bracelet" }
    ]);

    const productTitle = items.filter(item => item.id === product.id);
    console.log(productTitle)

    useEffect(() => {
        console.log("data is fasho ===>", product)
    }, []);
    return (
        <div>
            {/* {items.map(item => <h1>{item.title}</h1>)} */}
            <h1>{title}</h1>
            <button onClick={() => setActiveProduct(product)}>Choose</button>
        </div>
    )
}

export default Product
