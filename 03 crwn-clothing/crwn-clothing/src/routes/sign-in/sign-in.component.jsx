import {
   createUserDocFromAuth,
   signInWithGooglePopup,
} from "../../utils/auth/firebase";

const SignIn = () => {
   const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      createUserDocFromAuth(user);
   };
   return (
      <>
         <h1>Sign In</h1>
         <button onClick={logGoogleUser}>Google</button>
      </>
   );
};

export default SignIn;
