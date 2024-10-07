import React from 'react'
import Navbars from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap';
import { dlt } from './cartSlice';


function Cart() {

  let products= useSelector(state=>state.cart)
  let dispatch= useDispatch()

  let remove=(id)=>{
    
    //dispatch
    dispatch(dlt(id))

  }
  
  let cart= products.map((product) => (
    <div className="col-md-12">
        <Card  key={product.id}>
            <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
            </div>
            <Card.Body className='text-center'>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    ${product.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Button onClick={()=>remove(product.id)} variant="danger">Remove from cart</Button>
            </Card.Footer>
        </Card>
    </div>
))

  return (
    <>
    
    <div>{cart}</div>
    </>
  )
}

export default Cart