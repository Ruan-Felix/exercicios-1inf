const {
    aluno,
    categoriaCnh,
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

    expect(aluno).toBe("Rafael Tomé")
    expect(categoriaCnh).toBe("B")
    expect(valorMensalidade).toBe(900)
    expect(taxaMatricula).toBe(100)
    expect(idade).toBe(19)
    expect(pagamentoAntecipado).toBe(1)
    expect(valorPago).toBe(930)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(1000)

})


test("Deve verificar corretamente idade mínima de 18 anos", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de pagamento antecipado aplicado")
    expect(valorDesconto).toBe(70)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(930)

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

    expect(resumo).toContain("Rafael Tomé")
    expect(resumo).toContain("B")
    expect(resumo).toContain("930")
    expect(resumo).toContain("Matrícula quitada")
    expect(resumo).toContain("Matrícula confirmada")

})
