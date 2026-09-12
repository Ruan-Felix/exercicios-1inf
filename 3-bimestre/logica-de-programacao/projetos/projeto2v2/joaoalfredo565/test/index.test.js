const {
    hospede,
    chale,
    valorUnidade,
    periodo,
    quantidadeReservada,
    chalesDisponiveis,
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

    expect(hospede).toBe("Rodrigo Farias")
    expect(chale).toBe("Chalé Duplo")
    expect(valorUnidade).toBe(400)
    expect(periodo).toBe(8)
    expect(quantidadeReservada).toBe(2)
    expect(chalesDisponiveis).toBe(1)
    expect(valorPago).toBe(2000)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(3200)

})


test("Deve verificar corretamente chalés disponíveis", () => {

    expect(disponibilidadeStatus).toBe("Chalés indisponíveis")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de estadia longa aplicado")
    expect(valorDesconto).toBe(150)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(3050)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Reserva com saldo pendente")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(1050)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusReserva).toBe("Reserva não pode ser confirmada: sem chalés disponíveis")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Rodrigo Farias")
    expect(resumo).toContain("Chalé Duplo")
    expect(resumo).toContain("3200")
    expect(resumo).toContain("Desconto de estadia longa aplicado")
    expect(resumo).toContain("Reserva com saldo pendente")
    expect(resumo).toContain("Reserva não pode ser confirmada: sem chalés disponíveis")

})
