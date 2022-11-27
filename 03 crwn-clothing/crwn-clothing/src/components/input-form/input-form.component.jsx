import { FormInput, FormInputLabel, Group } from "./input-form.styles";

const InputForm = ({ label, ...otherProps }) => (
   <Group>
      <FormInput className="form-input" {...otherProps} />
      <FormInputLabel
         className={`form-input-label ${otherProps.value.length && "shrink"}`}
         shrink={otherProps.value.length}
      >
         {label}
      </FormInputLabel>
   </Group>
);

export default InputForm;
