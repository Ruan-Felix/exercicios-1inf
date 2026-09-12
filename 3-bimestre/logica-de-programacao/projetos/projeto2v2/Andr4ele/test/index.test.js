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

    expect(cliente).toBe("Eduardo Lima")
    expect(produto).toBe("Placa de Vídeo Gamer")
    expect(preco).toBe(1200)
    expect(quantidade).toBe(5)
    expect(estoque).toBe(3)
    expect(valorPago).toBe(7000)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(6000)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque insuficiente")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(valorFrete).toBe(0)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(6000)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(1000)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusCompra).toBe("Compra não pode ser confirmada por falta de estoque")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Eduardo Lima")
    expect(resumo).toContain("Placa de Vídeo Gamer")
    expect(resumo).toContain("6000")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("1000")
    expect(resumo).toContain("Compra não pode ser confirmada por falta de estoque")

})
