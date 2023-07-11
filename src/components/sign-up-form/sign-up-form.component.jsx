import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from './sign-up-form.styles';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

/* Initial values for the form field - the object */
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    /* Setting form fields in the state using useState */
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // console.log('hit');

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // console.log(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch(error) {
            if(error.code === 'auth/email-already-in-use')
                alert('Cannot create user, email already in use.');
            console.log('Create user encountered an error: ',error.message);
        }
    }

    /* To set the form fields */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput label="Display Name" type="text" onChange={handleChange} name='displayName' value={displayName} required/>

                <FormInput label="Email" type="email" onChange={handleChange} name='email' value={email} required/>

                <FormInput label="Password" type="password" onChange={handleChange} name='password' value={password} required/>

                <FormInput label="Confirm Password" type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} required/>

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;