import {useState, useContext, createContext,useEffect} from "react";

const CartContext = createContext();

const CartProvider = ({children})=>{
	
const[cart,setCart] = useState([]);

useEffect(()=>{
let items = localStorage.getItem('cart')
if(items)
setCart(JSON.parse(items));

},[]);

return(
    <CartContext.Provider value={[cart,setCart]}>
{children}
    </CartContext.Provider>

)



};

//custom Hooks
const useCart = ()=> useContext(CartContext);

export {useCart,CartProvider}
