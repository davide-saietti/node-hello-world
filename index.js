console.log("Hello Boolean")
console.log(process.argv)

const contavocali = require("./moduli/contavocali")


const parola = process.argv[2]
const result = contavocali(parola)

console.log(result)