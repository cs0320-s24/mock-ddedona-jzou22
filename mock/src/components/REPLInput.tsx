import { Dispatch, SetStateAction, useState } from "react";
import "../styles/main.css";
import { ControlledInput } from "./ControlledInput";
import { REPLFunction } from "./REPLFunction";
import { commandMap, setInitiaCommandlMap } from "./CommandHandler";
import { historyType } from "./REPL";

/**
 *  Defines the props that gets passed into the function utilizing the history and dispatch.
 */
interface REPLInputProps {
  history: historyType[];
  setHistory: Dispatch<SetStateAction<historyType[]>>;
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
}

/**
 * Handles the user's current input and add it into the history
 */
export function REPLInput(props: REPLInputProps) {
  setInitiaCommandlMap();

  // Initialzies the current command inputs
  const [commandString, setCommandString] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  // This function is used when we submit a command input
  function handleSubmit(commandString: string) {
    // Parse commandString and add corresponding command to invoker
    const tokens = commandString.trim().split(/\s+/);
    const commandName = tokens[0];
    const commandArgs = tokens.slice(1);

    const command = commandMap.get(commandName);

    if (command) {
      const result = command(commandArgs);
      const historyEntry: historyType = { output: result };
      if (commandName === "mode" && commandArgs[0] === "brief") {
        props.setVerbose(false);
        props.setHistory([...props.history, historyEntry]);
      } else if (commandName === "mode" && commandArgs[0] === "verbose") {
        props.setVerbose(true);
        props.setHistory([
          ...props.history,
          { output: commandName },
          historyEntry,
        ]);
      } else if (!props.verbose) {
        props.setHistory([...props.history, historyEntry]);
      } else if (props.verbose) {
        props.setHistory([
          ...props.history,
          { output: commandName },
          historyEntry,
        ]);
      }
    } else {
      props.setHistory([
        ...props.history,
        { output: `Unknown command: ${commandName}` },
      ]);
    }

    // we change the counter, rewrite history, and clear the command input
    setCount(count + 1);
    // props.setHistory([...props.history, currentCommand]);
    setCommandString("");
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
