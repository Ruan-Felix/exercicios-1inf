const {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    freteStatus,
    valorFrete,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Marina Alves")
    expect(produto).toBe("Monitor 24 polegadas")
    expect(preco).toBe(800)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(10)
    expect(valorPago).toBe(2000)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(1600)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(valorFrete).toBe(0)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(1600)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(400)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusCompra).toBe("Compra confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Marina Alves")
    expect(resumo).toContain("Monitor 24 polegadas")
    expect(resumo).toContain("1600")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("400")
    expect(resumo).toContain("Compra confirmada")

})
