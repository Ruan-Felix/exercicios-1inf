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
    statusFestival,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Cristal Fernandes")
    expect(idade).toBe(18)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(impedido).toBe(false)
    expect(valorIngresso).toBe(180)
    expect(valorPago).toBe(150)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso ao festival liberado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusFestival).toBe("Entrada no festival não confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Cristal Fernandes")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("180")
    expect(resumo).toContain("150")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Acesso ao festival liberado")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("Entrada no festival não confirmada")

})
