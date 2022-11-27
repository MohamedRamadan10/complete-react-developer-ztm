import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/auth/firebase.utils";
import {
   NavigationContainer,
   LogoContainer,
   NavLink,
   NavLinksContainer,
} from "./navigation.styles";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext);

   const signOutHandler = async () => {
      await signOutUser();
   };

   return (
      <>
         <NavigationContainer>
            <LogoContainer to="/">
               <CrwnLogo className="logo" />
            </LogoContainer>
            <NavLinksContainer>
               <NavLink to="shop">Shop</NavLink>
               {currentUser ? (
                  <NavLink
                     as="span"
                     className="nav-link"
                     onClick={signOutHandler}
                  >
                     Sign Out
                  </NavLink>
               ) : (
                  <NavLink className="nav-link" to="auth">
                     Sign In
                  </NavLink>
               )}
               <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
         </NavigationContainer>
         <Outlet />
      </>
   );
};

export default Navigation;
