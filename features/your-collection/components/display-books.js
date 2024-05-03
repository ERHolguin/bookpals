let userBookShelf = document.getElementById("userBookShelf");

/*userBookshelf = [];*/

function Book(title, author) {
    this.author = author;
    this.title = title;
    this.addBookDetails = function() {
        return this.title + ": " + this.author;
    };

};

function createBookCard(card) {
    for(let i = 0; i < card; i++) {
        let card = document.createElement("div");
        card.className = "book-card";
        card.textContent = "";
        userBookShelf.appendChild(card);
    };
};

createBookCard(1);

/*
function addBookToUserBookshelf() {
    const book = new Book("Pride & Prejudice", "Jane Austin");
    const bookDetails = book.addBookDetails();
    return userBookshelf.push(bookDetails);
};


/*addBookToUserBookshelf();*/
/*console.log(userBookshelf); */


