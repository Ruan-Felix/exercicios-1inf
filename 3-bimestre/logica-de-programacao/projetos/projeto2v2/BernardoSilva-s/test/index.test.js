const {
    cliente,
    calcado,
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

    expect(cliente).toBe("Larissa Farias")
    expect(calcado).toBe("Tênis Esportivo")
    expect(preco).toBe(90)
    expect(quantidade).toBe(4)
    expect(estoque).toBe(2)
    expect(valorPago).toBe(500)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(360)

})


test("Deve verificar corretamente estoque disponível", () => {

    expect(estoqueDisponivel).toBe("Estoque insuficiente")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(cupomStatus).toBe("Cupom aplicado")
    expect(valorCupom).toBe(40)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(320)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(180)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusCompra).toBe("Compra não pode ser confirmada por falta de estoque")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Larissa Farias")
    expect(resumo).toContain("Tênis Esportivo")
    expect(resumo).toContain("360")
    expect(resumo).toContain("Cupom aplicado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("180")
    expect(resumo).toContain("Compra não pode ser confirmada por falta de estoque")

})
