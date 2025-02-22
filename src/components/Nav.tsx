import {Container, Navbar, Nav as Navbs, Button, Form} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Nav(){
  const {openCart, cartQuantity} = useShoppingCart()
  return (
  <Navbar className = 'navbar sticky-top bg-white shadow-sm mb-3'>
    <Container >
      <Navbs className = 'me-auto'>
        
        <Navbs.Link to = "/" as= {NavLink}>
          Course Selection
        </Navbs.Link>
        
      </Navbs>
      <>
      <Button 
      onClick = {openCart} 
      style = {{ width:'3rem', height: '3rem', position: 'relative'}} 
      variant="outline-primary" 
      className="rounded-circle"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>
      </Button>
      {/* red circle on cart icon logic */}
      {cartQuantity > 0 && <div 
      className = 'rounded-circle bg-danger d-flex justify-content-center alight-items-center'
      style = {{color:'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: "translate(-25%,-25%)"}}>
        {cartQuantity}
      </div>}
      </>   
    </Container>
  </Navbar>)
}