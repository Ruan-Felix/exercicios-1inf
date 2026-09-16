const {
    nome,
    idade,
    categoria,
    possuiCarteirinha,
    suspenso,
    valorReserva,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusReserva,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do registro", () => {

    expect(nome).toBe("Rávide Oliveira")
    expect(idade).toBe(16)
    expect(categoria).toBe("comum")
    expect(possuiCarteirinha).toBe(true)
    expect(suspenso).toBe(false)
    expect(valorReserva).toBe(10)
    expect(valorPago).toBe(10)

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

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusReserva).toBe("Reserva da sala não confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Rávide Oliveira")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("10")
    expect(resumo).toContain("10")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Acesso à sala negado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Reserva da sala não confirmada")

})
