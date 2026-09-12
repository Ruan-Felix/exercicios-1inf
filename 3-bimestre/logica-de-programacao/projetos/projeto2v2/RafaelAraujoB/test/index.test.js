const {
    aluno,
    idioma,
    valorMensalidade,
    taxaMatricula,
    notaTeste,
    possuiIrmaoMatriculado,
    valorPago,
    valorBase,
    nivelamentoStatus,
    bolsaStatus,
    valorBolsa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(aluno).toBe("Caio Ferreira")
    expect(idioma).toBe("Inglês")
    expect(valorMensalidade).toBe(350)
    expect(taxaMatricula).toBe(60)
    expect(notaTeste).toBe(8)
    expect(possuiIrmaoMatriculado).toBe(1)
    expect(valorPago).toBe(350)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(410)

})


test("Deve verificar corretamente nota mínima de 5 no teste de nivelamento", () => {

    expect(nivelamentoStatus).toBe("Aprovado no nivelamento")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(bolsaStatus).toBe("Bolsa aplicada")
    expect(valorBolsa).toBe(60)

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

    expect(statusMatricula).toBe("Matrícula confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Caio Ferreira")
    expect(resumo).toContain("Inglês")
    expect(resumo).toContain("350")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula confirmada")

})
