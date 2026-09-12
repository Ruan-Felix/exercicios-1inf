const {
    cliente,
    medicamento,
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

    expect(cliente).toBe("Bianca Ferreira")
    expect(medicamento).toBe("Analgésico Dorfin")
    expect(preco).toBe(15)
    expect(quantidade).toBe(10)
    expect(estoque).toBe(20)
    expect(valorPago).toBe(150)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(150)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(descontoStatus).toBe("Desconto aplicado")
    expect(valorDesconto).toBe(20)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(130)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(20)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusVenda).toBe("Venda confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Bianca Ferreira")
    expect(resumo).toContain("Analgésico Dorfin")
    expect(resumo).toContain("150")
    expect(resumo).toContain("Desconto aplicado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("20")
    expect(resumo).toContain("Venda confirmada")

})
