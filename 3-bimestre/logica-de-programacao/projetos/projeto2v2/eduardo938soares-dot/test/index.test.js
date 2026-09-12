const {
    cliente,
    produto,
    preco,
    quantidade,
    capacidadeCaminhao,
    valorPago,
    subtotal,
    capacidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Renata Dias")
    expect(produto).toBe("Garrafão de Água Mineral 20L")
    expect(preco).toBe(4)
    expect(quantidade).toBe(45)
    expect(capacidadeCaminhao).toBe(40)
    expect(valorPago).toBe(200)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(180)

})


test("Deve verificar corretamente capacidade do caminhão de entrega", () => {

    expect(capacidadeStatus).toBe("Excede a capacidade do caminhão")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(descontoStatus).toBe("Desconto aplicado")
    expect(valorDesconto).toBe(15)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(165)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(35)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusPedido).toBe("Pedido não pode ser confirmado: excede a capacidade do caminhão")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Renata Dias")
    expect(resumo).toContain("Garrafão de Água Mineral 20L")
    expect(resumo).toContain("180")
    expect(resumo).toContain("Desconto aplicado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("35")
    expect(resumo).toContain("Pedido não pode ser confirmado: excede a capacidade do caminhão")

})
