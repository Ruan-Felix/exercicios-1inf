const {
    hospede,
    quarto,
    valorUnidade,
    periodo,
    quantidadeReservada,
    quartosDisponiveis,
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

    expect(hospede).toBe("Camila Duarte")
    expect(quarto).toBe("Suíte Standard")
    expect(valorUnidade).toBe(300)
    expect(periodo).toBe(3)
    expect(quantidadeReservada).toBe(1)
    expect(quartosDisponiveis).toBe(5)
    expect(valorPago).toBe(900)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(900)

})


test("Deve verificar corretamente quartos disponíveis", () => {

    expect(disponibilidadeStatus).toBe("Quartos disponíveis")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(900)

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

    expect(resumo).toContain("Camila Duarte")
    expect(resumo).toContain("Suíte Standard")
    expect(resumo).toContain("900")
    expect(resumo).toContain("Sem desconto")
    expect(resumo).toContain("Reserva quitada")
    expect(resumo).toContain("Reserva confirmada")

})
