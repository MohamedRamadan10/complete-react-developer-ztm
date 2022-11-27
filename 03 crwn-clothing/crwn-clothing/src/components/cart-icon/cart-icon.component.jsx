import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingIcon, CartCount, CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
   const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

   return (
      <CartIconContainer onClick={toggleIsCartOpen}>
         <ShoppingIcon />
         <CartCount>{cartCount}</CartCount>
      </CartIconContainer>
   );
};

export default CartIcon;
