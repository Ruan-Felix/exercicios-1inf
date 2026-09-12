const {
    cliente,
    volume,
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
    statusRetirada,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Gustavo Pires")
    expect(volume).toBe("Mala de Viagem")
    expect(valorBase).toBe(25)
    expect(diasPermitidos).toBe(2)
    expect(diasUtilizados).toBe(6)
    expect(valorMultaPorDia).toBe(15)
    expect(valorPago).toBe(40)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Excedeu a tolerância")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(4)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(60)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(85)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusRetirada).toBe("Retirada bloqueada: pagamento não cobre a multa")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Gustavo Pires")
    expect(resumo).toContain("Mala de Viagem")
    expect(resumo).toContain("60")
    expect(resumo).toContain("85")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("Retirada bloqueada: pagamento não cobre a multa")

})
