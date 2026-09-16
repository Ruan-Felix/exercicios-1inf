const {
    nome,
    idade,
    categoria,
    possuiReserva,
    bloqueado,
    valorReserva,
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

    expect(nome).toBe("Lucas Oliveira")
    expect(idade).toBe(17)
    expect(categoria).toBe("comum")
    expect(possuiReserva).toBe(true)
    expect(bloqueado).toBe(false)
    expect(valorReserva).toBe(60)
    expect(valorPago).toBe(70)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade não permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso à sala negado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(10)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusPartida).toBe("Partida não confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Lucas Oliveira")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("60")
    expect(resumo).toContain("70")
    expect(resumo).toContain("10")
    expect(resumo).toContain("Acesso à sala negado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Partida não confirmada")

})
