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
    statusSimposio,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Luiz Fernando")
    expect(idade).toBe(40)
    expect(cargo).toBe("participante")
    expect(possuiInscricao).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorInscricao).toBe(220)
    expect(valorPago).toBe(300)

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

    expect(troco).toBe(80)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusSimposio).toBe("Check-in do simpósio confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Luiz Fernando")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("220")
    expect(resumo).toContain("300")
    expect(resumo).toContain("80")
    expect(resumo).toContain("Credenciamento liberado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in do simpósio confirmado")

})
