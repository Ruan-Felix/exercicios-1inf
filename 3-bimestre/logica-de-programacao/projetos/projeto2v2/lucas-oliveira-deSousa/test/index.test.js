const {
    cliente,
    servico,
    valorUnidade,
    periodo,
    quantidadeReservada,
    barbeirosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusAgendamento,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Diego Barbosa")
    expect(servico).toBe("Corte e Barba Completo")
    expect(valorUnidade).toBe(100)
    expect(periodo).toBe(5)
    expect(quantidadeReservada).toBe(3)
    expect(barbeirosDisponiveis).toBe(2)
    expect(valorPago).toBe(300)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(500)

})


test("Deve verificar corretamente barbeiros disponíveis no horário", () => {

    expect(disponibilidadeStatus).toBe("Horário indisponível")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de pacote longo aplicado")
    expect(valorDesconto).toBe(30)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(470)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Agendamento com saldo pendente")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(170)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusAgendamento).toBe("Agendamento não pode ser confirmado: horário indisponível")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Diego Barbosa")
    expect(resumo).toContain("Corte e Barba Completo")
    expect(resumo).toContain("500")
    expect(resumo).toContain("Desconto de pacote longo aplicado")
    expect(resumo).toContain("Agendamento com saldo pendente")
    expect(resumo).toContain("Agendamento não pode ser confirmado: horário indisponível")

})
