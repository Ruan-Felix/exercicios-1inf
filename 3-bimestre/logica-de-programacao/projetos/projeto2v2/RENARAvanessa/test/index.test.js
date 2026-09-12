const {
    paciente,
    tratamento,
    valorMensalidade,
    taxaMatricula,
    idadePaciente,
    possuiConvenio,
    valorPago,
    valorBase,
    idadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusConsulta,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados", () => {

    expect(paciente).toBe("Beatriz Andrade")
    expect(tratamento).toBe("Limpeza Dental")
    expect(valorMensalidade).toBe(150)
    expect(taxaMatricula).toBe(20)
    expect(idadePaciente).toBe(25)
    expect(possuiConvenio).toBe(1)
    expect(valorPago).toBe(135)

})


test("Deve calcular o valor base corretamente", () => {

    expect(valorBase).toBe(170)

})


test("Deve verificar corretamente idade mínima de 12 anos para o tratamento", () => {

    expect(idadeStatus).toBe("Idade permitida para o tratamento")

})


test("Deve aplicar corretamente a regra do RF04", () => {

    expect(descontoStatus).toBe("Desconto de convênio aplicado")
    expect(valorDesconto).toBe(35)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(135)

})


test("Deve verificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Consulta quitada")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve verificar corretamente a situação final", () => {

    expect(statusConsulta).toBe("Consulta confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Beatriz Andrade")
    expect(resumo).toContain("Limpeza Dental")
    expect(resumo).toContain("135")
    expect(resumo).toContain("Consulta quitada")
    expect(resumo).toContain("Consulta confirmada")

})
