import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to={'/'}>
                <CrwnLogo className="logo" />
            </LogoContainer>
            <NavLinks>
            <NavLink to={'/shop'}>
                SHOP
            </NavLink>
            { /* Based on whether a user is available we render sign out or sign in component */
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}> {' '}SIGN OUT{' '} </NavLink>
              ) : (
                <NavLink to={'/auth'}>
                SIGN IN
                </NavLink>
            )}
            <CartIcon />
            </NavLinks>
            {/* Both the expression should evaluate to True value for cart dropdown menu to appear, Components are True values. */}
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;