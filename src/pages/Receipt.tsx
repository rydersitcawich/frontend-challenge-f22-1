import courses from '../data/courses.json';
import {Col, Row} from 'react-bootstrap';
import {CourseItem} from '../components/CourseItem';
import {CartItem} from '../components/CartItem';
import { ReceiptItem } from '../components/ReceiptItem';
import { useShoppingCart } from "../context/ShoppingCartContext";


export function Receipt() {
    const {cartItems} = useShoppingCart();
    return (
            <>
            <h1 style = {{marginBottom: '1rem'}}>Here is Your Receipt!</h1>
            <Row md={2} xs = {1} lg = {3} className = 'g-3'>
              {courses.map(item =>{
                
                if(cartItems.filter( e => e.number === item.number).length > 0){
                    return (
                    <Col key ={item.number}>
                        <ReceiptItem {...item}/>
                    </Col>
                    )}
                    
                }
                )}
            </Row>
            </>
    )

}