const myLibrary = [];
const addButton = document.getElementById("addButton");
const hiddenForm = document.getElementById("hiddenForm");
const closeBtn = document.getElementById("close");
const form = document.getElementById("myForm");
const bookName = document.getElementById("name").value;
const bookAuthor = document.getElementById("author").value;
const bookGenre = document.getElementById("genre").value;
const checkbox = document.getElementById("checkbox");

function Book(name, author, status, genre){
    
    this.name = name;
    this.author = author;
    this.status = status;
    this.genre = status;
}

function addBookToLibrary() {
    const book = new Book();
    myLibrary.push(Book);
}

// functions to show and hide the form

addButton.addEventListener("click", function() {
    hiddenForm.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    hiddenForm.style.display = "none";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    hiddenForm.style.display = "none";

});