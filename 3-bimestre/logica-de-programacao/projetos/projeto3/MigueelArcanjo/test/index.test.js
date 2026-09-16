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

    expect(nome).toBe("Miguel Arcanjo")
    expect(idade).toBe(17)
    expect(categoria).toBe("comum")
    expect(possuiMatricula).toBe(true)
    expect(inadimplente).toBe(false)
    expect(valorMensalidade).toBe(150)
    expect(valorPago).toBe(150)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso ao laboratório negado")

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

    expect(resumo).toContain("Miguel Arcanjo")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("150")
    expect(resumo).toContain("150")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Acesso ao laboratório negado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Presença na aula não confirmada")

})
