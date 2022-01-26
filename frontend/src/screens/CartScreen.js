import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useParams } from 'react-router-dom';


const CartScreen = ({ match, location, history }) => {
    const params = useParams(),
    productId = params.id,
    qty = location.search ? Number(location.search.split('=')[1]) : 1,
    dispatch = useDispatch(),
    cart = useSelector(state => state.cart)
    
    const { cartItems } = cart;
    
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    
    return <div>Cart</div>
    
}

export default CartScreen
