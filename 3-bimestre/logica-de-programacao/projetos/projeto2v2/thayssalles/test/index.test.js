const {
    motorista,
    placa,
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
    statusSaida,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(motorista).toBe("Fábio Nascimento")
    expect(placa).toBe("ABC1D23")
    expect(valorBase).toBe(20)
    expect(diasPermitidos).toBe(2)
    expect(diasUtilizados).toBe(1)
    expect(valorMultaPorDia).toBe(10)
    expect(valorPago).toBe(20)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Dentro da tolerância")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(0)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(20)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusSaida).toBe("Saída liberada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Fábio Nascimento")
    expect(resumo).toContain("ABC1D23")
    expect(resumo).toContain("0")
    expect(resumo).toContain("20")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Saída liberada")

})
