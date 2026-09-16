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
    statusPortao,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Rodrigo Nunes")
    expect(idade).toBe(24)
    expect(categoria).toBe("comum")
    expect(possuiIngresso).toBe(true)
    expect(impedido).toBe(false)
    expect(valorIngresso).toBe(80)
    expect(valorPago).toBe(100)

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

    expect(troco).toBe(20)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusPortao).toBe("Entrada no estádio confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Rodrigo Nunes")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("80")
    expect(resumo).toContain("100")
    expect(resumo).toContain("20")
    expect(resumo).toContain("Acesso liberado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Entrada no estádio confirmada")

})
