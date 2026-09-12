const {
    cliente,
    restaurante,
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
    statusPedido,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Larissa Gomes")
    expect(restaurante).toBe("Pizzaria Bella Napoli")
    expect(valorBase).toBe(60)
    expect(diasPermitidos).toBe(40)
    expect(diasUtilizados).toBe(35)
    expect(valorMultaPorDia).toBe(1)
    expect(valorPago).toBe(60)

})


test("Deve verificar corretamente o prazo", () => {

    expect(prazoStatus).toBe("Entregue dentro do prazo")

})


test("Deve calcular os dias de atraso corretamente", () => {

    expect(diasAtraso).toBe(0)

})


test("Deve calcular a multa corretamente", () => {

    expect(multa).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(60)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusPedido).toBe("Pedido concluído")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Larissa Gomes")
    expect(resumo).toContain("Pizzaria Bella Napoli")
    expect(resumo).toContain("0")
    expect(resumo).toContain("60")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Pedido concluído")

})
