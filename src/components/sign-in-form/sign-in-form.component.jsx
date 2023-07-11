import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

/* Initial values for the form field - the object */
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    /* Setting form fields in the state using useState */
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(response);
            // setCurrentUser(user);
            resetFormFields();
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    /* To set the form fields */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value}); 
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput label="Email" type="email" onChange={handleChange} name='email' value={email} required/>

                <FormInput label="Password" type="password" onChange={handleChange} name='password' value={password} required/>

                <ButtonsContainer>
                <Button type="submit">Sign In</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
                </form>
        </SignInContainer>
    )
}

export default SignInForm;