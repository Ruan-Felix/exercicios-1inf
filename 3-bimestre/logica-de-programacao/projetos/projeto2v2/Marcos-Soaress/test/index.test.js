const {
    cliente,
    quadra,
    valorUnidade,
    periodo,
    quantidadeReservada,
    quadrasDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusReserva,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Bruno Alves")
    expect(quadra).toBe("Quadra de Society")
    expect(valorUnidade).toBe(60)
    expect(periodo).toBe(2)
    expect(quantidadeReservada).toBe(1)
    expect(quadrasDisponiveis).toBe(3)
    expect(valorPago).toBe(120)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(120)

})


test("Deve verificar corretamente quadras disponíveis no horário", () => {

    expect(disponibilidadeStatus).toBe("Quadras disponíveis")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(120)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Reserva quitada")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusReserva).toBe("Reserva confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Bruno Alves")
    expect(resumo).toContain("Quadra de Society")
    expect(resumo).toContain("120")
    expect(resumo).toContain("Sem desconto")
    expect(resumo).toContain("Reserva quitada")
    expect(resumo).toContain("Reserva confirmada")

})
