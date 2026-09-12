const {
    aluno,
    curso,
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

    expect(aluno).toBe("Patrícia Gomes")
    expect(curso).toBe("Curso de Violão Avançado")
    expect(valorMensalidade).toBe(100)
    expect(taxaMatricula).toBe(30)
    expect(idade).toBe(14)
    expect(categoriaEstudante).toBe(0)
    expect(valorPago).toBe(130)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(130)

})


test("Deve verificar corretamente idade mínima de 16 anos", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Sem desconto")
    expect(valorDesconto).toBe(0)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(130)

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

    expect(resumo).toContain("Patrícia Gomes")
    expect(resumo).toContain("Curso de Violão Avançado")
    expect(resumo).toContain("130")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula não pode ser confirmada: idade não permitida")

})
