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
    statusPartida,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Robson Castro")
    expect(idade).toBe(23)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(impedido).toBe(false)
    expect(valorIngresso).toBe(45)
    expect(valorPago).toBe(60)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso liberado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(15)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusPartida).toBe("Entrada na partida confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Robson Castro")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("45")
    expect(resumo).toContain("60")
    expect(resumo).toContain("15")
    expect(resumo).toContain("Acesso liberado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Entrada na partida confirmada")

})
