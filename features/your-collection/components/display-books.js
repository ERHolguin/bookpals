let card;
let userBookShelf = document.getElementById("userBookShelf");

/*userBookshelf = [];*/

function createBookCard(card) {
    for(let i = 0; i < card; i++) {
        let card = document.createElement("div");
            card.className = "book-card";
            card.textContent = "";
        
        let bookCover = document.createElement("div");
            bookCover.className = "book-cover";

        let bookDetails = document.createElement("div");
            bookDetails.className = "book-details";
            let bookTitle = document.createElement("title");
                bookTitle.className = "book-title"
                bookTitle.textContent = "";
            let bookAuthor = document.createElement("title");
                bookAuthor.className = "book-author"
                bookAuthor.textContent = "";
        
        card.appendChild(bookCover);
        card.appendChild(bookDetails);
        bookDetails.appendChild(bookTitle);
        bookDetails.appendChild(bookAuthor);
        userBookShelf.appendChild(card);
    };
};

createBookCard(4);

function Book(title, author) {
    this.author = author;
    this.title = title;
    /*this.addBookDetails = function() {
        return this.title + ": " + this.author;
    };*/

};



/*
function addBookToUserBookshelf() {
    const book = new Book("Pride & Prejudice", "Jane Austin");
    const bookDetails = book.addBookDetails();
    return userBookshelf.push(bookDetails);
};


/*addBookToUserBookshelf();*/
/*console.log(userBookshelf); */


