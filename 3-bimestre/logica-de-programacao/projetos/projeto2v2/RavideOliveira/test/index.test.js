const {
    aluno,
    curso,
    valorMensalidade,
    taxaMatricula,
    notaTeste,
    possuiIrmaoMatriculado,
    valorPago,
    valorBase,
    aptidaoStatus,
    bolsaStatus,
    valorBolsa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(aluno).toBe("Melissa Rocha")
    expect(curso).toBe("Curso de Confeitaria Básica")
    expect(valorMensalidade).toBe(300)
    expect(taxaMatricula).toBe(50)
    expect(notaTeste).toBe(3)
    expect(possuiIrmaoMatriculado).toBe(0)
    expect(valorPago).toBe(350)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(350)

})


test("Deve verificar corretamente nota mínima de 5 no teste de aptidão", () => {

    expect(aptidaoStatus).toBe("Reprovado no teste de aptidão")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(bolsaStatus).toBe("Sem bolsa")
    expect(valorBolsa).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(350)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Matrícula quitada")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusMatricula).toBe("Matrícula não pode ser confirmada: reprovado no teste de aptidão")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Melissa Rocha")
    expect(resumo).toContain("Curso de Confeitaria Básica")
    expect(resumo).toContain("350")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula não pode ser confirmada: reprovado no teste de aptidão")

})
