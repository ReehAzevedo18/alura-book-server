//Servidor express
const express = require("express");
const app = express();
app.use(express.json())
const routerBooks = require("./routes/book");

const port = 8000;

app.use("/books", routerBooks);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
