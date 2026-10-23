const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const metaDiaria = Number(prompt("Meta diária: "))
const metaSemanal = Number(prompt("Meta semanal: "))

let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

for (let i = 1; i <= quantidadeDeDias; i++) {
    const vendaDia = Number(prompt(`Venda do dia ${i}: `))

    totalVendido += vendaDia

    if (vendaDia >= metaDiaria) {
        diasAcimaDaMeta++
    }

    if (vendaDia > melhorDia) {
        melhorDia = vendaDia
    }
}

const mediaVendas = totalVendido / quantidadeDeDias

const situacaoSemana = totalVendido >= metaSemanal ? "Meta semanal atingida" : "Meta semanal não atingida"

const resumo = `Total vendido: ${totalVendido}, Média diária: ${mediaVendas}, Dias acima da meta: ${diasAcimaDaMeta}, Melhor dia: ${melhorDia}, Situação: ${situacaoSemana}`

console.log(resumo)

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}