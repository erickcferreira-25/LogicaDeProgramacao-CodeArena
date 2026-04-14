
const prompt = require('readline-sync')

let tamanhoTotal = 20

let quantidadeBaixada = prompt.questionInt('quantos giga foi instalado?: ')
let percentual = (quantidadeBaixada / tamanhoTotal) * 100

console.log('========== Progresso do Download ==========' )
console.log(`você já baixou ${Math.round(percentual)}% do arquivo.`)
console.log('========================================')
