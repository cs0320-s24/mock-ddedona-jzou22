import "../styles/main.css";

/**
 * REPLHistoryProps Interface
 *
 * Defines the expected props that the REPLHistory component should receive.
 * Specifically, it declares that the REPLHistory component expects a prop named
 * history of type string[]
 */
interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  // CHANGED
  history: string[];
}

/**
 * REPLHistory
 *
 * This component dynamically generates a set of paragraph elements based on the
 * strings in the history array. It maps each command in the array to a
 * paragraph, creating a list of paragraphs representing the command history.
 */
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {/* CHANGED */}

      {/* The map function is called on the history array. It iterates 
            over each element of the array, and for each element, it executes 
            the provided function. The function takes two parameters: command 
            (the current element) and index (the index of the current element 
            in the array). 
            */}
      {props.history.map((command, index) => (
        <p>{command}</p>
      ))}
    </div>
  );
}
