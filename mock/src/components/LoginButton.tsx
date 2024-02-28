import { Dispatch, SetStateAction } from "react";
import { useState } from "react";

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
  const [username, setUsername] = useState("");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const authenticate = () => {
    if (props.isLoggedIn) {
      // If already logged in, sign out
      props.setIsLoggedIn(false);
      setUsername(""); // Clear the username
    } else {
      if (username.endsWith("@brown.edu")) {
        const newValue = !props.isLoggedIn;
        props.setIsLoggedIn(newValue);
        return newValue;
      } else {
        alert("Invalid email format. Please use a @brown.edu email.");
      }
    }
  };

  if (props.isLoggedIn) {
    return (
      <button aria-label="Sign Out" onClick={authenticate}>
        Sign out
      </button>
    );
  } else {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
        />
        <button aria-label="Login" onClick={authenticate}>
          Login
        </button>
      </div>
    );
  }
}
