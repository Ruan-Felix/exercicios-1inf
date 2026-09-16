const {
    nome,
    idade,
    tipoConvite,
    possuiConvite,
    bloqueado,
    valorEntrada,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusFesta,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Isabela Rocha")
    expect(idade).toBe(25)
    expect(tipoConvite).toBe("comum")
    expect(possuiConvite).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorEntrada).toBe(100)
    expect(valorPago).toBe(100)

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

    expect(statusFesta).toBe("Check-in da festa confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Isabela Rocha")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("100")
    expect(resumo).toContain("100")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da festa confirmado")

})
