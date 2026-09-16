const {
    nome,
    idade,
    categoria,
    possuiReserva,
    inadimplente,
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

    expect(nome).toBe("Levy Moraes")
    expect(idade).toBe(29)
    expect(categoria).toBe("comum")
    expect(possuiReserva).toBe(true)
    expect(inadimplente).toBe(false)
    expect(valorReserva).toBe(80)
    expect(valorPago).toBe(80)

})


test("Deve identificar corretamente a idade", () => {

    expect(idadeStatus).toBe("Idade permitida")

})


test("Deve identificar corretamente o nível de acesso", () => {

    expect(nivelAcesso).toBe("Acesso comum")

})


test("Deve decidir corretamente a liberação de acesso", () => {

    expect(acessoStatus).toBe("Acesso à quadra liberado")

})


test("Deve identificar corretamente a situação do pagamento", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(0)

})


test("Deve decidir corretamente a situação final", () => {

    expect(statusReserva).toBe("Reserva da quadra confirmada")

})


test("Deve gerar um resumo contendo as informações principais", () => {

    expect(resumo).toContain("Levy Moraes")
    expect(resumo).toContain("Acesso comum")
    expect(resumo).toContain("80")
    expect(resumo).toContain("80")
    expect(resumo).toContain("0")
    expect(resumo).toContain("Acesso à quadra liberado")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain("Reserva da quadra confirmada")

})
