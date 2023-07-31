function findAuthorById(authors, id) {
  let foundId = authors.find((author) => author.id === id)
  return foundId
}

function findBookById(books, id) {
  let foundId = books.find((book) => book.id === id)
  return foundId
}

function partitionBooksByBorrowedStatus(books) {
   let booksCheckedIn = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true));
   let booksCheckedOut = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false));
   let twoArrays = [[...booksCheckedOut], [...booksCheckedIn]];
 return twoArrays;
}


function getBorrowersForBook(book, accounts) {
   return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
