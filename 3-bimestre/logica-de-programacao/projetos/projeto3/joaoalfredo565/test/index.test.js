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
    statusPalestra,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("João Alfredo")
    expect(idade).toBe(19)
    expect(categoria).toBe("comum")
    expect(possuiInscricao).toBe(true)
    expect(suspenso).toBe(false)
    expect(valorInscricao).toBe(0)
    expect(valorPago).toBe(0)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Entrada na palestra liberada")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusPalestra).toBe("Presença na palestra confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("João Alfredo")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("0")
    expect(resumo).toContain("0")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada na palestra liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Presença na palestra confirmada")

})
