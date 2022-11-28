import { CartItemContainer, ItemDetails, ItemName } from "./cart-item.styles";

const CartItem = ({ cartItem: { name, imageUrl, quantity, price } }) => (
   <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
         <ItemName>{name}</ItemName>
         <span className="price">
            {quantity} x ${price}
         </span>
      </ItemDetails>
   </CartItemContainer>
);

export default CartItem;
