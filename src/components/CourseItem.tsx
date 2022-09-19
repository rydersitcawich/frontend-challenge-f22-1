import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap"
import { isNull } from "util";
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
    const [showMore, setShowMore] = useState(false);
    const [courseQuality, setCourseQuality] = useState(null);
    //calls api and gets course_quality for each course
    useEffect(() => {
        fetch('/api/base/2022A/courses/CIS-'+ number +'/')
        .then(response => response.json())
        .then(data => setCourseQuality(data.course_quality))
      },[])

      const [instructorQuality, setInstructorQuality] = useState(null);
      //calls api and gets instructor_quality for each course
      useEffect(() => {
          fetch('/api/base/2022A/courses/CIS-'+ number +'/')
          .then(response => response.json())
          .then(data => setInstructorQuality(data.instructor_quality))
        },[])

    var prereqss =  prereqs;
    // format prereqs correctly
        if (prereqs !== undefined && prereqs !== "Senior standing or permission of instructor"){
            prereqss = prereqs.join(', ');
        } 

    //formats text for 'Display More Text' button
        var FAQ = "https://www.reddit.com/r/UPenn/search/?q=cis%20" + number + "&restrict_sr=1&sr_nsfw="
    function getFormattedText(){
        if (prereqs == undefined){
            return (
                <div style = {{textAlign:'left'}}>
                    <p><strong>{'Description: ' }</strong>{description}</p>  
                    <p><strong>{'Course Rating: ' }</strong>{courseQuality}</p>
                    <p><strong>{'Instructor Rating: ' }</strong>{instructorQuality}</p>
                    <a href = {FAQ}>FAQ</a>
                </div>
            )
        }
        else{
        return (<div style = {{textAlign:'left'}}>
            <p><strong>{'Description: ' }</strong>{description}</p>
            <p><strong>{'Prerequisites: ' }</strong>{prereqss}</p>
            <p><strong>{'Course Rating: ' }</strong>{courseQuality}</p>
            <p><strong>{'Instructor Rating: ' }</strong>{instructorQuality}</p>
            <a>FAQ</a>
        </div>)
        }
    }

        // show more text 
    const text = getFormattedText();
    return(
        <Card className = 'h-100'>
            <Card.Body className ='d-flex flex-column' >
                <Card.Title className = 'd-flex justify-content-center align-items-center mb-1'>
                    <span style ={{textAlign:'center'}}>{dept +' '+ number}</span>

                </Card.Title>
                <span style ={{textAlign:'center', marginBottom: '0.5rem'}}>{title}</span>
                <span style = {{textAlign: 'center'}}>
                    {/* showMore text logic */}
                    {showMore ? (text) :''}
                    <button style = {{color:"blue"}} className='btn' onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'show less': 'Display more information'}
                    </button>
                    
                </span>
                <div className = 'mt-auto'>
                    {/* add to cart/remove from cart button logic */}
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


