function totalBooksCount(books) {
  const result = books.length;
  return result;
}

function totalAccountsCount(accounts) {
  const result = accounts.length;
  return result;
}

function booksBorrowedCount(books) {
  function isBookBorrowed(book) {
    return book.borrows[0].returned === false;
  }
  const reducing = books.reduce((sum, book) => {
    if (isBookBorrowed(book)) {
      return sum + 1;
    }
    return sum;
  }, 0);
  return reducing;
}

function getMostCommonGenres(books) {
  // books is an array
  // return an array of objects - name and count are the 2 keys in the object
  // return five items or less
  // want it in most common to least commont (only top 5 are returned)
  // want to know what genres we have and
  // also want to know how many books we have in that genre
  // create a return object
  const resultObj = {};
  // loop through the books
  books.forEach((book) => {
    // if the book genre exists in the resultObj, add 1 to the value
    if (resultObj[book.genre]) {
      resultObj[book.genre]++;
      // if the book genre isn't in the resultObj, add the genre and set the value to 1
    } else {
      resultObj[book.genre] = 1;
    }
  });
  // object.keys
  const genreArr = Object.keys(resultObj);
  // map it
  const unsortedArr = genreArr.map((genre) => ({
    name: genre,
    count: resultObj[genre],
  }));
  // sort
  unsortedArr.sort((first, second) => second.count - first.count);
  // return an array with objects in it. top 5 objects
  // the objects have two keys (name and count)
  return unsortedArr.slice(0, 5);
}

function getMostPopularBooks(books) {
  // argument is an array of books
  // return an array of objects - name and count are the 2 keys in the object
  // return 5 items or less (only top 5 books)
  // want to know the name of the book
  // want to know how many times it's been borrowed (maybe borrowed.length or reduce())
  // want to sort with most popular first
  // create a return object
  const resultObj = {};
  // loop through the books
  books.forEach((book) => {
    resultObj[book.title] = book.borrows.length;
  });
  // make into array
  const titleArr = Object.keys(resultObj);
  // map into a new array
  const sortingArr = titleArr.map((title) => ({
    name: title,
    count: resultObj[title],
  }));
  // sort that new array
  sortingArr.sort((first, second) => second.count - first.count);
  return sortingArr.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // books is an array
  // authors is an array
  // returns an array with 5 or less objects of the most popular authors
  // most popular is whose books get checked out most
  // returns with a name key (first/last name of author) DESTRUCTURE and count key (how many times the author's books have been borrowed)
  // create a new object
  const resultObj = {};

  // LOOP THROUGH THE BOOKS ARRAY.
  for (let i = 0; i < books.length; i++) {
    const borrowLength = books[i].borrows.length;
    const foundAuthor = authors.find(
      (author) => author.id === books[i].authorId
    );
    // destructure
    const {
      name: { first, last },
    } = foundAuthor;
    const fullName = `${first} ${last}`;
    // if the author's name is already in the object, add that books.borrows.length amount
    if (resultObj[fullName]) {
      resultObj[fullName] += borrowLength;
    }
    // if it isn't, add that author's name into the object and add the book.borrows.length amount
    else {
      resultObj[fullName] = borrowLength;
    }
  }

  // add name and count as keys to the object
  const nameArr = Object.keys(resultObj);
  // map it
  const sortingArr = nameArr.map((oneName) => ({
    name: oneName,
    count: resultObj[oneName],
  }));
  // sort the array by highest count values
  sortingArr.sort((first, second) => second.count - first.count);
  // return the top 5
  return sortingArr.slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
