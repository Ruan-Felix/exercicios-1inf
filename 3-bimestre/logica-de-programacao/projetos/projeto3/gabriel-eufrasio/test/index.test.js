const {
    nome,
    idade,
    tipoCredencial,
    possuiConvite,
    bloqueado,
    valorEntrada,
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

    expect(nome).toBe("Gabriel Eufrásio")
    expect(idade).toBe(20)
    expect(tipoCredencial).toBe("comum")
    expect(possuiConvite).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorEntrada).toBe(20)
    expect(valorPago).toBe(20)

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

    expect(statusFeira).toBe("Check-in da feira confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Gabriel Eufrásio")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("20")
    expect(resumo).toContain("20")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da feira confirmado")

})
