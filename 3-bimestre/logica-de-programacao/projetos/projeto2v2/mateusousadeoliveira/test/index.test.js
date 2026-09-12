const {
    aluno,
    turma,
    valorMensalidade,
    taxaMatricula,
    percentualFrequencia,
    notaNivelamento,
    valorPago,
    valorBase,
    frequenciaStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(aluno).toBe("Guilherme Nogueira")
    expect(turma).toBe("9º Ano B")
    expect(valorMensalidade).toBe(500)
    expect(taxaMatricula).toBe(100)
    expect(percentualFrequencia).toBe(90)
    expect(notaNivelamento).toBe(9)
    expect(valorPago).toBe(550)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(600)

})


test("Deve verificar corretamente frequência mínima de 75%", () => {

    expect(frequenciaStatus).toBe("Frequência regular")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto por nota alta aplicado")
    expect(valorDesconto).toBe(50)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(550)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Matrícula quitada")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusMatricula).toBe("Matrícula confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Guilherme Nogueira")
    expect(resumo).toContain("9º Ano B")
    expect(resumo).toContain("550")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula confirmada")

})
