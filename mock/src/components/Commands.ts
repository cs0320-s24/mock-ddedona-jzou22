import { REPLFunction } from "./REPLFunction";
import { Dispatch, SetStateAction, useState } from "react";
// import { mockedDataMap } from "./mockedJson";

// An export that REPLInput can use to map certain commands to functions
export const commandMap = new Map<string, REPLFunction>();

// A constant used to store the latest data
// const [data, setData] = useState<string[][]>([]);

// Initialize the basic commands
export function setCommandMap() {
  // Set initial values for commandMap
  commandMap.set("mode", mode);
  // commandMap.set("load_file", load);
  // commandMap.set("view", view)
  // commandMap.set("search", search)
  // commandMap.set("test", test);
}

// The function for the "mode" command
const mode: REPLFunction = (
  args: Array<string>,
  setVerbose: Dispatch<SetStateAction<boolean>>
): string => {
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
// const load: REPLFunction = (
//   args: Array<string>,
//   setVerbose: Dispatch<SetStateAction<boolean>>
// ): string => {
//   const file_path = args[0];
//   if (!file_path.endsWith(".csv")) {
//     setData([]);
//     return "Invalid File Format: Not a CSV file";
//   }
//   const file = mockedDataMap.get(file_path);
//   if (file) {
//     setData(file);
//     return "File Loaded Successfully";
//   } else {
//     return "File Does Not Exist";
//   }
// };
