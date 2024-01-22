const { json } = require("express");

function getBookss() {
  const fs = require("fs");
  return JSON.parse(fs.readFileSync("books.json"));
}

function getBookById(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));

  //Estou pegando o livro que está no arquivo na posição 0
  const bookFilter = books.filter((book) => book.id === id)[0];
  return bookFilter;
}

function insertBook(book){
  const books = JSON.parse(fs.readFileSync("books.json"))

  const newListBook = [... books, book]
  
  fs.writeFileSync("books.json", JSON.stringify(newListBook))
}

function modifyBook(modificacoes, id){
  let booksCurrent = JSOM.parse(fs.readFileSync("books.json"))
  const indexModified = booksCurrent.findIndex(book => book.id == id)

  //Vai criar uma lista com todos os campos da classe books | ele pega o objeto que tá no indice e substitui pela modificação que eu passei, se o campo já estiver no objeto que ele pegou no indice
  const contentChanged = { ... booksCurrent[indexModified], ...modificacoes}

  booksCurrent[indexModified] = contentChanged

  fs.writeFileSync("books.json", JSON.stringify(booksCurrent))
}

function deleteBookById(id){
  let booksCurrent = JSON.parse(fs.readFileSync("books.json"))
  const indexModified = booksCurrent.findIndex(book => book.id == id)
  const result = booksCurrent.findByIdAndDelete(indexModified)

  fs.writeFileSync("books.json", result)
}

module.exports = {
  getBookss,
  getBookById,
  modifyBook, 
  deleteBookById,
  insertBook
};
