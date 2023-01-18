import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        /* We are essentially grouping the form together so class is group 
            As long as the length of value is > 0 then I want to append the shrink class */
        <div className="group">
            <input className="form-input" {...otherProps} />
            {   /* If label exists then render it */
                label && (
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{ label }</label>
            )}
        
        </div>
    )
}

export default FormInput;