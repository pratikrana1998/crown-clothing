import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOuthandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to={'/'}>
                <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to={'/shop'}>
                SHOP
            </Link>
            { /* Based on whether a user is available we render sign out or sign in component */
              currentUser ? (
                <span className="nav-link" onClick={signOuthandler}> SIGN OUT </span>
              ) : (
                <Link className="nav-link" to={'/auth'}>
                SIGN IN
                </Link>
            )}
            
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;