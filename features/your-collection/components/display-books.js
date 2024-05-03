/*const userBookshelf = document.getElementById("myBookShelf")*/

const userBookshelf = [
    "Grammatica de Uso Del espanol: teoria y pratica A1-B2 (Spanish edition",
    "Pour Lire avec Plaisir"
];

function Book(title, author) {
    this.author = author;
    this.title = title;
    this.addBookDetails = function() {
        return this.title + ": " + this.author;
    };

};

function addBookToUserBookshelf() {
    const book = new Book("Pride & Prejudice", "Jane Austin");
    const bookDetails = book.addBookDetails();
    return userBookshelf.push(bookDetails);
};

addBookToUserBookshelf();
console.log(userBookshelf);