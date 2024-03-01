> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

The project serves as the front end component for our website. The website is in
charge of taking commands and with commands it preserves the result in a history
that gets displayed to the user. To access this page, the user must have a valid
username. Once there, they will have access to 4 commands: mode, search, view,
and load. The mode is used to change the history of what get displayed allowing
you to observe your preserve your previous commands. The latter 3 all deal with
the how the csv should be displayed when prompt.

# Design Choices

One design choice that we used was having a convenient way of handling different
commands. For instance, we wouldn’t want all of the functionality of a mode
within one function as it depends on the command arguments. Rather we utilized a
hash-map that allows to map certain arguments with certain function. These
functions reside in one class, allowing developers to seamlessly integrate or
remove the test using the mapping. In addition, the function is a generic REPL
function that returns a string (for normal commands) or a string[][] (for
viewing and searching). This kind of return was also generalized using our own
defined type. The “history Type” allows the function to return either a string
or string [][]. This consolidates the functionality as we wouldn’t need a lot of
branches.

# Errors/Bugs

N/A

# Tests

Our tests include self written playwright and tests created by playwright. The
tests provided assessment on each front end component and commands, while
providing sequential-interactions as well.

# How to

In order to run the site, make sure you are in the /mock folder and then run npm
install and npm start in your terminal. From here go to the given URL in order
to view the website.

From loading the webiste, log in with a valid brown university email that ends
in "@brown.edu". After logged in the initial valid commands are: mode,
load_file, view, and search

mode <mode-type>:
this command takes in an argument <mode-type> which can either be "verbose"
or "brief"
brief: prints out output without any details
verbose: prints out output in the form input: <input> output: <output>

load_file <file>:
this command takes in an argument <file> which is a file ending in ".csv"
if successful the file will be loaded so that "view" and "search" may be
called upon it

view:
prints out the csv that has been loaded

search <columnIndexOrHeader> <searchValue>:
search takes in 2 arguments <columnIndexOrHeader> which may be a numerical
index or a column name and <searchValue> which is the value that we are
searching for within a row. the result of this command is a subset csv that
is printed to the screen showing the search results

# Collaboration

_(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)_
