const myLibrary = [];
const addButton = document.getElementById("addButton");
const hiddenForm = document.getElementById("hiddenForm");
const closeBtn = document.getElementById("close");
const form = document.getElementById("myForm");
const submit = document.getElementById("submit");

function Book(name, author, status, genre){
    
    this.name = name;
    this.author = author;
    this.status = status;
    this.genre = status;
}

// adding books to the library

function addBookToLibrary(name, author, status, genre) {
    const book = new Book(name, author, status, genre);
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

//submit button functionality 

submitButton.addEventListener('click', function () {
    // Get user input values from the form
    const nameInput = document.getElementById('name').value;
    const authorInput = document.getElementById('author').value;
    const genreInput = document.getElementById('genre').value;
    const hasReadInput = document.getElementById('has-read').checked;
});

addBookToLibrary(nameInput, authorInput, genreInput, hasReadInput);