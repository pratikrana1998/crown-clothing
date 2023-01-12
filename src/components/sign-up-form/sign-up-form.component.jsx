import { useState } from "react";

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

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromAuth(user, { displayName });

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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit} >
                <label>Display Name</label>
                <input type="text" onChange={handleChange} name='displayName' value={displayName} required/>

                <label>Email</label>
                <input type="email" onChange={handleChange} name='email' value={email} required/>

                <label>Password</label>
                <input type="password" onChange={handleChange} name='password' value={password} required/>

                <label>Confirm Password</label>
                <input type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} required/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;