const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document
  .getElementById("addBookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

function addBookToLibrary() {
  let book = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("page").value,
    document.getElementById("read").checked
  );
  myLibrary.push(book);

  const booklist = document.getElementById("bookList");

  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<div>Title: ${book.title}</div><div>Author: ${book.author}</div><div>Pages: ${book.pages}</div><div>Read: ${book.read}</div>`;
  booklist.appendChild(card);
  document.getElementById("addBookForm").reset();
  console.log(myLibrary);
  togglePopup(); // Close popup after adding the book
}

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}
