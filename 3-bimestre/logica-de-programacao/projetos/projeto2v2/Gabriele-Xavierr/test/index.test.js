const {
    espectador,
    peca,
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

    expect(espectador).toBe("Fernanda Melo")
    expect(peca).toBe("Um Sonho de Verão")
    expect(preco).toBe(20)
    expect(quantidade).toBe(6)
    expect(assentosDisponiveis).toBe(4)
    expect(valorPago).toBe(150)

})


test("Deve calcular subtotal corretamente", () => {

    expect(subtotal).toBe(120)

})


test("Deve verificar corretamente assentos disponíveis", () => {

    expect(assentoStatus).toBe("Assentos insuficientes")

})


test("Deve aplicar corretamente a regra comercial (RF04)", () => {

    expect(taxaStatus).toBe("Sem taxa de conveniência")
    expect(valorTaxa).toBe(0)

})


test("Deve calcular valor final corretamente", () => {

    expect(valorFinal).toBe(120)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(30)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusCompra).toBe("Compra não pode ser confirmada: assentos insuficientes")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Fernanda Melo")
    expect(resumo).toContain("Um Sonho de Verão")
    expect(resumo).toContain("120")
    expect(resumo).toContain("Sem taxa de conveniência")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("30")
    expect(resumo).toContain("Compra não pode ser confirmada: assentos insuficientes")

})
