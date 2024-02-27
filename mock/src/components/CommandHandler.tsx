import { serialize } from "v8";
import { REPLFunction } from "./REPLFunction";

/* 
Possible way 1 to define handleModeCommand

results in an error within handleModeCommand itself
*/

// const handleModeCommand: REPLFunction = (
//   args: Array<string>,
//   props: REPLFunction
// ): string => {
//   // logic for handling mode command

//   const modeArgument = args[0];
//   if (modeArgument === "brief") {
//     props.setVerbose(false);
//     return "Switched to brief mode";
//   } else if (modeArgument === "verbose") {
//     props.setVerbose(true);
//     return "Switched to verbose mode";
//   } else {
//     return 'Invalid mode argument. Use "brief" or "verbose".';
//   }
// };

/* 
Possible way 2 to define handleModeCommand

results in an error within const commandMap itself
*/

function handleModeCommand(args: Array<string>, props: REPLFunction) {
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
}

// const test: REPLFunction = (args: Array<string>): string => {
//   // logic for handling mode command
//   const modeArgument = args[0];
//   if (modeArgument === "1") {
//     return "1";
//   } else if (modeArgument === "2") {
//     return "2";
//   } else {
//     return "testing";
//   }
// };

export const commandMap: Record<string, REPLFunction> = {
  mode: handleModeCommand,
  //test: test,
};
