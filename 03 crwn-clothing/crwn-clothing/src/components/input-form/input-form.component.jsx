import { FormInput, FormInputLabel, Group } from "./input-form.styles";

const InputForm = ({ label, ...otherProps }) => (
   <Group>
      <FormInput {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
   </Group>
);

export default InputForm;
