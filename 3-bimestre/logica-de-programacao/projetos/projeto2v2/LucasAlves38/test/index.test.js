const {
    cliente,
    veiculo,
    valorUnidade,
    periodo,
    quantidadeReservada,
    veiculosDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusAluguel,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(cliente).toBe("Thiago Ramos")
    expect(veiculo).toBe("Hatch Compacto")
    expect(valorUnidade).toBe(120)
    expect(periodo).toBe(4)
    expect(quantidadeReservada).toBe(1)
    expect(veiculosDisponiveis).toBe(6)
    expect(valorPago).toBe(480)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(480)

})


test("Deve verificar corretamente veículos disponíveis", () => {

    expect(disponibilidadeStatus).toBe("Veículos disponíveis")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(480)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Aluguel quitado")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusAluguel).toBe("Aluguel confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Thiago Ramos")
    expect(resumo).toContain("Hatch Compacto")
    expect(resumo).toContain("480")
    expect(resumo).toContain("Sem desconto")
    expect(resumo).toContain("Aluguel quitado")
    expect(resumo).toContain("Aluguel confirmado")

})
