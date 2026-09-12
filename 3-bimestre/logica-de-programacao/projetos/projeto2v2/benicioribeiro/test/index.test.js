const {
    cliente,
    peca,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    cupomStatus,
    valorCupom,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Diego Martins")
    expect(peca).toBe("Camiseta Branca")
    expect(preco).toBe(50)
    expect(quantidade).toBe(3)
    expect(estoque).toBe(10)
    expect(valorPago).toBe(200)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(150)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(cupomStatus).toBe("Sem cupom")
    expect(valorCupom).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(150)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(50)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusCompra).toBe("Compra confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Diego Martins")
    expect(resumo).toContain("Camiseta Branca")
    expect(resumo).toContain("150")
    expect(resumo).toContain("Sem cupom")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("50")
    expect(resumo).toContain("Compra confirmada")

})
