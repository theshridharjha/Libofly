console.log("This is index.js");

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {
}

// add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// implement the clear function
Display.prototype.clear = function () {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
}

// implement the validate function
Display.prototype.validate = function (book) {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implement the show function
Display.prototype.show = function (type, showmessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong>${showmessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}

// add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let Spiritual = document.getElementById('Spiritual');
    let SelfHelp = document.getElementById('Self-Help');
    let Fiction = document.getElementById('Fiction');

    if (Spiritual.checked) {
        type = Spiritual.value;
    } else if (SelfHelp.checked) {
        type = SelfHelp.value;
    } else if (Fiction.checked) {
        type = Fiction.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been added successfully');
    } else {
        // show error to the user
        display.show('danger', 'Sorry, We, cannot add your book');
    }

    e.preventDefault();

}
