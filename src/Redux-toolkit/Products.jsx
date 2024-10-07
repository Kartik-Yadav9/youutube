import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from './cartSlice';

function Products() {

const[products, setProducts]= useState([])
const dispatch= useDispatch()

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=> setProducts(res.data))
        .catch(err=>console.log('error is :', err))

    },[])

    const addToCart=(product)=>{
        dispatch(add(product))
    }

    

   

  return (
   <>
   

   <div className='row'>
        {
            products.map((product)=>{
                return(
                    
                    <div className='col-md-3'  key={product.id}>
                        <Card className='h-100'>
                            <div className='text-center'>
                                <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}}/>
                                <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Title>
                                    {product.price}
                                </Card.Title>
                                
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div> 
                    
                )
                
            })
        }

   </div>
   </>
  )
}

export default Products


