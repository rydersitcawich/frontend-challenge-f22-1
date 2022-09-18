import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}
type CartItem = {
    number: number
    quantity: number
}
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (number:number) => number
    addToCart: (number:number) => void
    removeFromCart: (number:number) => void 
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

const openCart = () => setIsOpen(true)
const closeCart = () => setIsOpen(false)

    function getItemQuantity(number: number){
        if (cartItems.find(item => item.number === number) != null){
            return 1;
        }
        else{
            return 0;
        }
    }
    function addToCart(number:number){
        setCartItems(currItems => {
            if((currItems.find(item => item.number === number) == null) && cartItems.length<7){
                return [...currItems, {number, quantity: 1}]
            }
            else{
                alert("You already have the maximum number of courses in your cart!");
                return [...currItems]
            }
        })
    }
    function removeFromCart(number:number){
        setCartItems(currItems => {
            return currItems.filter(item => item.number !== number)
        })
    }
    return <ShoppingCartContext.Provider value={{getItemQuantity, addToCart, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
        {children}
        <ShoppingCart isOpen = {isOpen}/>
    </ShoppingCartContext.Provider>
}