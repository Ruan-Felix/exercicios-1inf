let cliente = "Lucas Almeida"
let produto = "Notebook Gamer"
let preco = 4500
let quantidade = 2
let estoque = 10
let valorPago = 9000

let subtotal = preco * quantidade

let estoqueDisponivel;
if (quantidade <= estoque) {
    estoqueDisponivel = "Sim"
} else {
   estoqueDisponivel = "Não"
}

 let descontoPercentual
 if (subtotal >= 1000) {
    descontoPercentual = 10
 } else {
    descontoPercentual = 0
}

let valorDesconto = (subtotal * descontoPercentual) / 100
               
let valorFinal = subtotal - valorDesconto
               
let pagamentoStatus
if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

let troco
if (valorPago >= valorFinal) {
    troco = valorPago - valorFinal
} else {
    troco = 0
}

let statusPedido
if (quantidade <= estoque) {
    statusPedido = "Pedido disponível para finalização"
} else {
    statusPedido = "Pedido não pode ser finalizado por falta de estoque"
}

let resumo = `
========================================
RESUMO DO PEDIDO
========================================
Cliente: ${cliente}
Produto: ${produto}
Preço Unitário: R$ ${preco}
Quantidade: ${quantidade}
----------------------------------------
Subtotal: R$ ${subtotal}
Desconto Aplicado: ${descontoPercentual}%
Valor do Desconto: R$ ${valorDesconto}
Valor Final: R$ ${valorFinal}
----------------------------------------
Situação do Estoque: ${estoqueDisponivel}
Valor Pago: R$ ${valorPago}
Situação do Pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
----------------------------------------
Situação do Pedido: ${statusPedido}
========================================
`
console.log(resumo)

module.exports = {
cliente,
produto,
preco,
quantidade,
estoque,
valorPago,
subtotal,
estoqueDisponivel,
descontoPercentual,
valorDesconto,
valorFinal,
pagamentoStatus,
troco,
statusPedido,
resumo
}