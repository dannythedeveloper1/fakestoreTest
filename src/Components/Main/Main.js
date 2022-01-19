import React, { useState, useEffect } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import Products from '../Products/Products'
import axios from "axios"

const Main = () => {
    const [activeProduct, setActiveProduct] = useState(null);


    const request = (type, id) => {
        return new Promise((resolve, reject) => {
            let createUrl = id === undefined ? "https://fakestoreapi.com/products" : "https://fakestoreapi.com/products/" + id
            axios[type](createUrl).then(res => resolve(res)).catch(err => reject(err))
        })
    }

    useEffect(() => {
        request("get", 1).then(res => console.log("ehhhh ===>", res)).catch(err => console.log(console.error()))
    }, [])

    return (
        <div>
            <h1 onClick={() => { request("get", 1).then(res => setActiveProduct(res.data)) }}>BackPack</h1>
            <h1 onClick={() => { request("get", 2).then(res => setActiveProduct(res.data)) }}>Slim Fit T-Shirts</h1>
            <h1 onClick={() => { request("get", 3).then(res => setActiveProduct(res.data)) }}>Cotton Jacket</h1>
            <h1 onClick={() => { request("get", 4).then(res => setActiveProduct(res.data)) }}>Slim Fit Sweater</h1>
            <h1 onClick={() => { request("get", 5).then(res => setActiveProduct(res.data)) }}>Chain Bracelet</h1>
            {activeProduct && <ProductDetail activeProduct={activeProduct} />}
        </div>
    )
}

export default Main
