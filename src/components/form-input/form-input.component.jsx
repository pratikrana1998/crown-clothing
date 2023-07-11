import { Group, FormInputLabel, Input } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
    return (
        /* We are essentially grouping the form together so class is group 
            As long as the length of value is > 0 then I want to append the shrink class */
        <Group>
            <Input {...otherProps} />
            {   /* If label exists then render it */
                label && (
            <FormInputLabel shrink={otherProps.value.length}>{ label }</FormInputLabel>
            )}
        
        </Group>
    )
}

export default FormInput;