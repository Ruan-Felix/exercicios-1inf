const {
    cliente,
    item,
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
    statusLocacao,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Marina Teixeira")
    expect(item).toBe("Jogo de Videogame Aventura Final")
    expect(valorBase).toBe(0)
    expect(diasPermitidos).toBe(14)
    expect(diasUtilizados).toBe(20)
    expect(valorMultaPorDia).toBe(3)
    expect(valorPago).toBe(15)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Devolvido com atraso")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(6)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(18)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(18)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusLocacao).toBe("Locação pendente: multa não paga integralmente")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Marina Teixeira")
    expect(resumo).toContain("Jogo de Videogame Aventura Final")
    expect(resumo).toContain("18")
    expect(resumo).toContain("18")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("Locação pendente: multa não paga integralmente")

})
