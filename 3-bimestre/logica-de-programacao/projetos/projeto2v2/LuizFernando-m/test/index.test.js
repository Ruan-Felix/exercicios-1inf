const {
    cliente,
    veiculo,
    valorUnidade,
    periodo,
    quantidadeReservada,
    motosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusAluguel,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Natália Pires")
    expect(veiculo).toBe("Moto Esportiva 300cc")
    expect(valorUnidade).toBe(200)
    expect(periodo).toBe(12)
    expect(quantidadeReservada).toBe(2)
    expect(motosDisponiveis).toBe(1)
    expect(valorPago).toBe(1500)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(2400)

})


test("Deve verificar corretamente motos disponíveis", () => {

    expect(disponibilidadeStatus).toBe("Motos indisponíveis")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de aluguel longo aplicado")
    expect(valorDesconto).toBe(120)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(2280)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Aluguel com saldo pendente")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(780)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusAluguel).toBe("Aluguel não pode ser confirmado: motos indisponíveis")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Natália Pires")
    expect(resumo).toContain("Moto Esportiva 300cc")
    expect(resumo).toContain("2400")
    expect(resumo).toContain("Desconto de aluguel longo aplicado")
    expect(resumo).toContain("Aluguel com saldo pendente")
    expect(resumo).toContain("Aluguel não pode ser confirmado: motos indisponíveis")

})
