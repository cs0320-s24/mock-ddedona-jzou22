import { REPLFunction } from "./REPLFunction";

const handleModeCommand: REPLFunction = (args: Array<string>): string => {
  // logic for handling mode command

  const modeArgument = args[0];
  if (modeArgument === "brief") {
    props.setVerbose(false);
    return "Switched to brief mode";
  } else if (modeArgument === "verbose") {
    props.setVerbose(true);
    return "Switched to verbose mode";
  } else {
    return 'Invalid mode argument. Use "brief" or "verbose".';
  }
};

const test: REPLFunction = (args: Array<string>): string => {
  // logic for handling mode command
  const modeArgument = args[0];
  if (modeArgument === "1") {
    return "1";
  } else if (modeArgument === "2") {
    return "2";
  } else {
    return "testing";
  }
};

export const commandMap: Record<string, REPLFunction> = {
  mode: handleModeCommand,
  test: test,
};
