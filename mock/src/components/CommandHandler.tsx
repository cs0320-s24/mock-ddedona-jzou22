import { REPLFunction } from "./REPLFunction";

export const commandMap: Record<string, REPLFunction> = {
  mode: {
    execute: (args: Array<string>) => {
      // Implement the logic for handling mode command
      const modeArgument = args[0];
      if (modeArgument === "brief") {
        return "Switched to brief mode";
      } else if (modeArgument === "verbose") {
        return "Switched to verbose mode";
      } else {
        return 'Invalid mode argument. Use "brief" or "verbose".';
      }
    },
    // call: (args: Array<string>) => {
    //   // Adjust based on your actual logic
    //   return [args.join(" ")];
    // },
  },
};
