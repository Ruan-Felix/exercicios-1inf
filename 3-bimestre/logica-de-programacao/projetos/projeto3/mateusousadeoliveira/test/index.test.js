const {
    nome,
    idade,
    categoria,
    possuiMatricula,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAula,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Mateus Oliveira")
    expect(idade).toBe(31)
    expect(categoria).toBe("comum")
    expect(possuiMatricula).toBe(true)
    expect(inadimplente).toBe(false)
    expect(valorMensalidade).toBe(100)
    expect(valorPago).toBe(100)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso à aula liberado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusAula).toBe("Presença na aula confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Mateus Oliveira")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("100")
    expect(resumo).toContain("100")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Acesso à aula liberado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Presença na aula confirmada")

})
