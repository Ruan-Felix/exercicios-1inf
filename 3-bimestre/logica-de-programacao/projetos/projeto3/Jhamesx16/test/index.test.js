const {
    nome,
    idade,
    cargo,
    possuiInscricao,
    bloqueado,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusFeira,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("James Costa")
    expect(idade).toBe(33)
    expect(cargo).toBe("participante")
    expect(possuiInscricao).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorInscricao).toBe(250)
    expect(valorPago).toBe(250)

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

    expect(statusFeira).toBe("Check-in da feira confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("James Costa")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("250")
    expect(resumo).toContain("250")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Credenciamento liberado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da feira confirmado")

})
