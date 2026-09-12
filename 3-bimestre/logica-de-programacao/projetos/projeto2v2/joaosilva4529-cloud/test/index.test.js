const {
    contratante,
    pacote,
    valorUnidade,
    periodo,
    quantidadeReservada,
    mesasDisponiveis,
    valorPago,
    valorBase,
    capacidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusOrcamento,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(contratante).toBe("Marcos Teixeira")
    expect(pacote).toBe("Pacote Prata")
    expect(valorUnidade).toBe(200)
    expect(periodo).toBe(4)
    expect(quantidadeReservada).toBe(10)
    expect(mesasDisponiveis).toBe(15)
    expect(valorPago).toBe(800)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(800)

})


test("Deve verificar corretamente mesas disponíveis no salão", () => {

    expect(capacidadeStatus).toBe("Salão comporta o evento")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(800)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Orçamento quitado")

})


test("Deve calcular saldo devedor corretamente", () => {

    expect(saldoDevedor).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusOrcamento).toBe("Orçamento confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Marcos Teixeira")
    expect(resumo).toContain("Pacote Prata")
    expect(resumo).toContain("800")
    expect(resumo).toContain("Sem desconto")
    expect(resumo).toContain("Orçamento quitado")
    expect(resumo).toContain("Orçamento confirmado")

})
