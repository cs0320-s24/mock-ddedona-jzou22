import { useState } from "react";
import "../styles/main.css";
import { REPLHistory } from "./REPLHistory";
import { REPLInput } from "./REPLInput";

/* 

!!! TODO: review and delete this comment !!!

  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  This is a great top level component for the REPL. It's a good idea to have organize all components in a component folder.
  You don't need to do that for this gearup.
*/

// Define the type for history state
export type HistoryEntry = string | string[][];
/**
 * This REPL is a React functional component, representing a part of the user
 * interface
 */
export default function REPL() {
  // Shared states among the REPL components
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [verbose, setVerbose] = useState<boolean>(false);

  return (
    <div className="repl">
      {/*This is where your REPLHistory might go... You also may choose to add it within your REPLInput 
      component or somewhere else depending on your component organization. What are the pros and cons of each? */}
      <REPLHistory history={history} />
      {/* <hr></hr> is JSX syntax for creating an HTML 
          The <hr> element is a horizontal line, typically used to separate 
          content or sections within a webpage. 
          
          In this context, it is used as a visual separator between the 
          REPLHistory component and the REPLInput component within the REPL 
          component.
      */}
      <hr></hr>
      {/* CHANGED */}
      <REPLInput
        history={history}
        setHistory={setHistory}
        verbose={verbose}
        setVerbose={setVerbose}
      />
    </div>
  );
}
