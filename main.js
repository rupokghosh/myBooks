const myLibrary = [];
const addButton = document.getElementById("addButton");
const hiddenForm = document.getElementById("hiddenForm");
const closeBtn = document.getElementById("close");
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submit");
const display = document.getElementById("display");

function Book(name, author, status, genre){
    
    this.name = name;
    this.author = author;
    this.status = status;
    this.genre = status;
}

// adding books to the library

function addBookToLibrary(name, author, status, genre) {
    const book = new Book(name, author, status, genre);
    myLibrary.push(book);
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

    addBookToLibrary(nameInput, authorInput, genreInput, hasReadInput);
    displayBooks();
});


// display results;

function displayBooks() {
    display.innerHTML = '';

    for( const book of myLibrary){
        const bookGrid = document.createElement('div');
        bookGrid.className = 'bookGrid';
        bookGrid = `Name: ${book.name} + Author: ${book.author} + Genre: ${book.genre} +`;
        display.appendChild(bookGrid);
    }
};

// clear the form values

document.getElementById('name').value = '';
document.getElementById('author').value = '';
document.getElementById('genre').value = '';
document.getElementById('has-read').checked = false;

console.log(myLibrary[0]);