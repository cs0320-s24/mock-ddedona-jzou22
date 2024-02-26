import { Dispatch, SetStateAction, useState } from "react";
import "../styles/main.css";
import { ControlledInput } from "./ControlledInput";

/**
 *  Defines the props that gets passed into the function utilizing the history and dispatch.
 */
interface REPLInputProps {
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
}
/**
 * Handles the user's current input and add it into the history
 */
export function REPLInput(props: REPLInputProps) {
  // Initialzies the current command inputs
  const [commandString, setCommandString] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  // This function is used when we submit a command input
  function handleSubmit(commandString: string) {
    const tokens = tokenizeCommandString(commandString);
    // changes the mode to either brief or verbose depending on the user input
    if (tokens[0] === "mode" && tokens[1] === "brief" && tokens.length <= 2) {
      props.setVerbose(false);
    }

    if (tokens[0] === "mode" && tokens[1] === "verbose" && tokens.length <= 2) {
      props.setVerbose(true);
    }

    // we change the counter, rewrite history, and clear the command input
    setCount(count + 1);
    props.setHistory([...props.history, commandString]);
    setCommandString("");
  }

  function tokenizeCommandString(commandString: string): string[] {
    // Split the command string by whitespace
    return commandString.trim().split(/\s+/);
  }

  return (
    <div className="repl-input">
      {/* Uses a fieldset to format the repl command*/}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      {/* On click, it will call the handleSubmit and display the counter times*/}
      <button onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
      <div>
        <legend>Current Mode: {props.verbose ? "verbose" : "brief"}</legend>
      </div>
    </div>
  );
}
