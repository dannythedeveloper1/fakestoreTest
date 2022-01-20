import React, { useEffect } from 'react'
import { Button, Card, Container } from './ProductDetailStyles'

const ProductDetail = ({ activeProduct }) => {


    return (
        <Card>
            <h1>$ {activeProduct.price}</h1>
            <p> {activeProduct.description}</p>
            <Container display="flex">
                {Array(Math.round(activeProduct.rating.rate))
                    .fill()
                    .map(() => (<p>🌟</p>))
                }
            </Container>
            <Button>Add to Cart</Button>
        </Card>
    )
}

export default ProductDetail
