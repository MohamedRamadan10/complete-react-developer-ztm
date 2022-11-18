import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import {
   createUserDocFromAuth,
   createUserDocWithEmailAndPassword,
} from "../../utils/auth/firebase.utils";
import Button from "../button/button.component";
import InputForm from "../input-form/input-form.component";
import "./sign-up.styles.scss";

const defaultFormFields = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormFields);

   const { displayName, email, password, confirmPassword } = formFields;

   const { setCurrentUser } = useContext(UserContext);

   const resetForm = () => setFormFields(defaultFormFields);

   const submitHandler = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert("passwords do not match");
         return;
      }

      try {
         const { user } = await createUserDocWithEmailAndPassword(
            email,
            password
         );
         await createUserDocFromAuth(user, { displayName });
         setCurrentUser(user);
         resetForm();
      } catch (error) {
         error.code === "auth/email-already-in-use"
            ? alert("Cannot create, email already in use")
            : console.log(
                 "user creation an encountered an error",
                 error.message
              );
      }
   };

   const changeHandler = (e) => {
      const { name, value } = e.target;
      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <div className="sign-up-container">
         <h1>Sign Up</h1>

         <form onSubmit={submitHandler}>
            <InputForm
               label="Display Name"
               type="text"
               required="required"
               onChange={changeHandler}
               name="displayName"
               value={displayName}
            />

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

            <InputForm
               label="Confirm Password"
               type="password"
               required="required"
               onChange={changeHandler}
               name="confirmPassword"
               value={confirmPassword}
            />

            <Button type="submit">Sign Up</Button>
         </form>
      </div>
   );
};

export default SignUpForm;
