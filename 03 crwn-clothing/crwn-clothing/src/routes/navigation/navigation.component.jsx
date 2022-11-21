import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/auth/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
   const { currentUser } = useContext(UserContext);

   const signOutHandler = async () => {
      await signOutUser();
   };

   return (
      <>
         <div className="navigation">
            <Link className="logo-container" to="/">
               <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="shop">
                  Shop
               </Link>
               {currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>
                     Sign Out
                  </span>
               ) : (
                  <Link className="nav-link" to="auth">
                     Sign In
                  </Link>
               )}
            </div>
         </div>
         <Outlet />
      </>
   );
};

export default Navigation;
