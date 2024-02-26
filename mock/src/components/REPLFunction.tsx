import { Dispatch, SetStateAction, useState } from "react";
/**
 * A command-processor function for our REPL. The function returns a string, which is the value to print to history when
 * the command is done executing.
 *
 * The arguments passed in the input (which need not be named "args") should
 * *NOT* contain the command-name prefix.
 */

export interface REPLFunction {
  (args: Array<string>): string | string[][];
  execute(): void;
  call: (args: Array<string>) => string | string[][];
}

// // Step 2: Implement concrete command classes
// class BriefModeCommand implements REPLFunction {
//   constructor(private s: Array<string>) {}

//   call(args: Array<string>): String|String[][] {
//     return args.join(' ');
//   }
// }

// class VerboseModeCommand implements REPLFunction {
//   call(args: Array<string>): String|String[][] {
//     return args.join(' ');
//   }
// }

// // Step 3: Command Invoker
// function CommandInvoker() {
//   const [commands, setCommands] = useState<REPLFunction[]>([]);

//   const addCommand = (command: REPLFunction): void => {
//     setCommands((prevCommands) => [...prevCommands, command]);
//   };

//   const executeCommands = (): void => {
//     commands.forEach((command) => command.execute());
//   };

//   return { addCommand, executeCommands };
// }

// // Step 4: Usage in React Component
// function REPLFunction() {
//   const invoker = CommandInvoker();

//   const handleSubmit = (commandString: string): void => {
//     // Parse commandString and add corresponding command to invoker
//     if (/* condition for brief mode */) {
//       invoker.addCommand(new BriefModeCommand([])); // Pass necessary arguments
//     }

//     if (/* condition for verbose mode */) {
//       invoker.addCommand(new VerboseModeCommand());
//     }

//     // Other commands...
//   };

//   const handleExecute = () => {
//     invoker.executeCommands();
//   };

//   return (
//     <div>
//       {/* UI for user input, e.g., a form */}
//       <button onClick={handleExecute}>Execute Commands</button>
//     </div>
//   );
// }

// export default REPLFunction;
