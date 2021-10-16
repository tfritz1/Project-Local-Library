function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const available = books.filter((book) => !book.borrows[0].returned)
  const notAvailable = books.filter((book) => book.borrows[0].returned === true)
  return ([available, notAvailable])
}

function getBorrowersForBook(book, accounts) {
  const borrowersHistory = book.borrows.map((borrow) => {
    let info = findAuthorById(accounts, borrow.id)
    info.returned = borrow.returned
    return info
  })
  return (borrowersHistory.slice(0, 10))
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
