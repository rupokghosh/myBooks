const myLibrary = [];
const addButton = document.getElementById("addButton");
const hiddenForm = document.getElementById("hiddenForm");
const closeBtn = document.getElementById("close");
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submit");
const display = document.getElementById("display");

class Book {
    constructor(name, author, status, genre) {

        this.name = name;
        this.author = author;
        this.status = status;
        this.genre = genre;
    }
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

// unlocking submit button 

function checkFormValidity() {
    const nameInput = document.getElementById('name').value;
    const authorInput = document.getElementById('author').value;
    const genreInput = document.getElementById('genre').value;

    // Enable the submit button only if all required fields are filled
    if (nameInput && authorInput && genreInput) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
const formFields = ['name', 'author', 'genre', 'has-read'];
formFields.forEach(field => {
    const element = document.getElementById(field);
    if (element) {
        element.addEventListener('input', checkFormValidity);
    }
});
//submit button functionality 

submitButton.addEventListener('click', function () {

    // Get user input values from the form
    const nameInput = document.getElementById('name').value;
    const authorInput = document.getElementById('author').value;
    const genreInput = document.getElementById('genre').value;
    const hasReadInput = document.getElementById('checkbox').checked;

    addBookToLibrary(nameInput, authorInput, hasReadInput, genreInput);
    displayBooks();
});


// display results;

function displayBooks() {
    display.innerHTML = '';

    for( const book of myLibrary){
        let bookGrid = document.createElement('div');
        bookGrid.className = 'bookGrid';
        bookGrid.innerHTML = `<p>Author: ${book.name} </p> <p>${book.author}</p> <p>${book.genre}</p> <p>Have you read it? ${book.status}</p>`;
        display.append(bookGrid);
    }
}

// clear the form values

document.getElementById('name').value = '';
document.getElementById('author').value = '';
document.getElementById('genre').value = '';
document.getElementById('checkbox').checked = false;

