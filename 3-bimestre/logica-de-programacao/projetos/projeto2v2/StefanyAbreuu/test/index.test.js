const {
    cliente,
    aparelho,
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
    statusOrdemReparo,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Tatiane Nunes")
    expect(aparelho).toBe("Smartphone Galaxy")
    expect(valorBase).toBe(600)
    expect(diasPermitidos).toBe(3)
    expect(diasUtilizados).toBe(7)
    expect(valorMultaPorDia).toBe(25)
    expect(valorPago).toBe(650)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Retirado com atraso")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(4)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(100)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(700)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusOrdemReparo).toBe("Ordem de reparo pendente: pagamento não cobre a taxa de armazenagem")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Tatiane Nunes")
    expect(resumo).toContain("Smartphone Galaxy")
    expect(resumo).toContain("100")
    expect(resumo).toContain("700")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("Ordem de reparo pendente: pagamento não cobre a taxa de armazenagem")

})
