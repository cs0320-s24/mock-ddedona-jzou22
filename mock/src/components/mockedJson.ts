// Map containing example CSV data where the keys represent file names and the values represent CSV data arrays
export const mockedDataMap = new Map();

// Example CSV data arrays
const exampleCSV1 = [
  [1, 2, 3, 4, 5],
  ["The", "song", "remains", "the", "same."],
  ["Why", "am", "I", "still", "coding"],
];
const exampleCSV2 = [
  ["Name", "Age", "Country"],
  ["John", 30, "USA"],
  ["Alice", 25, "Canada"],
  ["Bob", 35, "UK"],
];
const exampleCSV3 = [
  ["Product", "Price", "Quantity"],
  ["Apple", 1.5, 10],
  ["Banana", 0.75, 20],
  ["Orange", 2.0, 15],
];

// Populate the mockedDataMap with example CSV data
mockedDataMap.set("exampleCSV1.csv", exampleCSV1);
mockedDataMap.set("exampleCSV2.csv", exampleCSV2);
mockedDataMap.set("exampleCSV3.csv", exampleCSV3);
