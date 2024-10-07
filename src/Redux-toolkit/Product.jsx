
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Navbars from './Navbar';
import { useDispatch } from 'react-redux';
import { add } from './cartSlice';

function Product() {
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Error fetching products:', err));
    }, []);


    //product in add is payload
    const addToCart = (product) => {
        dispatch(add(product));
    };

    return (
        <>
            
            <h2>Product Component</h2>
            
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-6" key={product.id}>
                            <Card>
                                <div className="text-center">
                                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        ${product.price}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <Button onClick={() => addToCart(product)} variant="primary">Add to cart</Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))}
                </div>
            
        </>
    );
}

export default Product;
