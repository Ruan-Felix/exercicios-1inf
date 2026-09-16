const {
    nome,
    idade,
    tipoCredencial,
    possuiPasse,
    bloqueado,
    valorPasse,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusConvencao,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Lucas Argolo")
    expect(idade).toBe(16)
    expect(tipoCredencial).toBe("comum")
    expect(possuiPasse).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorPasse).toBe(70)
    expect(valorPago).toBe(100)

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

    expect(troco).toBe(30)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusConvencao).toBe("Check-in da convenção não confirmado")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Lucas Argolo")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("70")
    expect(resumo).toContain("100")
    expect(resumo).toContain("30")
    expect(resumo).toContain("Entrada negada")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Check-in da convenção não confirmado")

})
