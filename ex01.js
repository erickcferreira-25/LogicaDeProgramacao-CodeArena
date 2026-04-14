
const readline = require('readline-sync')

let nome = readline.question("Digite seu nome: ")

if (nome == "Erick") {
console.log("Olá, Erick! Bem-vindo de volta!")
} else {
console.log(`Olá, ${nome}! Prazer em conhecê-lo!`)
 }
