const {
    espectador,
    filme,
    preco,
    quantidade,
    assentosDisponiveis,
    valorPago,
    subtotal,
    assentoStatus,
    taxaStatus,
    valorTaxa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(espectador).toBe("Vinícius Prado")
    expect(filme).toBe("Aventura Espacial")
    expect(preco).toBe(25)
    expect(quantidade).toBe(2)
    expect(assentosDisponiveis).toBe(40)
    expect(valorPago).toBe(60)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(50)

})


test("Deve verificar corretamente assentos disponíveis", () => {

    expect(assentoStatus).toBe("Assentos disponíveis")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(taxaStatus).toBe("Taxa de conveniência: R$ 10")
    expect(valorTaxa).toBe(10)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(60)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusCompra).toBe("Compra confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Vinícius Prado")
    expect(resumo).toContain("Aventura Espacial")
    expect(resumo).toContain("50")
    expect(resumo).toContain("Taxa de conveniência: R$ 10")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Compra confirmada")

})
