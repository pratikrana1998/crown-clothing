/* import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {

    /* useEffect(() => async function getRedirectData() {
        const response = await getRedirectResult(auth);
        if(response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, []); */


    return (
        /*  For the sign In with Google Redirect:
            Once we go to a different domain and comeback, our app reloads everything as new and previous state is not stored anywhere, hence we don't get any response back */
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                 Sign In with Google Redirect
            </button> */}
        </AuthenticationContainer>
    );
};

export default Authentication;