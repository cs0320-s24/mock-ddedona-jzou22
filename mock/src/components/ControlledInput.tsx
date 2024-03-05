import "../styles/main.css";
import { Dispatch, SetStateAction } from "react";

// Remember that parameter names don't necessarily need to overlap;
// I could use different variable names in the actual function.

/**
 * ControlledInputProps Interface
 *
 * Defines the expected props that the ControlledInput component should receive.
 * Specifically, it declares that the ControlledInput component expects a prop
 * named value of type string, a prop setValue of type
 * Dispatch<SetStateAction<string>>, and an ariaLabel or type string
 *
 * Dispatch<SetStateAction<string>>:
 *      represents a function that can be used to update the state of a React
 *      component when using the useState hook
 */
interface ControlledInputProps {
  value: string;

  // This type comes from React+TypeScript. VSCode can suggest these.
  //   Concretely, this means "a function that sets a state containing a string"
  setValue: Dispatch<SetStateAction<string>>;
  ariaLabel: string;
}

// Input boxes contain state. We want to make sure React is managing that state,
// so we have a special component that wraps the input box.

/**
 * ControlledInput
 *
 *
 */
export function ControlledInput({
  value,
  setValue,
  ariaLabel,
}: ControlledInputProps) {
  return (
    <input
      type="text"
      className="repl-command-box"
      value={value}
      placeholder="Enter command here, e.g. -mode verbose-"
      /* 
      This sets up an event handler for the onChange event. When the input value 
      changes, it calls the setValue function, updating the state with the new 
      value.

      onChange: This is a React event that triggers when the value of the input 
                changes.

      (e) => setValue(e.target.value): This is an arrow function that takes an 
            event (e) as a parameter. Inside the function, setValue is a function
            used to update the state, and e.target.value represents the new 
            value of the input field
      */
      onChange={(e) => setValue(e.target.value)}
      aria-label={ariaLabel}
    ></input>
  );
}
