
const readline = require('readline-sync');

let nome = readline.question("Digite seu nome: ")

if (nome == "Alice") {
console.log("Olá, Alice! Bem-vinda de volta!")
} else {
console.log(`Olá, ${nome}! Prazer em conhecê-lo!`)
 }
