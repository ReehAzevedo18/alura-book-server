const { getBookss, getBookById, modifyBook, insertBook } = require("../services/book");

function getBooks(req, res) {
  try {
    const books = getBookss;
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;
    if(id && Number(id)){
      const book = getBookById(id);
      res.send(book);
    } else {
      res.status(422)
      res.send("ID Inválido")
    }
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res){
  try {
    const newBook = req.body;
    if(req.body.nome){
      insertBook(newBook);
      res.status(201)
      res.send(newBook)
    }else{
      res.status(422)
      res.send("Nome é obrigatório!")
    }
  
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res){
  try {
    const id = req.params.id;
    const body = req.body

    modifyBook(body, id)
    res.send("Item modificado com sucesso!")

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res){
  try {
    const id = req.params.id;
    deleteBookById(id)
    res.send("Item deletado com sucesso!")

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
module.exports = {
  getBooks,
  getBook,
  patchBook,
  deleteBook,
  postBook
};
