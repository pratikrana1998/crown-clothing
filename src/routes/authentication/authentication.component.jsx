/* import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {

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
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                 Sign In with Google Redirect
            </button> */}
        </div>
    );
};

export default Authentication;