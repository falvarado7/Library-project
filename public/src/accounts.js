function findAccountById(accounts, id) {
  // returns account object that has matching ID
  let foundId = accounts.find((account) => account.id === id);
  return foundId
}

function sortAccountsByLastName(accounts) {
  // returns sorted aaray of account objects
  // objects are sorted A-Z by LAST NAME
 accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()
   ? 1 : -1);
  return accounts
}

  // returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
  /* Old function 
  function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    totalBorrows += 1;
   }
  }
 }
 return totalBorrows;
*/

  // New function with reduce
function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  return books.reduce((totalBorrowed, { borrows }) => {
    if (borrows.some((record) => record.id === id)) totalBorrowed++;
    return totalBorrowed;
  }, 0);
}
  
  
  
function getBooksPossessedByAccount(account, books, authors) {
// find books for account
let booksPossessed = [];
books.forEach(book => {
  let borrowArray = book.borrows;
  // check borrows property for returned false
  if (borrowArray.find(borrow => borrow.id === account.id &&
      borrow.returned === false)) {
    booksPossessed.push(book);
  }
  })
booksPossessed.forEach(book => {
  // get ID and use ID to look up accounts
  let author = authors.find(person => person.id === book.authorId);
  // add authors to books
  book['author'] = author;
})
  console.log(booksPossessed);
  return booksPossessed
}



  




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
