const {
    aluno,
    curso,
    valorMensalidade,
    taxaMatricula,
    idade,
    pagamentoAntecipado,
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

    expect(aluno).toBe("Melissa Rocha")
    expect(curso).toBe("Curso Técnico em Redes")
    expect(valorMensalidade).toBe(700)
    expect(taxaMatricula).toBe(80)
    expect(idade).toBe(17)
    expect(pagamentoAntecipado).toBe(0)
    expect(valorPago).toBe(780)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(780)

})


test("Deve verificar corretamente idade mínima de 18 anos", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(780)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Matrícula quitada")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusMatricula).toBe("Matrícula não pode ser confirmada: idade não permitida")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Melissa Rocha")
    expect(resumo).toContain("Curso Técnico em Redes")
    expect(resumo).toContain("780")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula não pode ser confirmada: idade não permitida")

})
