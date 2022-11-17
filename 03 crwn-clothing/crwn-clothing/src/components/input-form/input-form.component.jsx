import "./input-form.styles.scss";

const InputForm = ({ label, ...otherProps }) => (
   <div className="group">
      <label
         className={`form-input-label ${otherProps.value.length && "shrink"}`}
      >
         {label}
      </label>
      <input className="form-input" {...otherProps} />
   </div>
);

export default InputForm;
