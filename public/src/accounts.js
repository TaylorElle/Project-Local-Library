function findAccountById(accounts, id) {
  // accounts is an array of ojects
  // id is a string
  // FIND the account object that matches the given id
  return accounts.find((location) => location.id === id);
  // It returns the account object that has the matching ID.
}

function sortAccountsByLastName(accounts) {
  // accounts is an array of objects
  // sort the accounts array by last name
  return accounts.sort((name1, name2) =>
    name1.name.last > name2.name.last ? 1 : -1
  );
  // It returns a sorted array of objects. The objects are sorted alphabetically by last name.
}

function numberOfBorrows(account, books) {
  // account is an object
  // books is an array of objects
  // create sum variable
  let sum = 0;
  // loop through the books array
  for (let indexI = 0; indexI < books.length; indexI++) {
    // declare a object.keys variable for the borrows values
    const borrowNewArr = Object.values(books[indexI].borrows);
    // loop through the borrow array
    for (let indexJ = 0; indexJ < borrowNewArr.length; indexJ++) {
      // if books[i].borrows[j] is equal to the account id value
      if (borrowNewArr[indexJ].id === account.id) {
        sum += 1;
        // else don't do anything to the sum
      } else sum;
      // continue running through the borrow array until length
    }
    // continue running through the books array until length
  }
  //  return a _number_ that represents the number of times the account's ID has appeared in a book's `borrow` array.
  return sum;
}

function getBooksPossessedByAccount(account, books, authors) {
  // account is an object
  // books is an array of objects
  // authors is an array of objects
  // have to go through the books array and loop through the borrows array of that book and see if the given account is in the borrow array.
  // if it is in the borrow array, see if returned === false.
  // if it is false, then the book is still checked out and that book AND the author that corresponds to that author ID of that book needs to be added to a new array.
  // this new array represents the books/author that the given account still has checked out.

  // create a new array
  const resultArr = [];
  // for loop through the books array
  for (let indexI = 0; indexI < books.length; indexI++) {
    //  for loop through the books.borrows array
    for (let indexL = 0; indexL < books[indexI].borrows.length; indexL++) {
      // borrows.id and see if the id matches the account.id.
      if (books[indexI].borrows[indexL].id === account.id) {
        // if it does, see if returned === false
        if (books[indexI].borrows[indexL].returned === false) {
          // if it is false, add that book to a new array.
          resultArr.push(books[indexI]);
        } else resultArr;
        // else
      } else resultArr;
    }
  }
  // then loop through that new array and see if any of those books.authorId matches the author.id.
  for (let indexJ = 0; indexJ < resultArr.length; indexJ++) {
    for (let indexK = 0; indexK < authors.length; indexK++) {
      if (resultArr[indexJ].authorId === authors[indexK].id) {
        // if it does, push that author object into the array at the index location.
        resultArr[indexJ].author = authors[indexK];
      } else resultArr;
    }
  }
  // at the end, return the new array
  return resultArr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
