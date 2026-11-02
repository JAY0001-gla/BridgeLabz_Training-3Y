class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return false;
    }
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      return false;
    }
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "9780062315007"),
  new Book("Wings of Fire", "A. P. J. Abdul Kalam", "9788173711466"),
  new Book("Clean Code", "Robert C. Martin", "9780132350884"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "9780135957059"),
  new Book("Atomic Habits", "James Clear", "9780735211292", true)
];

function displayAvailableBooks() {
  const availableBooks = books.filter((book) => !book.isIssued);
  console.log("Available Books:");
  if (availableBooks.length === 0) {
    console.log("No books available");
    return;
  }
  availableBooks.forEach((book) => {
    console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
  });
}

function issueBookByISBN(isbn) {
  const book = books.find((item) => item.isbn === isbn.trim());
  if (!book) {
    console.log(`No book found with ISBN ${isbn}`);
    return;
  }
  if (book.issueBook()) {
    console.log(`"${book.title}" has been issued`);
  } else {
    console.log(`"${book.title}" is already issued`);
  }
  displayAvailableBooks();
}

function returnBookByISBN(isbn) {
  const book = books.find((item) => item.isbn === isbn.trim());
  if (!book) {
    console.log(`No book found with ISBN ${isbn}`);
    return;
  }
  if (book.returnBook()) {
    console.log(`"${book.title}" has been returned`);
  } else {
    console.log(`"${book.title}" was not issued`);
  }
  displayAvailableBooks();
}

displayAvailableBooks();

document.getElementById("issueBtn").addEventListener("click", () => {
  const input = document.getElementById("isbnInput");
  issueBookByISBN(input.value);
  input.value = "";
});
