const {
    aluno,
    turma,
    valorMensalidade,
    taxaMatricula,
    idadeAluno,
    possuiConvenio,
    valorPago,
    valorBase,
    idadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(aluno).toBe("Enzo Ribeiro")
    expect(turma).toBe("Turma Avançada")
    expect(valorMensalidade).toBe(300)
    expect(taxaMatricula).toBe(50)
    expect(idadeAluno).toBe(9)
    expect(possuiConvenio).toBe(0)
    expect(valorPago).toBe(350)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(350)

})


test("Deve verificar corretamente idade mínima de 12 anos para a turma avançada", () => {

    expect(idadeStatus).toBe("Idade não permitida para a turma avançada")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

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

    expect(statusMatricula).toBe("Matrícula não pode ser confirmada: idade não permitida para a turma avançada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Enzo Ribeiro")
    expect(resumo).toContain("Turma Avançada")
    expect(resumo).toContain("350")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula não pode ser confirmada: idade não permitida para a turma avançada")

})
