const {
    cliente,
    encomenda,
    valorBase,
    diasPermitidos,
    diasUtilizados,
    valorMultaPorDia,
    valorPago,
    prazoStatus,
    diasAtraso,
    multa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusEncomenda,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Vitor Hugo Souza")
    expect(encomenda).toBe("Encomenda Frágil")
    expect(valorBase).toBe(90)
    expect(diasPermitidos).toBe(30)
    expect(diasUtilizados).toBe(50)
    expect(valorMultaPorDia).toBe(2)
    expect(valorPago).toBe(100)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Entregue com atraso")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(20)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(40)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(130)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusEncomenda).toBe("Encomenda pendente: pagamento não cobre a taxa adicional")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Vitor Hugo Souza")
    expect(resumo).toContain("Encomenda Frágil")
    expect(resumo).toContain("40")
    expect(resumo).toContain("130")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("Encomenda pendente: pagamento não cobre a taxa adicional")

})
