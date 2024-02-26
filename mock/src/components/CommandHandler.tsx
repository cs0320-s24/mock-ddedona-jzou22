import { REPLFunction } from "./REPLFunction";

const handleModeCommand: REPLFunction = (
  args: Array<string>
): String | String[][] => {
  // logic for handling mode command
  const modeArgument = args[0];
  if (modeArgument === "brief") {
    return "Switched to brief mode";
  } else if (modeArgument === "verbose") {
    return "Switched to verbose mode";
  } else {
    return [['Invalid mode argument. Use "brief" or "verbose".']];
  }
};

export const commandMap: Record<string, REPLFunction> = {
  mode: handleModeCommand,
};
