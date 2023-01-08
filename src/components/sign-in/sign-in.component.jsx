/* import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../sign-up-form/sign-up-form.component";

const SignIn = () => {

    /* useEffect(() => async function getRedirectData() {
        const response = await getRedirectResult(auth);
        if(response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, []); */

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        /*  For the sign In with Google Redirect:
            Once we go to a different domain and comeback, our app reloads everything as new and previous state is not stored anywhere, hence we don't get any response back */
        <div>
            <h1>Sign In Page.</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button> */}
            <SignUpForm />
        </div>
    );
};

export default SignIn;