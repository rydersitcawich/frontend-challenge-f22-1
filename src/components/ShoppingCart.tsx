import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import {CartItem} from './CartItem';
import {useNavigate} from 'react-router-dom'

type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart()
    const navigate = useNavigate();
    
    // uses react router to navigate to receipt page
    function navigateReceipt(){
        navigate('/receipt');
        closeCart();
    }
return (
<Offcanvas show={isOpen} placement = 'end' onHide={closeCart}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title style = {{borderStyle: 'none none solid none', paddingBottom: '.5rem', width: '100%'}}>
            Cart
        </Offcanvas.Title>
    </Offcanvas.Header>
    {/* displays items when cart is not empty, displays "Your Cart is Empty" otherwise */}
    {cartItems.length !==0 ? <Offcanvas.Body>
        <Stack gap ={3}>
            {cartItems.map(item => (
            <CartItem key={item.number} {...item}/>))
            }
        </Stack>
        <div style = {{display:'flex', justifyContent:'center'}}>
        <Button onClick = {navigateReceipt} style = {{marginTop: '2rem'}}>
            Checkout
        </Button>
        </div>
    </Offcanvas.Body>: <div style = {{display:'flex', justifyContent:'center'}}><h6>Your Cart is Empty!</h6></div>}
</Offcanvas>
)
}