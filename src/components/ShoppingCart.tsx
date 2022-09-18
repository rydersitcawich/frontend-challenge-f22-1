import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import {CartItem} from './CartItem';
import {useNavigate} from 'react-router-dom'

type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart()
    const navigate = useNavigate();
    
    function navigateReceipt(){
        navigate('/receipt')
    }
return (
<Offcanvas show={isOpen} placement = 'end' onHide={closeCart}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>
            Cart
        </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <Stack gap ={3}>
            {cartItems.map(item => (
            <CartItem key={item.number} {...item}/>))
            }
        </Stack>
        <div style = {{display:'flex', justifyContent:'center'}}>
        <button onClick = {navigateReceipt} style = {{marginTop: '2rem'}}>
            Checkout
        </button>
        </div>
    </Offcanvas.Body>
</Offcanvas>
)
}