import { serialize } from "v8";
import { REPLFunction } from "./REPLFunction";
import { readFileSync } from "fs";
import { Dispatch, SetStateAction, useState } from "react";

/* 
Possible way 1 to define handleModeCommand

results in an error within handleModeCommand itself
*/

const mode: REPLFunction = (
  args: Array<string>,
  setVerbose: Dispatch<SetStateAction<boolean>>
): string => {
  // logic for handling mode command
  const modeArgument = args[0];
  const invalidArgument = args[1];
  if (invalidArgument) {
    return "Invalid mode command size";
  } else {
    if (modeArgument === "brief") {
      setVerbose(false);
      return "Switched to brief mode";
    } else if (modeArgument === "verbose") {
      setVerbose(true);
      return "Switched to verbose mode";
    } else {
      return "Invalid mode type";
    }
  }
};

const load: REPLFunction = (args: Array<string>): string => {
  // logic for handling mode command
  const file = args[0];
  const loadedFile = readFileSync(file, "utf-8");
  return "file" + file + "loaded";
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

// interface validate {
//   responseType: string;
//   date: string[][];
// }

/* defining the commandMap to be called from */
export const commandMap = new Map<string, REPLFunction>();

/**
 * addCommand
 *
 * Function to add commands to the command map
 * @param name the name of the command to be added
 * @param func the functionality of the command
 */
export function addCommand(name: string, func: REPLFunction) {
  commandMap.set(name, func);
}

/**
 * removeCommand
 *
 * Function to remove commands from the command map
 * @param name the name of the command to be removed
 */
export function removeCommand(name: string) {
  commandMap.delete(name);
}

/**
 * setInitialMap
 *
 * used to set the inital map of commands that can be used
 * Called within REPLInputs
 */
export function setCommandMap() {
  // Set initial values for commandMap
  commandMap.set("mode", mode);
  commandMap.set("load_file", load);
  // commandMap.set("view", view)
  // commandMap.set("search", search)
  // commandMap.set("test", test);
}
