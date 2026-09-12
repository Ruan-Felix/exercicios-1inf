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

    expect(aluno).toBe("Sabrina Lopes")
    expect(turma).toBe("Turma Intensiva")
    expect(valorMensalidade).toBe(450)
    expect(taxaMatricula).toBe(80)
    expect(percentualFrequencia).toBe(60)
    expect(notaNivelamento).toBe(6)
    expect(valorPago).toBe(530)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(530)

})


test("Deve verificar corretamente frequência mínima de 75%", () => {

    expect(frequenciaStatus).toBe("Frequência insuficiente")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(530)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Matrícula quitada")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusMatricula).toBe("Matrícula não pode ser confirmada: frequência insuficiente")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Sabrina Lopes")
    expect(resumo).toContain("Turma Intensiva")
    expect(resumo).toContain("530")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula não pode ser confirmada: frequência insuficiente")

})
