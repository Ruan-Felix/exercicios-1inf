const {
    nome,
    idade,
    tipoConvite,
    possuiReserva,
    inadimplente,
    valorEntrada,
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

    expect(nome).toBe("Aline Ferreira")
    expect(idade).toBe(19)
    expect(tipoConvite).toBe("comum")
    expect(possuiReserva).toBe(true)
    expect(inadimplente).toBe(false)
    expect(valorEntrada).toBe(60)
    expect(valorPago).toBe(60)

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

    expect(statusSessao).toBe("Check-in da sessão confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Aline Ferreira")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("60")
    expect(resumo).toContain("60")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada liberada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da sessão confirmado")

})
