import { Dispatch, SetStateAction, useState } from "react";
/**
 * A command-processor function for our REPL. The function returns a string, which is the value to print to history when
 * the command is done executing.
 *
 * The arguments passed in the input (which need not be named "args") should
 * *NOT* contain the command-name prefix.
 */
interface REPLFunctionProps {
  (args: Array<string>): String | String[][];
  verbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
}

function tokenizeCommandString(commandString: string): string[] {
  // Split the command string by whitespace
  return commandString.trim().split(/\s+/);
}

export function REPLFunction(commandString: string) {
  function handleREPL(props: REPLFunctionProps) {
    const tokens = tokenizeCommandString(commandString);
    // changes the mode to either brief or verbose depending on the user input
    if (tokens[0] === "mode" && tokens[1] === "brief" && tokens.length <= 2) {
      props.setVerbose(false);
    } else if (
      tokens[0] === "mode" &&
      tokens[1] === "verbose" &&
      tokens.length <= 2
    ) {
      props.setVerbose(true);
    } else if (props.verbose === true) {
      let commandName = "Command: " + commandString;
      let commandOutput = "Output: PLACEHOLDER";
      return commandName + commandOutput;
    } else {
      let briefOutput = commandString;
      return briefOutput;
    }
    return handleREPL;
  }
}
