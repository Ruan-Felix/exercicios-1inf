const {
    nome,
    idade,
    categoria,
    possuiCarteirinha,
    inadimplente,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusAcesso,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Eduardo Soares")
    expect(idade).toBe(14)
    expect(categoria).toBe("comum")
    expect(possuiCarteirinha).toBe(true)
    expect(inadimplente).toBe(false)
    expect(valorMensalidade).toBe(90)
    expect(valorPago).toBe(90)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso à piscina negado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusAcesso).toBe("Entrada no clube não confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Eduardo Soares")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("90")
    expect(resumo).toContain("90")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Acesso à piscina negado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Entrada no clube não confirmada")

})
