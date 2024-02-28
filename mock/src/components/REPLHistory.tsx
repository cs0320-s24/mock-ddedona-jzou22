import "../styles/main.css";
import { HistoryEntry } from "./REPL";

/**
 * REPLHistoryProps Interface
 *
 * Defines the expected props that the REPLHistory component should receive.
 * Specifically, it declares that the REPLHistory component expects a prop named
 * history of type string[]
 */
interface REPLHistoryProps {
  // Initialize the history tpye
  history: HistoryEntry[];
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
    <div className="repl-history" aria-label="repl-history">
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {/* CHANGED */}
      {props.history.map((command, index) => (
        <p key={index}>{command}</p>
      ))}
    </div>
  );
}
