const {
    cliente,
    veiculo,
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
    statusOrdemServico,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Rogério Alves")
    expect(veiculo).toBe("Fiat Argo")
    expect(valorBase).toBe(450)
    expect(diasPermitidos).toBe(3)
    expect(diasUtilizados).toBe(2)
    expect(valorMultaPorDia).toBe(20)
    expect(valorPago).toBe(450)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Retirado dentro do prazo")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(0)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(450)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusOrdemServico).toBe("Ordem de serviço encerrada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Rogério Alves")
    expect(resumo).toContain("Fiat Argo")
    expect(resumo).toContain("0")
    expect(resumo).toContain("450")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Ordem de serviço encerrada")

})
