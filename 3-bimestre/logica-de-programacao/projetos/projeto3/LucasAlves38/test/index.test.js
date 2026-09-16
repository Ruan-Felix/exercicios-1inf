const {
    nome,
    idade,
    tipoCredencial,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusExposicao,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Lucas Alves")
    expect(idade).toBe(22)
    expect(tipoCredencial).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(impedido).toBe(false)
    expect(valorIngresso).toBe(25)
    expect(valorPago).toBe(25)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Entrada liberada")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusExposicao).toBe("Check-in da exposição confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Lucas Alves")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("25")
    expect(resumo).toContain("25")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da exposição confirmado")

})
