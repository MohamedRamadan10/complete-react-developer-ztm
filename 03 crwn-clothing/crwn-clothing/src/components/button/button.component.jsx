import "./button.styles.scss";

const BUTTON_TYPES_STYLES = {
   google: "google-sign-in",
   inverted: "inverted",
};

const Button = ({ children, buttonType, ...buttonOptions }) => {
   return (
      <button
         className={`button-container ${BUTTON_TYPES_STYLES[buttonType]}`}
         {...buttonOptions}
      >
         {children}
      </button>
   );
};

export default Button;
