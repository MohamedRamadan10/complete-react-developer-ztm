import "./button.styles";
import {
   BaseButton,
   GoogleSignInButton,
   InvertedButton,
} from "./button.styles";

export const BUTTON_TYPES_STYLES = {
   base: "base",
   google: "google-sign-in",
   inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_STYLES.base) =>
   ({
      [BUTTON_TYPES_STYLES.base]: BaseButton,
      [BUTTON_TYPES_STYLES.google]: GoogleSignInButton,
      [BUTTON_TYPES_STYLES.inverted]: InvertedButton,
   }[buttonType]);

const Button = ({ children, buttonType, ...buttonOptions }) => {
   const CustomButton = getButton(buttonType);

   return <CustomButton {...buttonOptions}>{children}</CustomButton>;
};

export default Button;
