import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
   const { name, price, quantity, imageUrl } = cartItem;
   const { addItemToCart, removeItemFromCart, clearItemsFromCart } =
      useContext(CartContext);

   const addItemHandler = () => addItemToCart(cartItem);
   const removeItemHandler = () => removeItemFromCart(cartItem);
   const clearItemsHandler = () => clearItemsFromCart(cartItem);

   return (
      <div className="checkout-item-container">
         <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
            <span className="arrow" onClick={removeItemHandler}>
               &#8249;
            </span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={addItemHandler}>
               &#8250;
            </span>
         </span>
         <span className="price">{price}</span>
         <div className="remove-button" onClick={clearItemsHandler}>
            &#10005;
         </div>
      </div>
   );
};

export default CheckoutItem;
