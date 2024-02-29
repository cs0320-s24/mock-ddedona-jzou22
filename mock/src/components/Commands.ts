import { REPLFunction } from "./REPLFunction";
import { Dispatch, SetStateAction, useState } from "react";
import { mockedDataMap } from "./mockedJson";
import { HistoryEntry } from "./REPL";

// An export that REPLInput can use to map certain commands to functions
export const commandMap = new Map<string, REPLFunction>();

// Create a varaible to store the file
let loadedData: string[][];
let file: { data: string[][]; hasHeaders: boolean } | undefined;

export function addCommand(
  commandName: string,
  commandFunction: REPLFunction
): void {
  commandMap.set(commandName, commandFunction);
}

export function removeCommand(commandName: string): void {
  commandMap.delete(commandName);
}

// Initialize the basic commands
export function setCommandMap() {
  // Set initial values for commandMap
  commandMap.set("mode", mode);
  commandMap.set("load_file", load);
  commandMap.set("view", view);
  commandMap.set("search", search);
}

// The function for the "mode" command
const mode: REPLFunction = (
  args: Array<string>,
  setVerbose: Dispatch<SetStateAction<boolean>>
): HistoryEntry => {
  // Extract the mode argument
  const modeArgument = args[0];
  // Check for invalid mode argument size
  if (args.length !== 1) {
    return "Invalid mode command size";
  }
  // Set verbose mode based on the argument
  if (modeArgument === "brief") {
    setVerbose(false);
    return "Switched to brief mode";
  } else if (modeArgument === "verbose") {
    setVerbose(true);
    return "Switched to verbose mode";
  } else {
    return "Invalid mode type";
  }
};

// The function for the "load" command using the mocked data files
const load: REPLFunction = (
  args: Array<string>,
  setVerbose: Dispatch<SetStateAction<boolean>>
): HistoryEntry => {
  const file_path = args[0];
  if (!file_path.endsWith(".csv")) {
    return "Invalid File Format: Not a CSV file";
  }
  file = mockedDataMap.get(file_path);
  if (file) {
    loadedData = file.data;
    return "File Loaded Successfully";
  } else {
    return "File Does Not Exist";
  }
};

// the function for the "view" command on the most recent loaded file
const view: REPLFunction = (
  args: Array<string>,
  setVerbose: Dispatch<SetStateAction<boolean>>
): HistoryEntry => {
  if (!loadedData) {
    return "No data has been loaded yet.";
  }
  // Parse the original string into a 2D array
  return loadedData.map((row) => [...row]);
};

const search: REPLFunction = (
  args: Array<string>,
  setVerbose: Dispatch<SetStateAction<boolean>>
): HistoryEntry => {
  if (!loadedData) {
    return "No data has been loaded yet.";
  }

  const firstArg = args[0];
  const secondArg = args[1];

  // Check if the searchColumnOrValue is an index or a valid column name
  const columnIndex = parseInt(firstArg);
  const hasHeaders = file?.hasHeaders === true; // Explicitly check if true
  let resultRows: string[][];

  if (args.length === 1) {
    if (hasHeaders) {
      resultRows = loadedData
        .slice(1)
        .filter((row) => row.some((cell) => cell === firstArg));
    } else {
      resultRows = loadedData.filter((row) =>
        row.some((cell) => cell === firstArg)
      );
    }
  } else if (args.length === 2) {
    if (
      !isNaN(columnIndex) &&
      columnIndex >= 0 &&
      columnIndex < loadedData[0].length
    ) {
      // Search by index
      resultRows = loadedData.filter((row) => row[columnIndex] === secondArg);
    } else if (hasHeaders) {
      // Search by column name
      const headerRow = loadedData[0];
      const columnIndexByName = headerRow.indexOf(firstArg);

      if (columnIndexByName !== -1) {
        resultRows = loadedData.filter(
          (row) => row[columnIndexByName] === secondArg
        );
      } else {
        return "Invalid column name. Please provide a valid column index or name.";
      }
    } else {
      // Search across all columns
      resultRows = loadedData.filter((row) =>
        row.some((cell) => cell === firstArg)
      );
    }

    return resultRows.length > 0 ? resultRows : "No matching rows found.";
  } else {
    return "Invalid number of arguments. Please either <column name/index> <search value> or just <search value>.";
  }

  return "Error in searching";
};
