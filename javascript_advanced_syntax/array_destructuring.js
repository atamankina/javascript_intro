const books = ["Alice in Wonderland", "Alchimist", "Die Kunst des klugen Handelns",
                "Harry Potter", "The Art of the Deal", "Buntschatten und Fledermäuse",
                "Ray Kroc", "Herr der Ringe"];

// const firstBook = books[0];
// const secondBook = books[1];
// const thirdBook = books[2];

const [firstBook, secondBook, thirdBook, ...allOtherBooks] = books;

const newBook = "English for Beginners";
const newBooks = [...books, newBook];

const [book1, , , book4] = books;

// console.log(firstBook);
// console.log(secondBook);
// console.log(thirdBook);
// console.log(allOtherBooks);
// console.log(newBooks);

console.log(book1);
console.log(book4);