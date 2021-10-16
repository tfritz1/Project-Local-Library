function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1)) 
}

function getTotalNumberOfBorrows(account, books) {
  let borrowedBooks = books.filter((book) => book.borrows.some((bookID) => bookID.id === account.id))
  return borrowedBooks.length
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = []
  books.forEach(book => {
    if (book.borrows.find(item => item.id === account.id && item.returned === false)){
      booksPossessed.push(book)
    }
  })
  booksPossessed.forEach(book => {
    let authorInfo = authors.find(person => person.id === book.authorId)
    book['author'] = authorInfo
  })
  return booksPossessed
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
