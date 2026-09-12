const {
    cliente,
    servico,
    valorUnidade,
    periodo,
    quantidadeReservada,
    profissionaisDisponiveis,
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

    expect(cliente).toBe("Aline Souza")
    expect(servico).toBe("Coloração Completa")
    expect(valorUnidade).toBe(80)
    expect(periodo).toBe(2)
    expect(quantidadeReservada).toBe(1)
    expect(profissionaisDisponiveis).toBe(2)
    expect(valorPago).toBe(160)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(160)

})


test("Deve verificar corretamente profissionais disponíveis no horário", () => {

    expect(disponibilidadeStatus).toBe("Horário disponível")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(160)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Agendamento quitado")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusAgendamento).toBe("Agendamento confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Aline Souza")
    expect(resumo).toContain("Coloração Completa")
    expect(resumo).toContain("160")
    expect(resumo).toContain("Sem desconto")
    expect(resumo).toContain("Agendamento quitado")
    expect(resumo).toContain("Agendamento confirmado")

})
