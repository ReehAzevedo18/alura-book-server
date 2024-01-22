const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("books.json"));
const novoDado = { id: "3", nome: "Livo muito mais irado" };

//Quando vc utiliza ... antes de uma const, significa que vc está adicionando coisas nesse array (nesse caso)
fs.writeFileSync("books.json", JSON.stringify([...dadosAtuais, novoDado]));
console.log(JSON.parse(fs.readFileSync("books.json")));
