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
    statusShow,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Victor Macena")
    expect(idade).toBe(17)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(impedido).toBe(false)
    expect(valorIngresso).toBe(90)
    expect(valorPago).toBe(120)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso ao show negado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(30)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusShow).toBe("Entrada no show não confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Victor Macena")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("90")
    expect(resumo).toContain("120")
    expect(resumo).toContain("30")
    expect(resumo).toContain("Acesso ao show negado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Entrada no show não confirmada")

})
