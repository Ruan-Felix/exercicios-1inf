const {
    nome,
    idade,
    categoria,
    possuiIngresso,
    bloqueado,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusSessao,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Gabriel Torres")
    expect(idade).toBe(15)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorIngresso).toBe(32)
    expect(valorPago).toBe(32)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Entrada na sala negada")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusSessao).toBe("Check-in da sessão não confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Gabriel Torres")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("32")
    expect(resumo).toContain("32")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada na sala negada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da sessão não confirmado")

})
