import { useState } from "react";
import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext";

type ReceiptItemProps = {
    dept: string,
    number: number,
    title: string,
    description: string,
    prereqs?: any 
}
export function ReceiptItem({dept, number, title, description, prereqs}: ReceiptItemProps){
    const {getItemQuantity, addToCart, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(number);
    const [showMore, setShowMore] = useState(false);
    var prereqss =  prereqs;
        if (prereqs !== undefined && prereqs !== "Senior standing or permission of instructor"){
            prereqss = prereqs.join(', ');
        } 
    const text = 'Description: ' + description + (prereqs == undefined ? '': '\nPrereqs: ' + prereqss)
    return(
        <Card className = 'h-100'>
            <Card.Body className ='d-flex flex-column' >
                <Card.Title className = 'd-flex justify-content-center align-items-center mb-1'>
                    <span style ={{textAlign:'center'}}>{dept +' '+ number}</span>

                </Card.Title>
                <span style ={{textAlign:'center', marginBottom: '0.5rem'}}>{title}</span>
                <span style = {{textAlign: 'center'}}>
                    {showMore ? (text) : `${text.substring(0,0)}`}
                    <button style = {{color:"blue"}} className='btn' onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'show less': 'Display more information'}
                    </button>
                </span>
            </Card.Body>
            
            
        </Card>
    )
}