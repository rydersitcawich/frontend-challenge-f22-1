import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext";

type CourseItemProps = {
    dept: string,
    number: number,
    title: string,
    description: string,
    prereqs?: any 
}
export function CourseItem({dept, number, title, description, prereqs}: CourseItemProps){
    const {getItemQuantity, addToCart, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(number);
    return(
        <Card className = 'h-100'>
            <Card.Body className ='d-flex flex-column' data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <Card.Title className = 'd-flex justify-content-center align-items-center mb-1'>
                    <span style ={{textAlign:'center'}}>{dept +' '+ number}</span>

                </Card.Title>
                <span style ={{textAlign:'center', marginBottom: '0.5rem'}}>{title}</span>
                <div className = 'mt-auto'>
                    {quantity === 0 ? (
                    <Button className = 'w-100' onClick = {(() => addToCart(number))}>+ Add to Cart</Button>
                    ): (
                        <Button className = 'w-100' variant = 'danger' onClick = {(() => removeFromCart(number))}>Remove from Cart</Button>                        
                    )
                    }
                </div>
            </Card.Body>
            
            
        </Card>
    )
}


