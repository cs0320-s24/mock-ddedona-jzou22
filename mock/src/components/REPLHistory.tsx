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
      {props.history.map((entry, index) => (
        <div key={index} className="history-entry">
          {Array.isArray(entry) ? (
            <table className="output-table">
              <tbody>
                {entry.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="output-label">{entry}</p>
          )}
        </div>
      ))}
    </div>
  );
}
