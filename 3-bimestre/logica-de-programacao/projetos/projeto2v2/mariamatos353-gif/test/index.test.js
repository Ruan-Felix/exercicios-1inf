const {
    cliente,
    sala,
    valorUnidade,
    periodo,
    quantidadeReservada,
    salasDisponiveis,
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

    expect(cliente).toBe("Juliana Prado")
    expect(sala).toBe("Sala de Dança de Salão")
    expect(valorUnidade).toBe(50)
    expect(periodo).toBe(5)
    expect(quantidadeReservada).toBe(2)
    expect(salasDisponiveis).toBe(1)
    expect(valorPago).toBe(150)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(250)

})


test("Deve verificar corretamente salas disponíveis no horário", () => {

    expect(disponibilidadeStatus).toBe("Salas indisponíveis")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de reserva longa aplicado")
    expect(valorDesconto).toBe(25)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(225)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Reserva com saldo pendente")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(75)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusReserva).toBe("Reserva não pode ser confirmada: salas indisponíveis")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Juliana Prado")
    expect(resumo).toContain("Sala de Dança de Salão")
    expect(resumo).toContain("250")
    expect(resumo).toContain("Desconto de reserva longa aplicado")
    expect(resumo).toContain("Reserva com saldo pendente")
    expect(resumo).toContain("Reserva não pode ser confirmada: salas indisponíveis")

})
