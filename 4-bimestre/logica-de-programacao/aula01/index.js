const prompt = require("prompt-sync")()

const meta = Number(prompt("Meta de caixas: "))

let caixas = 0

while (caixas <= meta) {
   soma = meta + caixas
  caixas = caixas + 1
}

console.log(meta)