const {
    cliente,
    produtoNatural,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusVenda,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Otávio Nunes")
    expect(produtoNatural).toBe("Vitamina C Natural")
    expect(preco).toBe(8)
    expect(quantidade).toBe(5)
    expect(estoque).toBe(15)
    expect(valorPago).toBe(20)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(40)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(40)

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

    expect(resumo).toContain("Otávio Nunes")
    expect(resumo).toContain("Vitamina C Natural")
    expect(resumo).toContain("40")
    expect(resumo).toContain("Sem desconto")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Venda pendente de pagamento")

})
