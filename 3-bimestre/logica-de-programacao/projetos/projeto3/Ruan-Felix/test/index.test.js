const {
    nome,
    idade,
    categoria,
    possuiInscricao,
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

    expect(nome).toBe("Ruan Félix")
    expect(idade).toBe(15)
    expect(categoria).toBe("comum")
    expect(possuiInscricao).toBe(true)
    expect(inadimplente).toBe(false)
    expect(valorMensalidade).toBe(0)
    expect(valorPago).toBe(0)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso à aula negado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusAula).toBe("Presença na aula não confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Ruan Félix")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("0")
    expect(resumo).toContain("0")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Acesso à aula negado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Presença na aula não confirmada")

})
