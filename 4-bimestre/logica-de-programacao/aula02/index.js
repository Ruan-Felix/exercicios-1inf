const prompt = require("prompt-sync")()

let meta = 0
let lotes = 0

do {
  meta = Number(prompt("Meta de lotes: "))
} while (lotes == meta)

console.log(meta)