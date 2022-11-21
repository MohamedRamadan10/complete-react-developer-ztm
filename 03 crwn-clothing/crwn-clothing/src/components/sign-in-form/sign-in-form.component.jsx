import { useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
   auth,
   createUserDocFromAuth,
   signInWithGooglePopup,
   signInWithGoogleRedirect,
   signInUserDocWithEmailAndPassword,
} from "../../utils/auth/firebase.utils";
import Button from "../button/button.component";
import InputForm from "../input-form/input-form.component";
import "./sign-in.styles.scss";

const defaultFormFields = {
   email: "",
   password: "",
};

const SignInForm = () => {
   useEffect(() => {
      const getUserResult = async () => {
         const res = await getRedirectResult(auth);
         if (res) {
            await createUserDocFromAuth(res.user);
         }
      };
      getUserResult();
   }, []);

   const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
   };

   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   const resetForm = () => setFormFields(defaultFormFields);

   const submitHandler = async (e) => {
      e.preventDefault();

      try {
         const { user } = await signInUserDocWithEmailAndPassword(
            email,
            password
         );
         resetForm();
      } catch (error) {
         switch (error.code) {
            case "auth/wrong-password":
               alert("Password is incorrect");
               break;

            case "auth/user-not-found":
               alert("The user is not found");
               break;

            default:
               break;
         }
      }
   };

   const changeHandler = (e) => {
      const { name, value } = e.target;
      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <div className="sign-in-container">
         <h1>Sign Up</h1>

         <form onSubmit={submitHandler}>
            <InputForm
               label="Email"
               type="email"
               required="required"
               onChange={changeHandler}
               name="email"
               value={email}
            />

            <InputForm
               label="Password"
               type="password"
               required="required"
               onChange={changeHandler}
               name="password"
               value={password}
            />

            <div className="buttons-container">
               <Button type="submit" buttonType="inverted">
                  Sign In
               </Button>
               <Button
                  type="submit"
                  onClick={logGoogleUser}
                  buttonType="google"
               >
                  Google Popup
               </Button>
               <Button type="submit" onClick={signInWithGoogleRedirect}>
                  Google Redirect
               </Button>
            </div>
         </form>
      </div>
   );
};

export default SignInForm;
