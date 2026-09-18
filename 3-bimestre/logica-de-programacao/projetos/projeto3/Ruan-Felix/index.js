const nome = "Ruan Félix"
const idade = 15
const categoria = "comum"
const possuiInscricao = true
const inadimplente = false
const valorMensalidade = 0
const valorPago = 0
let idadeStatus = "Idade não permitida"

if (idade >= 18) {
    console.log("Idade permitida")
}else {
    console.log("Idade não permitida")
}
let nivelAcesso ="Acesso comum"
if (categoria == "professor" || categoria == "coordenador") {
    console.log("Acesso administrativo liberado")
}else {
    console.log("Acesso comum")
}
let acessoStatus = "Acesso à aula negado"
if (idade >= 18 && possuiInscricao && !inadimplente) {
    console.log("Acesso à aula liberado")
}else {
    console.log("Acesso à aula negado")
}
let pagamentoStatus = "Pagamento aprovado"
if (valorPago >= valorMensalidade){
    console.log("Pagamento aprovado")
    troco = valorPago - valorMensalidade
}else {
    console.log("Pagamento insuficiente")
}
let statusAula ="Presença na aula não confirmada"
if (acessoStatus && pagamentoStatus) {
    console.log("Presença na aula  não confirmada")
}else {
    console.log("Presença na aula confirmada")
}
const resumo = `
nome do aluno:${nome}
categoria:${categoria}
nível de acesso:${nivelAcesso}
valor da mensalidade:${valorMensalidade}
valor pago:${valorPago}
troco:${troco}
situação do acesso:${acessoStatus}
situação do pagamento:${pagamentoStatus}
situação final:${statusAula}
`
console.log(resumo)
module.exports = {
    nome,
    idade,
    categoria,
    possuiInscricao,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAula,
    resumo
}