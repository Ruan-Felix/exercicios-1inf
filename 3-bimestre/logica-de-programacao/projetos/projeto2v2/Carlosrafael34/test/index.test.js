const {
    cliente,
    aparelho,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    entregaStatus,
    valorEntrega,
    valorFinal,
    pagamentoStatus,
    troco,
    statusVenda,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Henrique Souza")
    expect(aparelho).toBe("Fone Bluetooth")
    expect(preco).toBe(90)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(8)
    expect(valorPago).toBe(200)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(180)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(entregaStatus).toBe("Taxa de entrega: R$ 25")
    expect(valorEntrega).toBe(25)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(205)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusVenda).toBe("Venda pendente de pagamento")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Henrique Souza")
    expect(resumo).toContain("Fone Bluetooth")
    expect(resumo).toContain("180")
    expect(resumo).toContain("Taxa de entrega: R$ 25")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Venda pendente de pagamento")

})
