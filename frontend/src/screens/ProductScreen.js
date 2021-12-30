import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { Match } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreens'

const ProductScreen = () => {
    const params = useParams();
    const product = products.find((p) => p._id === params.id)
    return (
        <>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        </>
    )
}

export default ProductScreen

