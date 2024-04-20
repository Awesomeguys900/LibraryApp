const myLibrary = [new Book("1984", "George Orwell", "328", true)];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.toggleRead = function () {
    this.read = !this.read;
  };
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

  togglePopup();
  updatingBookList();
  document.getElementById("addBookForm").reset();
}

function updatingBookList() {
  const booklist = document.getElementById("bookList");
  booklist.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <div class="title">${book.title}</div>
  <div class="author">${book.author}</div>
  <div class="pages">${book.pages} pages</div>
`;

    const readToggle = document.createElement("button");
    readToggle.className = "readButton";
    readToggle.textContent = book.read ? "Read" : "Not Read";
    readToggle.classList.add(book.read ? "read" : "notRead"); //ternary operator which changes based on book read

    readToggle.addEventListener("click", function () {
      book.toggleRead();
      readToggle.textContent = book.read ? "Read" : "Not Read";
      if (book.read) {
        readToggle.classList.remove("notRead");
        readToggle.classList.add("read");
      } else {
        readToggle.classList.remove("read");
        readToggle.classList.add("notRead");
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      updatingBookList();
      console.log(myLibrary);
    });

    card.appendChild(readToggle);
    card.appendChild(deleteButton);
    booklist.appendChild(card);
  });
}

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}

updatingBookList();
document.getElementById("addBookForm").reset();
