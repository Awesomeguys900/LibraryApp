const myLibrary = [];

function Book() {
  // the constructor...
}

document
  .getElementById("addBookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("page").value;
  const read = document.getElementById("read").checked;

  const booklist = document.getElementById("bookList");

  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<div>Title: ${title}</div><div>Author: ${author}</div><div>Pages: ${pages}</div><div>Read: ${read}</div>`;
  booklist.appendChild(card);
  document.getElementById("addBookForm").reset();
  togglePopup(); // Close popup after adding the book
}

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}
