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

    expect(nome).toBe("Vagner Borges")
    expect(idade).toBe(21)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorIngresso).toBe(45)
    expect(valorPago).toBe(45)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Entrada na sala liberada")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusSessao).toBe("Check-in da sessão confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Vagner Borges")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("45")
    expect(resumo).toContain("45")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada na sala liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da sessão confirmado")

})
