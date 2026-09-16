const {
    nome,
    idade,
    categoria,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusVisita,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Shawan Magalhães")
    expect(idade).toBe(14)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(impedido).toBe(false)
    expect(valorIngresso).toBe(15)
    expect(valorPago).toBe(15)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Entrada negada")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusVisita).toBe("Check-in da visita não confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Shawan Magalhães")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("15")
    expect(resumo).toContain("15")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada negada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da visita não confirmado")

})
