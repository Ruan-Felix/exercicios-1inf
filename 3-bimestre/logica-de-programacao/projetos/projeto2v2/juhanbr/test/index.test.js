const {
    contratante,
    pacote,
    valorUnidade,
    periodo,
    quantidadeReservada,
    mesasDisponiveis,
    valorPago,
    valorBase,
    capacidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusOrcamento,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(contratante).toBe("Isabela Rocha")
    expect(pacote).toBe("Pacote Diamante")
    expect(valorUnidade).toBe(250)
    expect(periodo).toBe(7)
    expect(quantidadeReservada).toBe(20)
    expect(mesasDisponiveis).toBe(12)
    expect(valorPago).toBe(1000)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(1750)

})


test("Deve verificar corretamente mesas disponíveis no espaço", () => {

    expect(capacidadeStatus).toBe("Espaço não comporta o evento")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de evento longo aplicado")
    expect(valorDesconto).toBe(100)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(1650)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Orçamento com saldo pendente")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(650)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusOrcamento).toBe("Orçamento não pode ser confirmado: espaço não comporta o evento")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Isabela Rocha")
    expect(resumo).toContain("Pacote Diamante")
    expect(resumo).toContain("1750")
    expect(resumo).toContain("Desconto de evento longo aplicado")
    expect(resumo).toContain("Orçamento com saldo pendente")
    expect(resumo).toContain("Orçamento não pode ser confirmado: espaço não comporta o evento")

})
