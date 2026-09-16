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
    statusCompeticao,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Matheus Moura")
    expect(idade).toBe(18)
    expect(categoria).toBe("comum")
    expect(possuiInscricao).toBe(true)
    expect(suspenso).toBe(false)
    expect(valorInscricao).toBe(50)
    expect(valorPago).toBe(50)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Credenciamento liberado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusCompeticao).toBe("Participação confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Matheus Moura")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("50")
    expect(resumo).toContain("50")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Credenciamento liberado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Participação confirmada")

})
