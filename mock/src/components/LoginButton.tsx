import { Dispatch, SetStateAction } from "react";

/**
 * This component deals with the "Login" button interactions on click
 */

interface loginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export function LoginButton(props: loginProps) {
  /**
   * A function then returns the updated value of newValue, which indicates the
   * new state of the isLoggedIn variable after the toggle
   *
   * When called, it flips the authentication state and updates the
   * corresponding state in the parent component.
   *
   * @returns a boolean - indicates if isLoggedIn is now true or false after
   * being called onClick
   */
  const authenticate = () => {
    const newValue = !props.isLoggedIn;
    props.setIsLoggedIn(newValue);
    return newValue;
  };

  // !!! TODO: make access to the application is protected by a username?? !!!

  if (props.isLoggedIn) {
    return (
      <button aria-label="Sign Out" onClick={authenticate}>
        Sign out
      </button>
    );
  } else {
    return (
      <button aria-label="Login" onClick={authenticate}>
        Login
      </button>
    );
  }
}
