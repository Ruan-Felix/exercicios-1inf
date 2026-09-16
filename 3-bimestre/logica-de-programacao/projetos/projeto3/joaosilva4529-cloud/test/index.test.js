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
    statusParque,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("João Silva")
    expect(idade).toBe(16)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(impedido).toBe(false)
    expect(valorIngresso).toBe(60)
    expect(valorPago).toBe(50)

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

    expect(pagamentoStatus).toBe("Pagamento insuficiente")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusParque).toBe("Check-in do parque não confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("João Silva")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("60")
    expect(resumo).toContain("50")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Entrada negada")
    expect(resumo).toContain("Pagamento insuficiente")
    expect(resumo).toContain("Check-in do parque não confirmado")

})
