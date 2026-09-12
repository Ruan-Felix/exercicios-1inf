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


test("Deve armazenar corretamente os dados da compra", () => {

    expect(cliente).toBe("Rafael Souza")
    expect(produto).toBe("Monitor 24 polegadas")
    expect(preco).toBe(800)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(10)
    expect(valorPago).toBe(2000)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(1600)

})


test("Deve identificar que existe estoque suficiente", () => {

    expect(estoqueDisponivel).toBe("Estoque suficiente")

})


test("Deve identificar frete grátis para subtotal acima do mínimo", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(valorFrete).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(1600)

})


test("Deve identificar o pagamento como aprovado", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(400)

})


test("Deve confirmar a compra quando houver estoque e pagamento aprovado", () => {

    expect(statusCompra).toBe("Compra confirmada")

})


test("Deve gerar um resumo contendo as informações da compra", () => {

    expect(resumo).toContain("Rafael Souza")
    expect(resumo).toContain("Monitor 24 polegadas")
    expect(resumo).toContain("800")
    expect(resumo).toContain("1600")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("400")
    expect(resumo).toContain("Compra confirmada")

})
