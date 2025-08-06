// Weekly reading log
// Each entry is an object with day, book title, and minutes read
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/*
Adds a new reading entry to the reading log.
Input: day (string), book (string), minutes (number)
Output: none (modifies readingLog array in place)
*/
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };  // Create a new reading record
  readingLog.push(newEntry);                // Append it to the reading log
}

/*
Calculates the total number of reading minutes in the given log.
Input: log (array of reading entries)
Output: total minutes (number)
*/
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes; // Accumulate total minutes from each entry
  }
  return total;
}

/*
Determines which book was read most frequently in the log.
Input: log (array of reading entries)
Output: most-read book title (string)
*/
function mostReadBook(log) {
  const bookCounts = {};  // Count how many times each book appears
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1; // First occurrence
    } else {
      bookCounts[entry.book]++; // Increment count
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];  // Update if this book is now most frequent
    }
  }
  return maxBook;
}

/*
Prints a daily summary of reading activity to the console.
Input: log (array of reading entries)
Output: none (prints to console)
 */
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);  // Adds a new log for Saturday
printDailySummary(readingLog);  // Print summary of all entries
console.log("Total minutes read:", totalReadingMinutes(readingLog));  // Display total reading time
console.log("Most read book:", mostReadBook(readingLog)); // Show most frequently read book
/* ------------------------
Suggested Improvement:
Consider renaming 'addReadBook' to 'logReadingEntry' for better clarity.
The current name sounds like reading a book instead of recording data.

------------------------*/

// Additional test cases
addReadBook("Sunday", "The Hobbit", 60); // New test case: add another entry