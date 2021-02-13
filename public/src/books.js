function findAuthorById(authors, id) {
  // find method
  const result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  // find method
  const result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  // filter into borrowed array

  const hugeArr = books.filter((book) => book.borrows[0].returned === false);
  const anotherArr = books.filter((book) => book.borrows[0].returned === true);

  const combinedArr = [hugeArr, anotherArr];
  return combinedArr;
}

function getBorrowersForBook(book, accounts) {
  // book is an object
  // accounts is an array
  // return an array that has all the book's borrows info.
  // in each borrows object(with the id and the returned keys), include the account information for that account id
  // create a new array for the return
  const resultArr = [];
  // loop through the book.borrows
  for (let indexI = 0; indexI < book.borrows.length; indexI++) {
    // loop through the accounts
    for (let indexJ = 0; indexJ < accounts.length; indexJ++) {
      // if the book.borrows.id === account[j].id]
      if (book.borrows[indexI].id === accounts[indexJ].id) {
        // create a new bookborrows variable that holds the borrows[i] and the accounts[j]
        const newBookBorrows = { ...book.borrows[indexI], ...accounts[indexJ] };

        // push that bookborrows variable into the result array
        resultArr.push(newBookBorrows);
      }
      // else statement
      else resultArr;
    }
  }
  // return the result array
  return resultArr.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
