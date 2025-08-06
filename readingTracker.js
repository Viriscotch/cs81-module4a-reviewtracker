// Weekly reading log
// Each entry is an object with day, book title, and minutes read
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };  // Create a new reading record
  readingLog.push(newEntry);                // Append it to the reading log
}

// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes; // Accumulate total minutes from each entry
  }
  return total;
}

// Returns the book read most frequently
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

// Prints a summary of minutes read per day
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
