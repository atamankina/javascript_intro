const book = {
    title: "English for Beginners",
    author: "Lucy Smith",
    year: 2003,
    isbn: "isbn-1234567890",
    pages: 340,
    rating: 4.5
};

// const bookTitle = book.title;
// const bookAuthor = book.author;
// const bookRating = book.rating;

//const {title, author, rating} = book;

const {rating: bookRating, title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);
console.log(bookAuthor);
console.log(bookRating);

// console.log(title);
// console.log(author);
// console.log(rating);