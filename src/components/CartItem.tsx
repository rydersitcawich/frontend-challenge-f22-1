import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import courses from '../data/courses.json';


type CartItemProps = {
    number: number
    quantity: number
}

export function CartItem({number, quantity}: CartItemProps){
    const item = courses.find(c => c.number === number)
    if(item == null) return null

    return(
        <>
        <Stack direction = 'horizontal' gap ={2} className = 'd-flex align-items-center'>
            <div className= 'me-auto' style = {{borderStyle: 'none none solid none', paddingBottom: '.5rem', width: '100%'}}>
                {item.dept + ' ' + item.number}
                {'--' + item.title}
            </div>
            
        </Stack>
        </>
    )

}