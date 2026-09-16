const {
    nome,
    idade,
    categoria,
    possuiInscricao,
    suspenso,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusCorrida,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Rafael Carlos")
    expect(idade).toBe(21)
    expect(categoria).toBe("comum")
    expect(possuiInscricao).toBe(true)
    expect(suspenso).toBe(false)
    expect(valorInscricao).toBe(90)
    expect(valorPago).toBe(90)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Retirada de kit liberada")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusCorrida).toBe("Participação na corrida confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Rafael Carlos")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("90")
    expect(resumo).toContain("90")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Retirada de kit liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Participação na corrida confirmada")

})
