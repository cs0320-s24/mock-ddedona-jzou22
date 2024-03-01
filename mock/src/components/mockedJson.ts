// Map containing example CSV data where the keys represent file names
// and the values represent objects with 'data' and 'hasHeaders' properties
export const mockedDataMap = new Map<
  string,
  { data: string[][]; hasHeaders: boolean }
>();

// Example CSV data objects
const exampleCSV1 = {
  data: [
    ["1", "2", "3", "4", "5"],
    ["The", "song", "remains", "the", "same."],
    ["Why", "am", "I", "still", "coding"],
  ],
  hasHeaders: true,
};

const exampleCSV2 = {
  data: [
    ["Name", "Age", "Country"],
    ["John", "30", "USA"],
    ["Alice", "25", "Canada"],
    ["Bob", "35", "UK"],
  ],
  hasHeaders: true,
};

const exampleCSV3 = {
  data: [
    ["Product", "Price", "Quantity"],
    ["Apple", "1.5", "10"],
    ["Banana", "0.75", "20"],
    ["Orange", "2.0", "15"],
  ],
  hasHeaders: true,
};

const header = {
  data: [
    ["header_1", "header_2", "header_3"],
    ["col_1_row_1", "col_2_row_1", "col_3_row_1"],
    ["col_1_row_2", "col_2_row_2", "col_3_row_3"],
    ["col_1_row_3", "col_2_row_3", "col_3_row_3"],
  ],
  hasHeaders: true,
};

const noHeader = {
  data: [
    ["col_1_row_1", "col_2_row_1", "col_3_row_1"],
    ["col_1_row_2", "col_2_row_2", "col_3_row_3"],
    ["col_1_row_3", "col_2_row_3", "col_3_row_3"],
  ],
  hasHeaders: false,
};

// Populate the mockedDataMap with example CSV data
mockedDataMap.set("exampleCSV1.csv", exampleCSV1);
mockedDataMap.set("exampleCSV2.csv", exampleCSV2);
mockedDataMap.set("exampleCSV3.csv", exampleCSV3);
mockedDataMap.set("header.csv", header);
mockedDataMap.set("noHeader.csv", noHeader);

export const mockedResultsMap = new Map<string, string[][] | string>();

const exampleCSV11The = [["The", "song", "remains", "the", "same."]];
const exampleCSV11Song = [["The", "song", "remains", "the", "same."]];
const exampleCSV1Coding = [["Why", "am", "I", "still", "coding"]];

mockedResultsMap.set("1The", exampleCSV11The);
mockedResultsMap.set("1Song", exampleCSV11Song);
mockedResultsMap.set("coding", exampleCSV1Coding);

const noHeaderCSVValid = [["col_1_row_1", "col_2_row_1", "col_3_row_1"]];
const noHeaderCSVInvalid = "No matching rows found.";

mockedResultsMap.set("col_1_row_1", noHeaderCSVValid);
mockedResultsMap.set("1col_1_row_1", noHeaderCSVInvalid);
