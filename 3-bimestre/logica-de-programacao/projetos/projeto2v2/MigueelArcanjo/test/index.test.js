const {
    aluno,
    plano,
    valorMensalidade,
    taxaMatricula,
    idade,
    categoriaEstudante,
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

    expect(aluno).toBe("Leandro Costa")
    expect(plano).toBe("Plano Mensal")
    expect(valorMensalidade).toBe(120)
    expect(taxaMatricula).toBe(30)
    expect(idade).toBe(22)
    expect(categoriaEstudante).toBe(1)
    expect(valorPago).toBe(110)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(150)

})


test("Deve verificar corretamente idade mínima de 16 anos", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de estudante aplicado")
    expect(valorDesconto).toBe(40)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(110)

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

    expect(resumo).toContain("Leandro Costa")
    expect(resumo).toContain("Plano Mensal")
    expect(resumo).toContain("110")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula confirmada")

})
